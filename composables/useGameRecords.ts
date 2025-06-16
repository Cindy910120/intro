import { ref, computed } from 'vue'
import { serverTimestamp } from 'firebase/firestore'
import { useFirestore } from './useFirebase'
import { useFirebaseAnalytics } from './useAnalytics'

interface GameData {
  gameName: string
  score: number
  moves?: number
  time?: number
  difficulty?: string
  gameType?: string
}

interface GameRecord {
  id?: string
  playerName: string
  gameName: string
  score: number
  moves: number
  time: number
  difficulty: string
  completedAt: any
  gameType: string
  createdAt?: any
  updatedAt?: any
}

export const useGameRecords = () => {
  const { createDocument, listenToCollection } = useFirestore()
  const { trackGameEvent } = useFirebaseAnalytics()
  
  const playerName = ref('')
  const personalRecords = ref<GameRecord[]>([])
  const globalRecords = ref<GameRecord[]>([])
  const currentGameFilter = ref('')
  const isPersonalLoading = ref(false)
  const isGlobalLoading = ref(false)
  let personalUnsubscribe: (() => void) | null = null
  let globalUnsubscribe: (() => void) | null = null
    // 快取機制（針對不同類型記錄使用不同的快取時間）
  const recordsCache = new Map<string, GameRecord[]>()
  const cacheExpiry = new Map<string, number>()
  const PERSONAL_CACHE_DURATION = 15000 // 個人記錄快取15秒
  const GLOBAL_CACHE_DURATION = 60000 // 全球記錄快取60秒（更長，因為變化較少）
    // 儲存遊戲紀錄
  const saveGameRecord = async (gameData: GameData) => {
    // 如果沒有玩家名稱，使用默認名稱
    if (!playerName.value.trim()) {
      playerName.value = '匿名玩家'
    }    const record = {
      playerName: playerName.value.trim(),
      gameName: gameData.gameName,
      score: gameData.score || 0,
      moves: gameData.moves || 0,
      time: gameData.time || 0,
      difficulty: gameData.difficulty || 'normal',
      completedAt: new Date(),
      gameType: gameData.gameType || 'single'
    }

    try {
      const docId = await createDocument('game_records', record)
      
      // 追蹤遊戲完成事件
      try {
        trackGameEvent(gameData.gameName, 'record_saved', gameData.score)
      } catch (analyticsError) {
        console.warn('Analytics 追蹤失敗，但不影響記錄保存:', analyticsError)
      }
      
      return record
    } catch (error: any) {
      console.error('儲存遊戲紀錄失敗:', error)
      throw error
    }
  }  // 檢查快取是否有效
  const isCacheValid = (cacheKey: string): boolean => {
    const expiry = cacheExpiry.get(cacheKey)
    return expiry ? Date.now() < expiry : false
  }
  // 設置快取
  const setCache = (cacheKey: string, data: GameRecord[], isGlobal: boolean = false) => {
    recordsCache.set(cacheKey, data)
    const duration = isGlobal ? GLOBAL_CACHE_DURATION : PERSONAL_CACHE_DURATION
    cacheExpiry.set(cacheKey, Date.now() + duration)
  }

  // 獲取快取
  const getCache = (cacheKey: string): GameRecord[] | null => {
    if (isCacheValid(cacheKey)) {
      return recordsCache.get(cacheKey) || null
    }
    return null
  }
  // 監聽個人遊戲紀錄（只有輸入名字才查詢）
  const startPersonalListening = (gameName: string) => {
    // 清空之前的個人記錄
    personalRecords.value = []
    
    // 如果沒有輸入玩家名稱，停止監聽並保持空狀態
    if (!playerName.value.trim()) {
      if (personalUnsubscribe) {
        personalUnsubscribe()
        personalUnsubscribe = null
      }
      isPersonalLoading.value = false
      return
    }
    
    const cacheKey = `personal_${gameName}_${playerName.value.trim()}`
    const cachedData = getCache(cacheKey)
    
    // 如果有快取且有效，立即使用快取資料
    if (cachedData) {
      personalRecords.value = cachedData
      isPersonalLoading.value = false
      return
    }
    
    isPersonalLoading.value = true
    currentGameFilter.value = gameName
    
    if (personalUnsubscribe) {
      personalUnsubscribe()
    }

    // 優化查詢：使用複合索引和限制結果數量
    const conditions = [
      { field: 'gameName', operator: '==' as const, value: gameName },
      { field: 'playerName', operator: '==' as const, value: playerName.value.trim() }
    ]

    personalUnsubscribe = listenToCollection(
      'game_records',
      (docs) => {
        const records = docs as GameRecord[]
        personalRecords.value = records
        setCache(cacheKey, records, false) // 個人記錄快取
        isPersonalLoading.value = false
      },
      conditions,
      'completedAt', // 按完成時間排序，這樣可以更快獲取最新記錄
      'desc',
      20 // 個人記錄限制20筆就足夠了
    )
  }// 監聽全球遊戲紀錄（最優化版本）
  const startGlobalListening = (gameName: string) => {
    const cacheKey = `global_${gameName}`
    const cachedData = getCache(cacheKey)
    
    // 如果有快取且有效，立即使用快取資料
    if (cachedData) {
      globalRecords.value = cachedData
      isGlobalLoading.value = false
      return
    }
    
    isGlobalLoading.value = true
    currentGameFilter.value = gameName
    
    if (globalUnsubscribe) {
      globalUnsubscribe()
    }

    const conditions = gameName ? [{ field: 'gameName', operator: '==' as const, value: gameName }] : []

    // 根據遊戲名稱決定最佳查詢策略
    let orderField = 'completedAt'
    let orderDirection: 'asc' | 'desc' = 'desc'
    let limitCount = 200 // 增加到200筆以獲取足夠的數據進行排序

    // 根據遊戲名稱推斷最佳排序方式
    if (gameName.toLowerCase().includes('memory')) {
      // 記憶遊戲可能需要按moves排序，但先獲取所有數據
      orderField = 'completedAt'
    } else if (gameName.toLowerCase().includes('reaction')) {
      // 反應測試，先獲取所有數據
      orderField = 'completedAt'  
    } else if (gameName.toLowerCase().includes('number')) {
      // 數字接龍，先獲取所有數據
      orderField = 'completedAt'
    } else {
      // 其他遊戲，先獲取所有數據
      orderField = 'completedAt'
    }

    globalUnsubscribe = listenToCollection(
      'game_records',
      (docs) => {
        let records = docs as GameRecord[]
        
        if (records.length === 0) {
          globalRecords.value = []
          isGlobalLoading.value = false
          return
        }

        // 智能排序：根據實際資料的遊戲類型來排序
        const gameType = records[0]?.gameType || ''
        
        if (gameType === 'memory' || gameName.toLowerCase().includes('memory')) {
          // 記憶遊戲：步數越少越好，過濾掉無效記錄
          records = records
            .filter(r => r.moves && r.moves > 0)
            .sort((a, b) => a.moves - b.moves)
        } else if (gameType === 'reaction' || gameName.toLowerCase().includes('reaction')) {
          // 反應測試：時間越短越好，過濾掉無效記錄
          records = records
            .filter(r => r.time && r.time > 0)
            .sort((a, b) => a.time - b.time)
        } else if (gameType === 'number' || gameName.toLowerCase().includes('number')) {
          // 數字接龍：時間越短越好，過濾掉無效記錄
          records = records
            .filter(r => r.time && r.time > 0)
            .sort((a, b) => a.time - b.time)
        } else {
          // 其他遊戲（顏色匹配、打地鼠）：分數越高越好
          records = records
            .filter(r => r.score !== undefined && r.score >= 0)
            .sort((a, b) => b.score - a.score)
        }
        
        // 只取前50名並去重（同一玩家只保留最佳記錄）
        const uniqueRecords = new Map<string, GameRecord>()
        
        for (const record of records) {
          const playerId = record.playerName
          const existingRecord = uniqueRecords.get(playerId)
          
          if (!existingRecord) {
            uniqueRecords.set(playerId, record)
          } else {
            // 比較是否比現有記錄更好
            let isBetter = false
            
            if (gameType === 'memory' || gameName.toLowerCase().includes('memory')) {
              isBetter = record.moves < existingRecord.moves
            } else if (gameType === 'reaction' || gameType === 'number' || 
                      gameName.toLowerCase().includes('reaction') || gameName.toLowerCase().includes('number')) {
              isBetter = record.time < existingRecord.time
            } else {
              isBetter = record.score > existingRecord.score
            }
            
            if (isBetter) {
              uniqueRecords.set(playerId, record)
            }
          }
        }
        
        // 轉換回陣列並重新排序
        const finalRecords = Array.from(uniqueRecords.values())
        
        if (gameType === 'memory' || gameName.toLowerCase().includes('memory')) {
          finalRecords.sort((a, b) => a.moves - b.moves)
        } else if (gameType === 'reaction' || gameType === 'number' || 
                  gameName.toLowerCase().includes('reaction') || gameName.toLowerCase().includes('number')) {
          finalRecords.sort((a, b) => a.time - b.time)
        } else {
          finalRecords.sort((a, b) => b.score - a.score)
        }
          globalRecords.value = finalRecords.slice(0, 5) // 只顯示前5名
        setCache(cacheKey, globalRecords.value, true) // 全球記錄快取（更長時間）
        isGlobalLoading.value = false
      },
      conditions,
      orderField,
      orderDirection,
      limitCount
    )
  }

  // 停止監聽個人紀錄
  const stopPersonalListening = () => {
    if (personalUnsubscribe) {
      personalUnsubscribe()
      personalUnsubscribe = null
    }
  }

  // 停止監聽全球紀錄
  const stopGlobalListening = () => {
    if (globalUnsubscribe) {
      globalUnsubscribe()
      globalUnsubscribe = null
    }
  }// 計算屬性：排序後的個人紀錄
  const sortedPersonalRecords = computed(() => {
    let records = [...personalRecords.value]
    
    // 根據遊戲類型使用不同的排序邏輯
    records.sort((a, b) => {
      // 記憶翻牌：步數越少越好（按 moves 升序排序）
      if (a.gameType === 'memory' && b.gameType === 'memory') {
        return a.moves - b.moves
      }
      
      // 反應測試：時間越短越好（按 time 升序排序，time 為毫秒數）
      if (a.gameType === 'reaction' && b.gameType === 'reaction') {
        return a.time - b.time
      }
      
      // 數字接龍：時間越短越好（按 time 升序排序，time 為秒數）
      if (a.gameType === 'number' && b.gameType === 'number') {
        return a.time - b.time
      }
      
      // 顏色匹配和打地鼠：分數越高越好（按 score 降序排序）
      if ((a.gameType === 'color' && b.gameType === 'color') || 
          (a.gameType === 'mole' && b.gameType === 'mole')) {
        return b.score - a.score
      }
      
      // 默認排序（用於混合類型，但正常情況下不會發生）
      return b.score - a.score
    })
    
    return records.slice(0, 10) // 只顯示前10名
  })
  // 計算屬性：排序後的全球紀錄（已在查詢時排序）
  const sortedGlobalRecords = computed(() => {
    // 全球紀錄已經在 startGlobalListening 中排序過了
    return globalRecords.value
  })
  // 獲取個人最佳紀錄（只有輸入名字才顯示）
  const getPersonalBest = computed(() => {
    // 如果沒有輸入玩家名稱，返回 null
    if (!playerName.value.trim()) return null
    
    if (sortedPersonalRecords.value.length === 0) return null
    return sortedPersonalRecords.value[0]
  })

  // 獲取全球最佳紀錄
  const getGlobalBest = computed(() => {
    if (sortedGlobalRecords.value.length === 0) return null
    return sortedGlobalRecords.value[0]
  })
  // 格式化時間顯示
  const formatTime = (seconds: number) => {
    if (seconds < 60) {
      return `${seconds}秒`
    }
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}分${remainingSeconds}秒`
  }

  // 格式化日期顯示
  const formatDate = (timestamp: any) => {
    if (!timestamp) return ''
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleString('zh-TW', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }
  
  // 預載常用遊戲紀錄（提升初始載入速度）
  const preloadCommonGames = () => {
    const commonGames = ['memory', 'reaction', 'color', 'mole', 'number']
    commonGames.forEach(gameName => {
      const cacheKey = `global_${gameName}`
      if (!isCacheValid(cacheKey)) {
        // 預載前5筆記錄即可
        const { listenToCollection } = useFirestore()
        const conditions = [{ field: 'gameName', operator: '==' as const, value: gameName }]
        
        listenToCollection(
          'game_records',
          (docs) => {
            setCache(cacheKey, docs as GameRecord[])
          },
          conditions,
          'completedAt',
          'desc',
          5 // 只預載5筆記錄
        )
      }
    })
  }

  return {
    playerName,
    personalRecords: sortedPersonalRecords,
    globalRecords: sortedGlobalRecords,
    isPersonalLoading,
    isGlobalLoading,
    getPersonalBest,
    getGlobalBest,
    saveGameRecord,
    startPersonalListening,
    startGlobalListening,
    stopPersonalListening,
    stopGlobalListening,
    formatTime,
    formatDate,
    preloadCommonGames // 暴露預載功能
  }
}

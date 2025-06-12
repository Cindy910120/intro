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
  const gameRecords = ref<GameRecord[]>([])
  const currentGameFilter = ref('')
  const viewMode = ref<'personal' | 'global'>('personal')
  const isLoading = ref(false)
  let unsubscribe: (() => void) | null = null
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
  }  // 監聽遊戲紀錄
  const startListening = (gameName: string) => {
    // 設置 loading 狀態
    isLoading.value = true
    currentGameFilter.value = gameName
    
    if (unsubscribe) {
      unsubscribe()
    }

    const conditions = gameName ? [{ field: 'gameName', operator: '==' as const, value: gameName }] : []
    
    // 如果是個人模式，加入玩家名稱過濾
    if (viewMode.value === 'personal' && playerName.value.trim()) {
      conditions.push({ field: 'playerName', operator: '==' as const, value: playerName.value.trim() })
    }

    console.log('開始監聽遊戲紀錄:', {
      gameName,
      viewMode: viewMode.value,
      playerName: playerName.value,
      conditions
    })

    unsubscribe = listenToCollection(
      'game_records',
      (docs) => {
        console.log('收到遊戲紀錄更新:', docs)
        gameRecords.value = docs as GameRecord[]
        // 數據加載完成，關閉 loading 狀態
        isLoading.value = false
      },
      conditions,
      'score', // 按分數排序
      'desc'   // 降序排列
    )
  }

  // 停止監聽
  const stopListening = () => {
    if (unsubscribe) {
      unsubscribe()
      unsubscribe = null
    }
  }  // 切換檢視模式
  const toggleViewMode = () => {
    viewMode.value = viewMode.value === 'personal' ? 'global' : 'personal'
    // 立即重新開始監聽以應用新的模式
    if (currentGameFilter.value) {
      startListening(currentGameFilter.value)
    }
  }// 計算屬性：過濾後的紀錄
  const filteredRecords = computed(() => {
    let records = [...gameRecords.value]
    
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

  // 獲取最佳紀錄
  const getBestRecord = computed(() => {
    if (filteredRecords.value.length === 0) return null
    return filteredRecords.value[0]
  })

  // 獲取個人最佳紀錄
  const getPersonalBest = computed(() => {
    if (!playerName.value.trim()) return null
    
    const personalRecords = gameRecords.value.filter(
      record => record.playerName === playerName.value.trim()
    )
    
    if (personalRecords.length === 0) return null
    
    personalRecords.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score
      }
      return a.time - b.time
    })
    
    return personalRecords[0]
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
  return {
    playerName,
    gameRecords,
    viewMode,
    isLoading,
    filteredRecords,
    getBestRecord,
    getPersonalBest,
    saveGameRecord,
    startListening,
    stopListening,
    toggleViewMode,
    formatTime,
    formatDate
  }
}

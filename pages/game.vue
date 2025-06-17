<template>
  <div class="game-container">    <!-- 遊戲標題區域 -->
    <div class="game-header">
      <h1 class="game-title">🎮 迷你遊戲中心</h1>
      <p class="game-subtitle">體驗有趣的互動小遊戲，電腦手機都能玩！</p>
      
      <!-- 提醒文字 -->
      <div class="game-reminder">
        <span class="reminder-icon">⚠️</span>
        <span class="reminder-text">遊玩前記得輸入姓名喔！</span>
      </div>
    </div>

    <!-- 遊戲選單 -->
    <div class="game-menu">
      <button
        v-for="(game, index) in games"
        :key="index"
        @click="selectGame(index)"
        :class="['game-menu-item', { active: currentGame === index }]"
      >        <span class="game-icon">{{ game.icon }}</span>
        <span class="game-name">{{ game.name }}</span>
      </button>
    </div>
    
    <!-- 主要遊戲區域 -->
    <div class="main-game-area">
      <!-- 遊戲內容 -->
      <div class="game-content-wrapper">
        <!-- 遊戲區域 -->
        <div class="game-area">
          <!-- 遊戲1: 記憶翻牌 -->
          <div v-if="currentGame === 0" class="memory-game game-content">
        <div class="game-info">
          <h3>🧠 記憶翻牌</h3>
          <p>翻開兩張相同的卡片！</p>
          <div class="game-stats">
            <span>步數: {{ memoryGame.moves }}</span>
            <span>配對: {{ memoryGame.matches }}/8</span>
            <button @click="resetMemoryGame" class="reset-btn">重新開始</button>
          </div>
        </div>
        <div class="memory-board">
          <div
            v-for="(card, index) in memoryGame.cards"
            :key="index"
            @click="flipCard(index)"
            :class="['memory-card', { flipped: card.flipped, matched: card.matched }]"
          >
            <div class="card-front">?</div>
            <div class="card-back">{{ card.value }}</div>
          </div>
        </div>
        <div v-if="memoryGame.matches === 8" class="victory-message">
          🎉 恭喜完成！用了 {{ memoryGame.moves }} 步
        </div>
      </div>

      <!-- 遊戲2: 反應速度測試 -->
      <div v-if="currentGame === 1" class="reaction-game game-content">
        <div class="game-info">
          <h3>⚡ 反應速度測試</h3>
          <p>等待綠色出現立即點擊！</p>
          <div class="game-stats">
            <span v-if="reactionGame.bestTime">最佳: {{ reactionGame.bestTime }}ms</span>
            <span v-if="reactionGame.lastTime">上次: {{ reactionGame.lastTime }}ms</span>
          </div>
        </div>
        <div class="reaction-area">
          <div 
            :class="['reaction-target', reactionGame.state]"
            @click="handleReactionClick"
          >
            <div v-if="reactionGame.state === 'waiting'" class="reaction-text">
              點擊「開始測試」開始
            </div>
            <div v-else-if="reactionGame.state === 'ready'" class="reaction-text">
              等待綠色出現...
            </div>
            <div v-else-if="reactionGame.state === 'go'" class="reaction-text">
              點擊我！
            </div>
            <div v-else-if="reactionGame.state === 'too-early'" class="reaction-text">
              太早了！重新開始
            </div>
          </div>
          <button 
            v-if="reactionGame.state === 'waiting'"
            @click="startReactionTest"
            class="start-btn"
          >
            開始測試
          </button>
        </div>
      </div>      <!-- 遊戲3: 數字接龍 -->
      <div v-if="currentGame === 2" class="number-game game-content">
        <div class="game-info">
          <h3>🔢 數字接龍</h3>
          <p>按順序點擊數字 1-25！</p>
          <div class="game-stats">
            <span v-if="numberGame.isPlaying">時間: {{ numberGame.time }}s</span>
            <span v-if="numberGame.isPlaying">進度: {{ numberGame.current }}/25</span>
            <button @click="numberGame.isPlaying ? resetNumberGame() : startNumberGame()" class="reset-btn">
              {{ numberGame.isPlaying ? '重新開始' : '開始遊戲' }}
            </button>
          </div>
        </div>
        <div v-if="!numberGame.isPlaying && !numberGame.gameCompleted" class="waiting-message">
          <div class="waiting-icon">🎯</div>
          <div class="waiting-text">點擊「開始遊戲」開始挑戰！</div>
        </div>
        <div v-else class="number-board">
          <div
            v-for="(number, index) in numberGame.numbers"
            :key="index"
            @click="clickNumber(number)"
            :class="['number-cell', { 
              clicked: number.clicked, 
              wrong: number.wrong 
            }]"
          >
            {{ numberGame.isPlaying || number.clicked ? number.value : '?' }}
          </div>
        </div>
        <div v-if="numberGame.gameCompleted" class="victory-message">
          🎉 完成！用時 {{ numberGame.time }} 秒
        </div>
      </div><!-- 遊戲4: 顏色匹配 -->
      <div v-if="currentGame === 3" class="color-game game-content">        <div class="game-info">
          <h3>🎨 顏色匹配</h3>
          <p>根據文字內容選擇正確的顏色，不要被文字顏色迷惑！</p>
          <div class="game-stats">
            <span>分數: {{ colorGame.score }}</span>
            <span v-if="colorGame.isPlaying">時間: {{ colorGame.timeLeft }}s</span>
            <button @click="colorGame.isPlaying ? resetColorGame() : startColorGame()" class="reset-btn">
              {{ colorGame.isPlaying ? '重新開始' : '開始遊戲' }}
            </button>
          </div>
        </div>
        <div v-if="!colorGame.isPlaying && !colorGame.gameOver" class="waiting-message">
          <div class="waiting-icon">🎯</div>
          <div class="waiting-text">點擊「開始遊戲」開始挑戰！</div>
        </div>
        <div v-else-if="colorGame.isPlaying" class="color-challenge">
          <div class="color-text" :style="{ color: colorGame.currentColor }">
            {{ colorGame.currentText }}
          </div>
          <div class="color-buttons">
            <button
              v-for="color in colorGame.colorOptions"
              :key="color.name"
              @click="selectColor(color)"
              :style="{ backgroundColor: color.value }"
              class="color-btn"
            >
              {{ color.name }}
            </button>
          </div>
        </div>
        <div v-if="colorGame.gameOver" class="victory-message">
          🎮 遊戲結束！最終分數: {{ colorGame.score }}
        </div>
      </div>

      <!-- 遊戲5: 打地鼠 -->
      <div v-if="currentGame === 4" class="mole-game game-content">        <div class="game-info">
          <h3>🔨 打地鼠</h3>
          <p>快速點擊地鼠🐭得分，避免點擊炸彈💣！</p>
          <div class="game-stats">
            <span>分數: {{ moleGame.score }}</span>
            <span>時間: {{ moleGame.timeLeft }}s</span>
            <button @click="startMoleGame" class="reset-btn">
              {{ moleGame.isPlaying ? '重新開始' : '開始遊戲' }}
            </button>
          </div>
        </div>        <div class="mole-board">
          <div
            v-for="(hole, index) in moleGame.holes"
            :key="index"
            @click="hitMole(index)"
            :class="['mole-hole', { 
              'has-mole': hole.hasMole, 
              'has-bomb': hole.hasBomb,
              'hit': hole.hit,
              'bomb-hit': hole.bombHit
            }]"
          >
            <div class="mole" v-if="hole.hasMole">🐭</div>
            <div class="bomb" v-if="hole.hasBomb">💣</div>
            <div class="hole-bg">🕳️</div>
          </div>
        </div>        <div v-if="moleGame.gameOver" class="victory-message">
          🎮 遊戲結束！最終分數: {{ moleGame.score }}
        </div>
      </div>
        
        </div>
      </div>
      
      <!-- 遊戲紀錄側邊欄 -->
      <div class="game-records-sidebar">
        <GameRecords
          ref="gameRecordsRef"
          :game-name="games[currentGame].name"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// Analytics
const { trackPageView, trackGameEvent, trackUserAction } = useFirebaseAnalytics()

// 遊戲紀錄引用
const gameRecordsRef = ref(null)

// 儲存遊戲紀錄的通用函數
const saveCurrentGameRecord = async (gameData) => {
  if (!gameRecordsRef.value) {
    console.error('GameRecords 組件引用不存在')
    return
  }
  
  try {
    await gameRecordsRef.value.saveGameRecord(gameData)
  } catch (error) {
    console.error('儲存遊戲紀錄失敗:', error)
    // 可以在這裡添加用戶提示
  }
}

// 當前選中的遊戲
const currentGame = ref(0)

// 遊戲列表
const games = [
  { name: '記憶翻牌', icon: '🧠' },
  { name: '反應測試', icon: '⚡' },
  { name: '數字接龍', icon: '🔢' },
  { name: '顏色匹配', icon: '🎨' },
  { name: '打地鼠', icon: '🔨' }
]

// 選擇遊戲
const selectGame = (index) => {
  currentGame.value = index
  const gameName = games[index].name
  trackUserAction('game_select', 'games', gameName)
}

// ===== 記憶翻牌遊戲 =====
const memoryGame = reactive({
  cards: [],
  flippedCards: [],
  moves: 0,
  matches: 0
})

const initMemoryGame = () => {
  const symbols = ['🎈', '🎁', '🎪', '🎨', '🎭', '🎯', '🎲', '🎸']
  const cards = [...symbols, ...symbols]
    .sort(() => Math.random() - 0.5)
    .map((value, index) => ({
      value,
      flipped: false,
      matched: false,
      id: index
    }))
  
  memoryGame.cards = cards
  memoryGame.flippedCards = []
  memoryGame.moves = 0
  memoryGame.matches = 0
}

const flipCard = (index) => {
  const card = memoryGame.cards[index]
  if (card.flipped || card.matched || memoryGame.flippedCards.length >= 2) return

  card.flipped = true
  memoryGame.flippedCards.push(index)

  if (memoryGame.flippedCards.length === 2) {
    memoryGame.moves++
    const [first, second] = memoryGame.flippedCards
    
    if (memoryGame.cards[first].value === memoryGame.cards[second].value) {
      memoryGame.cards[first].matched = true
      memoryGame.cards[second].matched = true
      memoryGame.matches++
      memoryGame.flippedCards = []
        // Track successful match
      trackGameEvent('記憶翻牌', 'match', memoryGame.matches)
      
      // Track game completion
      if (memoryGame.matches === 8) {
        trackGameEvent('記憶翻牌', 'complete', memoryGame.moves)
        
        // 儲存遊戲紀錄
        saveCurrentGameRecord({
          gameName: '記憶翻牌',
          score: 0, // 記憶翻牌不計分數，主要看步數
          moves: memoryGame.moves,
          time: 0,
          gameType: 'memory'
        })
      }
    } else {
      setTimeout(() => {
        memoryGame.cards[first].flipped = false
        memoryGame.cards[second].flipped = false
        memoryGame.flippedCards = []
      }, 1000)
    }
  }
}

const resetMemoryGame = () => {
  trackGameEvent('記憶翻牌', 'reset')
  initMemoryGame()
}

// ===== 反應速度測試遊戲 =====
const reactionGame = reactive({
  state: 'waiting', // waiting, ready, go, too-early
  startTime: 0,
  timeout: null,
  lastTime: null,
  bestTime: null
})

const startReactionTest = () => {
  reactionGame.state = 'ready'
  const delay = Math.random() * 3000 + 2000 // 2-5秒隨機延遲
  
  reactionGame.timeout = setTimeout(() => {
    reactionGame.state = 'go'
    reactionGame.startTime = Date.now()
  }, delay)
}

const handleReactionClick = () => {
  if (reactionGame.state === 'ready') {
    reactionGame.state = 'too-early'
    clearTimeout(reactionGame.timeout)
    trackGameEvent('反應測試', 'too_early')
    setTimeout(() => {
      reactionGame.state = 'waiting'
    }, 2000)
  } else if (reactionGame.state === 'go') {
    const reactionTime = Date.now() - reactionGame.startTime
    reactionGame.lastTime = reactionTime
    
    if (!reactionGame.bestTime || reactionTime < reactionGame.bestTime) {
      reactionGame.bestTime = reactionTime
      trackGameEvent('反應測試', 'new_best', reactionTime)
    }
      trackGameEvent('反應測試', 'complete', reactionTime)    // 儲存遊戲紀錄
    saveCurrentGameRecord({
      gameName: '反應測試',
      score: 0, // 反應測試不計分數，主要看時間
      moves: 0,
      time: reactionTime, // 直接儲存毫秒數
      gameType: 'reaction'
    })
    
    reactionGame.state = 'waiting'
  }
}

// ===== 數字接龍遊戲 =====
const numberGame = reactive({
  numbers: [],
  current: 1,
  time: 0,
  timer: null,
  startTime: null,
  isPlaying: false,
  gameCompleted: false
})

const initNumberGame = () => {
  const numbers = Array.from({ length: 25 }, (_, i) => ({
    value: i + 1,
    clicked: false,
    wrong: false
  })).sort(() => Math.random() - 0.5)
  
  numberGame.numbers = numbers
  numberGame.current = 1
  numberGame.time = 0
  numberGame.startTime = null
  numberGame.isPlaying = false
  numberGame.gameCompleted = false
  clearInterval(numberGame.timer)
}

const startNumberGame = () => {
  numberGame.isPlaying = true
  numberGame.gameCompleted = false
  numberGame.current = 1
  numberGame.time = 0
  numberGame.startTime = Date.now()
  
  // 重置所有數字的狀態
  numberGame.numbers.forEach(number => {
    number.clicked = false
    number.wrong = false
  })
  
  numberGame.timer = setInterval(() => {
    numberGame.time = Math.floor((Date.now() - numberGame.startTime) / 1000)
  }, 100)
}

const clickNumber = (number) => {
  if (number.clicked || !numberGame.isPlaying) return
  
  if (number.value === numberGame.current) {
    number.clicked = true
    numberGame.current++
    
    if (numberGame.current > 25) {
      clearInterval(numberGame.timer)
      numberGame.isPlaying = false
      numberGame.gameCompleted = true
      
      // 儲存遊戲紀錄
      saveCurrentGameRecord({
        gameName: '數字接龍',
        score: 0, // 數字接龍不計分數，主要看時間
        moves: 25,
        time: numberGame.time,
        gameType: 'number'
      })
    }
  } else {
    number.wrong = true
    setTimeout(() => {
      number.wrong = false
    }, 500)
  }
}

const resetNumberGame = () => {
  clearInterval(numberGame.timer)
  initNumberGame()
}

// ===== 顏色匹配遊戲 =====
const colorGame = reactive({
  score: 0,
  timeLeft: 30,
  currentColor: '',
  currentText: '',
  correctAnswer: null,
  colorOptions: [],
  timer: null,
  gameOver: false,
  isPlaying: false
})

const colors = [
  { name: '紅色', value: '#ff4757' },
  { name: '藍色', value: '#3742fa' },
  { name: '綠色', value: '#2ed573' },
  { name: '黃色', value: '#ffa502' },
  { name: '紫色', value: '#a55eea' },
  { name: '粉色', value: '#ff6b81' },
  { name: '橘色', value: '#ff7675' },
  { name: '青色', value: '#00cec9' },
  { name: '深藍', value: '#0984e3' },
  { name: '深綠', value: '#00b894' },
  { name: '棕色', value: '#a0522d' },
  { name: '灰色', value: '#636e72' },
  { name: '黑色', value: '#2d3436' },
  { name: '白色', value: '#ddd' },
  { name: '淺藍', value: '#74b9ff' },
  { name: '淺綠', value: '#55a3ff' },
  { name: '深紫', value: '#6c5ce7' },
  { name: '深紅', value: '#e17055' },
  { name: '金色', value: '#fdcb6e' },
  { name: '銀色', value: '#b2bec3' }
]

const generateColorChallenge = () => {
  // 隨機選擇文字內容對應的顏色（正確答案）
  const textColor = colors[Math.floor(Math.random() * colors.length)]
  
  // 隨機選擇顯示文字的顏色（必須與文字內容不同）
  let displayColor
  do {
    displayColor = colors[Math.floor(Math.random() * colors.length)]
  } while (displayColor.name === textColor.name)
  
  // 設定題目：文字內容是正確答案，但顯示顏色不同
  colorGame.currentText = textColor.name // 要選擇的顏色名稱
  colorGame.currentColor = displayColor.value // 文字顯示的顏色
  colorGame.correctAnswer = textColor // 正確答案
  
  // 隨機選擇4個顏色選項，確保包含正確答案
  const options = [textColor]
  while (options.length < 4) {
    const color = colors[Math.floor(Math.random() * colors.length)]
    if (!options.find(opt => opt.name === color.name)) {
      options.push(color)
    }
  }
  
  colorGame.colorOptions = options.sort(() => Math.random() - 0.5)
}

const selectColor = (selectedColor) => {
  if (colorGame.gameOver || !colorGame.isPlaying) return
  
  // 檢查是否選擇了正確的顏色（與文字內容匹配，而非文字顏色）
  if (selectedColor.name === colorGame.correctAnswer.name) {
    colorGame.score += 10
    trackGameEvent('顏色匹配', 'correct_answer', colorGame.score)
  } else {
    colorGame.score = Math.max(0, colorGame.score - 5)
    trackGameEvent('顏色匹配', 'wrong_answer', colorGame.score)
  }
  
  generateColorChallenge()
}

const startColorGame = () => {
  colorGame.score = 0
  colorGame.timeLeft = 30
  colorGame.gameOver = false
  colorGame.isPlaying = true
  
  generateColorChallenge()
  
  colorGame.timer = setInterval(() => {
    colorGame.timeLeft--
    if (colorGame.timeLeft <= 0) {
      colorGame.gameOver = true
      colorGame.isPlaying = false
      clearInterval(colorGame.timer)
      
      // 儲存遊戲紀錄
      saveCurrentGameRecord({
        gameName: '顏色匹配',
        score: colorGame.score,
        moves: 0,
        time: 30,
        gameType: 'color'
      })
    }
  }, 1000)
}

const resetColorGame = () => {
  clearInterval(colorGame.timer)
  colorGame.isPlaying = false
  colorGame.gameOver = false
  startColorGame()
}

// ===== 打地鼠遊戲 =====
const moleGame = reactive({
  score: 0,
  timeLeft: 30,
  holes: Array(9).fill().map(() => ({ hasMole: false, hasBomb: false, hit: false, bombHit: false })),
  isPlaying: false,
  gameOver: false,
  moleTimer: null,
  gameTimer: null
})

const showRandomMole = () => {
  // 隱藏所有地鼠和炸彈
  moleGame.holes.forEach(hole => {
    hole.hasMole = false
    hole.hasBomb = false
    hole.hit = false
    hole.bombHit = false
  })
  
  // 隨機顯示地鼠或炸彈
  if (Math.random() < 0.8) { // 80%機率出現東西
    const randomHole = Math.floor(Math.random() * 9)
    
    // 20%機率出現炸彈，80%機率出現地鼠
    if (Math.random() < 0.2) {
      moleGame.holes[randomHole].hasBomb = true
      // 炸彈停留時間稍長
      setTimeout(() => {
        if (moleGame.holes[randomHole].hasBomb) {
          moleGame.holes[randomHole].hasBomb = false
        }
      }, 1200 + Math.random() * 800)
    } else {
      moleGame.holes[randomHole].hasMole = true
      // 地鼠停留時間
      setTimeout(() => {
        if (moleGame.holes[randomHole].hasMole) {
          moleGame.holes[randomHole].hasMole = false
        }
      }, 800 + Math.random() * 500)
    }
  }
}

const hitMole = (index) => {
  if (!moleGame.isPlaying) return
  
  const hole = moleGame.holes[index]
  
  // 如果打到地鼠
  if (hole.hasMole && !hole.hit) {
    hole.hit = true
    hole.hasMole = false
    moleGame.score += 10
  }
  
  // 如果打到炸彈
  if (hole.hasBomb && !hole.bombHit) {
    hole.bombHit = true
    hole.hasBomb = false
    moleGame.score = Math.max(0, moleGame.score - 20) // 扣20分，最低0分
  }
}

const startMoleGame = () => {
  // 清理之前的計時器（如果存在）
  if (moleGame.gameTimer) {
    clearInterval(moleGame.gameTimer)
  }
  if (moleGame.moleTimer) {
    clearInterval(moleGame.moleTimer)
  }
  
  // 重置遊戲狀態
  moleGame.score = 0
  moleGame.timeLeft = 30
  moleGame.isPlaying = true
  moleGame.gameOver = false
  
  // 重置所有洞穴
  moleGame.holes.forEach(hole => {
    hole.hasMole = false
    hole.hasBomb = false
    hole.hit = false
    hole.bombHit = false
  })
  
  // 開始遊戲計時器
  moleGame.gameTimer = setInterval(() => {
    moleGame.timeLeft--
    if (moleGame.timeLeft <= 0) {
      moleGame.isPlaying = false
      moleGame.gameOver = true
      clearInterval(moleGame.gameTimer)
      clearInterval(moleGame.moleTimer)
      
      // 儲存遊戲紀錄
      saveCurrentGameRecord({
        gameName: '打地鼠',
        score: moleGame.score,
        moves: 0,
        time: 30,
        gameType: 'mole'
      })
    }
  }, 1000)
  
  // 開始地鼠出現計時器
  moleGame.moleTimer = setInterval(showRandomMole, 600)
}

// 初始化
onMounted(() => {
  // Track page view
  trackPageView('game', '迷你遊戲中心')
  
  initMemoryGame()
  initNumberGame()
  // 顏色匹配遊戲不自動開始，等待用戶手動開始
})

// 清理定時器
onUnmounted(() => {
  clearTimeout(reactionGame.timeout)
  clearInterval(numberGame.timer)
  clearInterval(colorGame.timer)
  clearInterval(moleGame.gameTimer)
  clearInterval(moleGame.moleTimer)
})
</script>

<style scoped>
.game-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.game-header {
  text-align: center;
  margin-bottom: 3rem;
}

.game-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.game-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.game-reminder {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 193, 7, 0.9);
  color: #333;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
  animation: reminderPulse 2s ease-in-out infinite;
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.reminder-icon {
  font-size: 1.1rem;
  animation: reminderShake 1s ease-in-out infinite;
}

.reminder-text {
  letter-spacing: 0.3px;
}

@keyframes reminderPulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(255, 193, 7, 0.4);
  }
}

@keyframes reminderShake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

.game-menu {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.game-menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 100px;
}

.game-menu-item:hover,
.game-menu-item.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-3px);
}

.game-icon {
  font-size: 2rem;
}

.game-name {
  font-size: 0.9rem;
  font-weight: 600;
}

.game-area {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.game-content {
  max-width: 800px;
  margin: 0 auto;
}

.game-info {
  text-align: center;
  margin-bottom: 2rem;
}

.game-info h3 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.game-info p {
  opacity: 0.8;
  margin-bottom: 1rem;
}

.game-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
}

.reset-btn, .start-btn {
  background: #f093fb;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.reset-btn:hover, .start-btn:hover {
  background: #e06ef0;
  transform: translateY(-2px);
}

/* 主要遊戲區域佈局 */
.main-game-area {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  align-items: start;
}

.game-content-wrapper {
  min-height: 600px;
}

.game-records-sidebar {
  position: sticky;
  top: 2rem;
}

/* 記憶翻牌遊戲 */
.memory-board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

.memory-card {
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
}

.memory-card:hover {
  transform: scale(1.05);
}

.memory-card.flipped .card-front {
  opacity: 0;
}

.memory-card.flipped .card-back,
.memory-card.matched .card-back {
  opacity: 1;
}

.memory-card.matched {
  background: rgba(76, 175, 80, 0.3);
}

.card-front, .card-back {
  position: absolute;
  transition: opacity 0.3s ease;
}

.card-back {
  opacity: 0;
  font-size: 2rem;
}

/* 反應速度測試 */
.reaction-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.reaction-target {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.reaction-target.waiting {
  background: rgba(255, 255, 255, 0.2);
}

.reaction-target.ready {
  background: #ff6b6b;
  animation: pulse 1s infinite;
}

.reaction-target.go {
  background: #51cf66;
}

.reaction-target.too-early {
  background: #ff8787;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* 數字接龍遊戲 */
.number-board {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  max-width: 400px;
  margin: 0 auto;
}

.number-cell {
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.number-cell:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.number-cell.clicked {
  background: #51cf66;
  color: white;
  transform: scale(1.1);
}

.number-cell.wrong {
  background: #ff6b6b;
  animation: shake 0.5s ease;
}

/* 隱藏狀態的數字格子樣式 */
.number-game:not(.playing) .number-cell:not(.clicked) {
  background: rgba(255, 255, 255, 0.15);
  border: 2px dashed rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.5rem;
}

@keyframes bounce {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

/* 顏色匹配遊戲 */
.color-challenge {
  text-align: center;
}

.color-text {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.color-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

.color-btn {
  padding: 1rem;
  border: 3px solid white;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.color-btn:hover {
  transform: scale(1.05);
  border-width: 4px;
}

/* 等待開始狀態 */
.waiting-message {
  text-align: center;
  padding: 3rem 1rem;
}

.waiting-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
}

.waiting-text {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

/* 打地鼠遊戲 */
.mole-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

.mole-hole {
  aspect-ratio: 1;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 50%;
  background: #8b4513;
  border: 3px solid #654321;
  transition: all 0.2s ease;
}

.mole-hole:hover {
  transform: scale(1.05);
}

.mole {
  position: absolute;
  animation: pop-up 0.3s ease;
  z-index: 2;
}

.bomb {
  position: absolute;
  animation: bomb-appear 0.4s ease;
  z-index: 2;
  filter: drop-shadow(0 0 8px rgba(255, 69, 0, 0.8));
}

.hole-bg {
  opacity: 0.7;
}

.mole-hole.hit {
  animation: hit-flash 0.3s ease;
}

.mole-hole.bomb-hit {
  animation: bomb-flash 0.5s ease;
}

@keyframes pop-up {
  from { transform: translateY(20px) scale(0); }
  to { transform: translateY(0) scale(1); }
}

@keyframes bomb-appear {
  from { transform: translateY(15px) scale(0) rotate(0deg); }
  to { transform: translateY(0) scale(1) rotate(360deg); }
}

@keyframes hit-flash {
  0%, 100% { background: #8b4513; }
  50% { background: #ffd700; }
}

@keyframes bomb-flash {
  0%, 100% { background: #8b4513; }
  25% { background: #ff4500; }
  50% { background: #ff0000; }
  75% { background: #ff4500; }
}

.victory-message {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(76, 175, 80, 0.3);
  border-radius: 15px;
  animation: celebration 1s ease;
}

@keyframes celebration {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .main-game-area {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .game-records-sidebar {
    position: static;
    order: -1; /* 在手機版本中將紀錄放在遊戲上方 */
  }
}

@media (max-width: 768px) {
  .game-container {
    padding: 1rem;
  }
  
  .game-title {
    font-size: 2rem;
  }

  .game-reminder {
    margin-top: 1rem;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  .reminder-icon {
    font-size: 1rem;
  }
  
  .game-menu {
    gap: 0.5rem;
  }
  
  .game-menu-item {
    min-width: 80px;
    padding: 0.8rem;
  }
  
  .game-icon {
    font-size: 1.5rem;
  }
  
  .game-name {
    font-size: 0.8rem;
  }
  
  .game-stats {
    gap: 1rem;
    font-size: 0.9rem;
  }
  
  .memory-board {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    max-width: 300px;
  }
  
  .reaction-target {
    width: 250px;
    height: 250px;
    font-size: 1rem;
  }
  
  .number-board {
    max-width: 300px;
    gap: 0.3rem;
  }
  
  .color-text {
    font-size: 2rem;
  }
  
  .color-buttons {
    max-width: 300px;
  }
  
  .mole-board {
    max-width: 300px;
  }
}
</style>
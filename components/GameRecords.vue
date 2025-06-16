<template>
  <div :class="['game-records-container', `mode-${viewMode}`]">
    <!-- 玩家名稱輸入 -->
    <div class="player-section">
      <div class="player-input-group">
        <label class="player-label">玩家名稱</label>
        <input
          v-model="playerName"
          type="text"
          placeholder="輸入您的暱稱"
          class="player-input"
          maxlength="20"
          @input="onPlayerNameChange"
        />
      </div>
    </div>    <!-- 個人最佳紀錄展示 - 只有輸入名字且有紀錄時才顯示 -->
    <div v-if="playerName.trim() && !isPersonalLoading && getPersonalBest" class="best-record-card best-personal">
      <div class="best-header">
        <div class="best-crown">⭐</div>
        <div class="best-title">
          <div class="title-main">個人最佳</div>
          <div class="title-sub">Personal Best</div>
        </div>
      </div>
      <div class="best-content">
        <div class="player-info">
          <div class="player-name">{{ getPersonalBest.playerName }}</div>
        </div>
        <div class="score-display">
          <template v-if="getPersonalBest.gameType === 'memory'">
            <div class="score-value">{{ getPersonalBest.moves }}</div>
            <div class="score-unit">步</div>
          </template>
          <template v-else-if="getPersonalBest.gameType === 'reaction'">
            <div class="score-value">{{ getPersonalBest.time }}</div>
            <div class="score-unit">ms</div>
          </template>
          <template v-else-if="getPersonalBest.gameType === 'number'">
            <div class="score-value">{{ getPersonalBest.time }}</div>
            <div class="score-unit">秒</div>
          </template>
          <template v-else>
            <div class="score-value">{{ getPersonalBest.score }}</div>
            <div class="score-unit">分</div>
          </template>
        </div>
        <div class="record-time">{{ formatDate(getPersonalBest.completedAt) }}</div>
      </div>
    </div>

    <!-- 個人紀錄排行榜 -->
    <div class="records-section records-personal">
      <div class="section-header">
        <div class="header-icon">👤</div>
        <div class="header-title">個人紀錄</div>
        <div class="header-count">({{ personalRecords.length }})</div>
      </div>

      <!-- 載入中狀態 -->
      <div v-if="isPersonalLoading" class="loading-state">
        <div class="loading-spinner"></div>
        <div class="loading-text">載入個人紀錄中...</div>
      </div>      <!-- 空狀態 - 區分未輸入名字和沒有紀錄 -->
      <div v-else-if="!playerName.trim()" class="empty-state">
        <div class="empty-icon">👤</div>
        <div class="empty-text">請輸入玩家名稱</div>
        <div class="empty-hint">輸入名稱後即可查看個人紀錄</div>
      </div>
      
      <div v-else-if="personalRecords.length === 0" class="empty-state">
        <div class="empty-icon">🎯</div>
        <div class="empty-text">還沒有個人紀錄</div>
        <div class="empty-hint">開始遊戲創造第一個紀錄吧！</div>
      </div>

      <!-- 個人紀錄列表 -->
      <div v-else class="records-list">
        <div
          v-for="(record, index) in personalRecords"
          :key="`personal-${record.id}-${index}`"
          class="record-card my-record"
        >
          <div class="rank-badge">
            <div v-if="index < 3" class="medal">{{ ['🥇', '🥈', '🥉'][index] }}</div>
            <div v-else class="rank-num">{{ index + 1 }}</div>
          </div>
          
          <div class="record-content">
            <div class="record-player">{{ record.playerName }}</div>
            <div class="record-score">
              <template v-if="record.gameType === 'memory'">
                <span class="score-main">{{ record.moves }}步</span>
              </template>
              <template v-else-if="record.gameType === 'reaction'">
                <span class="score-main">{{ record.time }}ms</span>
              </template>
              <template v-else-if="record.gameType === 'number'">
                <span class="score-main">{{ formatTime(record.time) }}</span>
              </template>
              <template v-else>
                <span class="score-main">{{ record.score }}分</span>
              </template>
            </div>
            <div class="record-date">{{ formatDate(record.completedAt) }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 全球最佳紀錄展示 -->
    <div v-if="!isGlobalLoading && getGlobalBest" class="best-record-card best-global">
      <div class="best-header">
        <div class="best-crown">👑</div>
        <div class="best-title">
          <div class="title-main">全球冠軍</div>
          <div class="title-sub">Global Champion</div>
        </div>
      </div>
      <div class="best-content">
        <div class="player-info">
          <div class="player-name">{{ getGlobalBest.playerName }}</div>
          <div v-if="getGlobalBest.playerName === playerName" class="self-badge">YOU</div>
        </div>
        <div class="score-display">
          <template v-if="getGlobalBest.gameType === 'memory'">
            <div class="score-value">{{ getGlobalBest.moves }}</div>
            <div class="score-unit">步</div>
          </template>
          <template v-else-if="getGlobalBest.gameType === 'reaction'">
            <div class="score-value">{{ getGlobalBest.time }}</div>
            <div class="score-unit">ms</div>
          </template>
          <template v-else-if="getGlobalBest.gameType === 'number'">
            <div class="score-value">{{ getGlobalBest.time }}</div>
            <div class="score-unit">秒</div>
          </template>
          <template v-else>
            <div class="score-value">{{ getGlobalBest.score }}</div>
            <div class="score-unit">分</div>
          </template>
        </div>
        <div class="record-time">{{ formatDate(getGlobalBest.completedAt) }}</div>
      </div>
    </div>

    <!-- 全球玩家排行榜 -->
    <div class="records-section records-global">
      <div class="section-header">
        <div class="header-icon">🏆</div>
        <div class="header-title">全球前五名</div>
        <div class="header-count">({{ globalRecords.length }})</div>
      </div>

      <!-- 載入中狀態 -->
      <div v-if="isGlobalLoading" class="loading-state">
        <div class="loading-spinner"></div>
        <div class="loading-text">載入全球紀錄中...</div>
      </div>

      <!-- 空狀態 -->
      <div v-else-if="globalRecords.length === 0" class="empty-state">
        <div class="empty-icon">�</div>
        <div class="empty-text">還沒有全球紀錄</div>
        <div class="empty-hint">成為第一個玩家吧！</div>
      </div>

      <!-- 全球紀錄列表 -->
      <div v-else class="records-list">
        <div
          v-for="(record, index) in globalRecords"
          :key="`global-${record.id}-${index}`"
          :class="['record-card', { 'my-record': record.playerName === playerName }]"
        >
          <div class="rank-badge">
            <div v-if="index < 3" class="medal">{{ ['🥇', '🥈', '🥉'][index] }}</div>
            <div v-else class="rank-num">{{ index + 1 }}</div>
          </div>
          
          <div class="record-content">
            <div class="record-player">{{ record.playerName }}</div>
            <div class="record-score">
              <template v-if="record.gameType === 'memory'">
                <span class="score-main">{{ record.moves }}步</span>
              </template>
              <template v-else-if="record.gameType === 'reaction'">
                <span class="score-main">{{ record.time }}ms</span>
              </template>
              <template v-else-if="record.gameType === 'number'">
                <span class="score-main">{{ formatTime(record.time) }}</span>
              </template>
              <template v-else>
                <span class="score-main">{{ record.score }}分</span>
              </template>
            </div>
            <div class="record-date">{{ formatDate(record.completedAt) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, onUnmounted, onMounted } from 'vue'
import { useGameRecords } from '~/composables/useGameRecords'

const props = defineProps({
  gameName: {
    type: String,
    required: true
  }
})

const {
  playerName,
  isPersonalLoading,
  isGlobalLoading,
  personalRecords,
  globalRecords,
  getPersonalBest,
  getGlobalBest,
  saveGameRecord,
  startPersonalListening,
  startGlobalListening,
  stopPersonalListening,
  stopGlobalListening,
  preloadCommonGames,
  formatTime,
  formatDate
} = useGameRecords()

// 組件載入時預載常用遊戲資料
onMounted(() => {
  preloadCommonGames()
})

// 當玩家名稱改變時重新監聽個人紀錄
const onPlayerNameChange = () => {
  if (props.gameName) {
    // 無論名稱是否為空都呼叫，讓 composable 內部處理邏輯
    startPersonalListening(props.gameName)
  }
}

// 監聽遊戲名稱變化
watch(() => props.gameName, (newGameName) => {
  if (newGameName) {
    // 優先啟動全球紀錄監聽（通常資料較多，先載入）
    startGlobalListening(newGameName)
    
    // 處理個人紀錄監聽（內部會判斷是否有玩家名稱）
    startPersonalListening(newGameName)
  }
}, { immediate: true })

// 監聽玩家名稱變化（優化：無論名稱是否為空都重新處理）
watch(() => playerName.value, (newPlayerName, oldPlayerName) => {
  // 當玩家名稱改變時，重新處理個人紀錄監聽
  if (props.gameName) {
    startPersonalListening(props.gameName)
  }
}, { immediate: true })

// 組件銷毀時停止監聽
onUnmounted(() => {
  stopPersonalListening()
  stopGlobalListening()
})

// 暴露保存紀錄的方法給父組件使用
defineExpose({
  saveGameRecord,
  playerName
})
</script>

<style scoped>
.game-records-container {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 1.5rem;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: fit-content;
  max-height: 85vh;
  overflow-y: auto;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

/* 玩家輸入區域 */
.player-section {
  margin-bottom: 1.5rem;
}

.player-input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.player-label {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
}

.player-input {
  padding: 0.875rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.player-input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
}

.player-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

/* 最佳紀錄卡片 */
.best-record-card {
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.best-personal {
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  border: 2px solid rgba(59, 130, 246, 0.8);
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.25);
}

.best-global {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  border: 2px solid rgba(245, 158, 11, 0.8);
  box-shadow: 0 12px 40px rgba(245, 158, 11, 0.25);
}

.best-record-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { left: -100%; }
  100% { left: 100%; }
}

.best-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.best-crown {
  font-size: 2rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-4px); }
}

.best-title {
  flex: 1;
}

.title-main {
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
}

.title-sub {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.best-content {
  position: relative;
  z-index: 2;
}

.player-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.player-name {
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
}

.self-badge {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 600;
}

.score-display {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.score-value {
  color: white;
  font-weight: 900;
  font-size: 2.2rem;
}

.score-unit {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  font-size: 1rem;
}

.record-time {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 500;
}

/* 紀錄排行榜 */
.records-section {
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.records-personal {
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.records-global {
  background: rgba(236, 72, 153, 0.08);
  border: 1px solid rgba(236, 72, 153, 0.2);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-icon {
  font-size: 1.25rem;
}

.header-title {
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  flex: 1;
}

.header-count {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 500;
}

/* 載入狀態 */
.loading-state {
  padding: 3rem 1rem;
  text-align: center;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
}

/* 空狀態 */
.empty-state {
  padding: 3rem 1rem;
  text-align: center;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.empty-text {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.empty-hint {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

/* 紀錄列表 */
.records-list {
  padding: 0.5rem;
}

.record-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.record-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(4px);
}

.record-card.my-record {
  background: rgba(255, 215, 0, 0.15);
  border-color: rgba(255, 215, 0, 0.3);
}

.rank-badge {
  min-width: 40px;
  text-align: center;
}

.medal {
  font-size: 1.5rem;
}

.rank-num {
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
}

.record-content {
  flex: 1;
  min-width: 0;
}

.record-player {
  color: white;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.record-score {
  margin-bottom: 0.25rem;
}

.score-main {
  color: #fbbf24;
  font-weight: 700;
  font-size: 1.1rem;
}

.record-date {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  font-weight: 500;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .game-records-container {
    padding: 1rem;
    max-height: 70vh;
  }
  
  .best-record-card {
    padding: 1rem;
  }
  
  .title-main {
    font-size: 1.1rem;
  }
  
  .score-value {
    font-size: 1.8rem;
  }
  
  .record-card {
    padding: 0.75rem;
    gap: 0.75rem;
  }
}

/* 滾動條樣式 */
.game-records-container::-webkit-scrollbar {
  width: 8px;
}

.game-records-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.game-records-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.game-records-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>

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
    </div>

    <!-- 檢視模式切換按鈕 -->
    <div class="mode-toggle-section">
      <button
        @click="toggleViewMode"
        :class="['mode-toggle-btn', `btn-${viewMode}`]"
      >
        <div class="btn-icon">
          {{ viewMode === 'personal' ? '👤' : '🌟' }}
        </div>
        <div class="btn-content">
          <div class="btn-title">{{ viewMode === 'personal' ? '個人紀錄' : '全球排行' }}</div>
          <div class="btn-subtitle">{{ viewMode === 'personal' ? '我的成績' : '頂尖玩家' }}</div>
        </div>
        <div class="btn-indicator">
          <div :class="['indicator-dot', `dot-${viewMode}`]"></div>
        </div>
      </button>
    </div>

    <!-- 最佳紀錄展示 -->
    <div v-if="!isLoading && getBestRecord" :class="['best-record-card', `best-${viewMode}`]">
      <div class="best-header">
        <div class="best-crown">{{ viewMode === 'personal' ? '⭐' : '👑' }}</div>
        <div class="best-title">
          <div class="title-main">{{ viewMode === 'personal' ? '個人最佳' : '全球冠軍' }}</div>
          <div class="title-sub">{{ viewMode === 'personal' ? 'Personal Best' : 'Global Champion' }}</div>
        </div>
      </div>
      <div class="best-content">
        <div class="player-info">
          <div class="player-name">{{ getBestRecord.playerName }}</div>
          <div v-if="getBestRecord.playerName === playerName && viewMode === 'global'" class="self-badge">YOU</div>
        </div>
        <div class="score-display">
          <template v-if="getBestRecord.gameType === 'memory'">
            <div class="score-value">{{ getBestRecord.moves }}</div>
            <div class="score-unit">步</div>
          </template>
          <template v-else-if="getBestRecord.gameType === 'reaction'">
            <div class="score-value">{{ getBestRecord.time }}</div>
            <div class="score-unit">ms</div>
          </template>
          <template v-else-if="getBestRecord.gameType === 'number'">
            <div class="score-value">{{ getBestRecord.time }}</div>
            <div class="score-unit">秒</div>
          </template>
          <template v-else>
            <div class="score-value">{{ getBestRecord.score }}</div>
            <div class="score-unit">分</div>
          </template>
        </div>
        <div class="record-time">{{ formatDate(getBestRecord.completedAt) }}</div>
      </div>
    </div>

    <!-- 紀錄排行榜 -->
    <div :class="['records-section', `records-${viewMode}`]">
      <div class="section-header">
        <div class="header-icon">{{ viewMode === 'personal' ? '📊' : '🏆' }}</div>
        <div class="header-title">紀錄排行</div>
        <div class="header-count">({{ filteredRecords.length }})</div>
      </div>

      <!-- 載入中狀態 -->
      <div v-if="isLoading" class="loading-state">
        <div class="loading-spinner"></div>
        <div class="loading-text">載入紀錄中...</div>
      </div>

      <!-- 空狀態 -->
      <div v-else-if="filteredRecords.length === 0" class="empty-state">
        <div class="empty-icon">🎯</div>
        <div class="empty-text">還沒有紀錄</div>
        <div class="empty-hint">開始遊戲創造第一個紀錄吧！</div>
      </div>

      <!-- 紀錄列表 -->
      <div v-else class="records-list">
        <div
          v-for="(record, index) in filteredRecords"
          :key="`${record.id}-${index}`"
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
import { watch, onUnmounted } from 'vue'
import { useGameRecords } from '~/composables/useGameRecords'

const props = defineProps({
  gameName: {
    type: String,
    required: true
  }
})

const {
  playerName,
  viewMode,
  isLoading,
  filteredRecords,
  getBestRecord,
  saveGameRecord,
  startListening,
  stopListening,
  toggleViewMode,
  formatTime,
  formatDate
} = useGameRecords()

// 當玩家名稱改變時重新監聽
const onPlayerNameChange = () => {
  if (viewMode.value === 'personal') {
    startListening(props.gameName)
  }
}

// 監聽遊戲名稱變化
watch(() => props.gameName, (newGameName) => {
  if (newGameName) {
    startListening(newGameName)
  }
}, { immediate: true })

// 組件銷毀時停止監聽
onUnmounted(() => {
  stopListening()
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

/* 個人模式樣式 */
.mode-personal {
  border: 2px solid rgba(59, 130, 246, 0.4);
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 100%);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15);
}

.mode-personal .mode-toggle-btn {
  background: linear-gradient(135deg, #3b82f6 0%, #93c5fd 100%);
  border-color: #3b82f6;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

.mode-personal .records-section {
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

/* 全球模式樣式 */
.mode-global {
  border: 2px solid rgba(236, 72, 153, 0.4);
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(251, 207, 232, 0.05) 100%);
  box-shadow: 0 8px 32px rgba(236, 72, 153, 0.15);
}

.mode-global .mode-toggle-btn {
  background: linear-gradient(135deg, #ec4899 0%, #fbcfe8 100%);
  border-color: #ec4899;
  box-shadow: 0 8px 25px rgba(236, 72, 153, 0.3);
}

.mode-global .records-section {
  background: rgba(236, 72, 153, 0.08);
  border: 1px solid rgba(236, 72, 153, 0.2);
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

/* 模式切換按鈕 */
.mode-toggle-section {
  margin-bottom: 1.5rem;
}

.mode-toggle-btn {
  width: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.mode-toggle-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.btn-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.btn-content {
  flex: 1;
  text-align: left;
}

.btn-title {
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.btn-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  font-weight: 500;
}

.btn-indicator {
  display: flex;
  align-items: center;
}

.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.dot-personal {
  background: #ffffff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.dot-global {
  background: #ffffff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

@keyframes pulse {
  0%, 100% { 
    opacity: 1;
    transform: scale(1);
  }
  50% { 
    opacity: 0.7;
    transform: scale(1.1);
  }
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
  
  .mode-toggle-btn {
    padding: 0.875rem;
    gap: 0.75rem;
  }
  
  .btn-title {
    font-size: 1rem;
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

<template>
  <div class="data-container">
    <h1 class="data-title">技術學習筆記集</h1>
    <p class="data-description">這裡收集了我在學習過程中整理的各項技術筆記與學習心得，涵蓋開發工具使用、飛控系統研究等領域</p>

    <div class="data-content-sections">
      <!-- GitHub 區域 -->
      <div class="data-content-section">
        <h2 class="data-section-title">開發工具學習筆記</h2>
        <div class="data-cards-grid">
          <div class="data-card" @click="openLink('https://hackmd.io/@Yo6S6-QbTX2tGrnWSw-aUw/HkuPMjWGxg')">
            <div class="data-card-thumbnail github">
              <img src="/images/github-logo.svg" alt="GitHub Logo" class="data-card-img" />
            </div>
            <div class="data-card-content">
              <h3>GitHub 版本控制完整指南</h3>
              <p class="data-card-description">
                涵蓋 Git 基本指令、分支管理策略、團隊協作流程、衝突解決等實務開發必備技能的完整教學
              </p>
              <div class="data-card-footer">
                <span class="data-view-link">點擊查看全文</span>
              </div>
            </div>
          </div>

          <div class="data-card" @click="openLink('https://hackmd.io/@Yo6S6-QbTX2tGrnWSw-aUw/HkFd81DQxl')">
            <div class="data-card-thumbnail development">
              <div class="data-icon-placeholder">📚</div>
            </div>
            <div class="data-card-content">
              <h3>PX4程式開發學習筆記</h3>
              <p class="data-card-description">
                整理程式設計相關的學習心得、技術要點及實務經驗分享
              </p>
              <div class="data-card-footer">
                <span class="data-view-link">點擊查看全文</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PX4 區域 -->
      <div class="data-content-section">
        <h2 class="data-section-title">PX4 飛控系統學習筆記</h2>
        <div class="data-cards-grid">
          <!-- PX4 文檔 1 -->
          <div class="data-card" @click="openLink('https://hackmd.io/@Yo6S6-QbTX2tGrnWSw-aUw/Hyunr2JS2')">
            <div class="data-card-thumbnail px4">
              <img src="/images/px4-logo.svg" alt="PX4 Logo" class="data-card-img" />
            </div>
            <div class="data-card-content">
              <h3>PX4 開發環境建置指南</h3>
              <p class="data-card-description">
                詳細介紹PX4開發環境的安裝配置流程，包含工具鏈設置、編譯環境準備及常見問題排解
              </p>
              <div class="data-card-footer">
                <span class="data-view-link">點擊查看全文</span>
              </div>
            </div>
          </div>

          <!-- PX4 文檔 2 -->
          <div class="data-card" @click="openLink('https://hackmd.io/@Yo6S6-QbTX2tGrnWSw-aUw/SyBNddx-lx')">
            <div class="data-card-thumbnail px4">
              <img src="/images/px4-logo.svg" alt="PX4 Logo" class="data-card-img" />
            </div>
            <div class="data-card-content">
              <h3>PX4 SITL模擬器實戰教學</h3>
              <p class="data-card-description">
                深入探討如何使用Gazebo進行PX4飛行控制模擬，涵蓋SITL配置、場景設定及飛行測試實務
              </p>
              <div class="data-card-footer">
                <span class="data-view-link">點擊查看全文</span>
              </div>
            </div>
          </div>

          <!-- PX4 文檔 3 -->
          <div class="data-card" @click="openLink('https://hackmd.io/@Yo6S6-QbTX2tGrnWSw-aUw/B1v8Si-zll')">
            <div class="data-card-thumbnail px4">
              <img src="/images/px4-logo.svg" alt="PX4 Logo" class="data-card-img" />
            </div>
            <div class="data-card-content">
              <h3>PX4飛控系統架構深度解析</h3>
              <p class="data-card-description">
                深入了解PX4飛行控制器的核心架構、模組功能及無人機應用開發的關鍵技術要點
              </p>
              <div class="data-card-footer">
                <span class="data-view-link">點擊查看全文</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 打開外部連結函數
const openLink = (url) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
/* 數據頁面樣式已移至模組化 CSS 系統，僅保留特定頁面的補充樣式 */
</style>
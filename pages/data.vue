<template>
  <div class="container">
    <h1>各項學習筆記</h1>
    <p>這個頁面收集了我撰寫的各種筆記與資料文件</p>

    <div class="content-sections">
      <!-- GitHub 區域 -->
      <div class="content-section">
        <h2>GitHub 筆記</h2>
        <div class="card" @click="openLink('https://hackmd.io/@Yo6S6-QbTX2tGrnWSw-aUw/HkuPMjWGxg')">
          <div class="card-thumbnail github">
            <img src="/images/github-logo.svg" alt="GitHub Logo" class="fallback-img" />
          </div>
          <div class="card-content">
            <h3>GitHub 入門指南</h3>
            <p class="card-description">
              包含 Git 基本指令、分支管理、協作流程等重要概念的詳細說明...
            </p>
            <div class="card-footer">
              <span class="view-link">點擊查看全文</span>
            </div>
          </div>
        </div>
      </div>

      <!-- PX4 區域 -->
      <div class="content-section">
        <h2>PX4 學習筆記</h2>
        <div class="cards-grid">
          <!-- PX4 文檔 1 -->
          <div class="card" @click="openLink('https://hackmd.io/@Yo6S6-QbTX2tGrnWSw-aUw/Hyunr2JS2')">
            <div class="card-thumbnail px4">
              <img src="/images/px4-logo.svg" alt="PX4 Logo" class="fallback-img" />
            </div>
            <div class="card-content">
              <h3>PX4 環境設置</h3>
              <p class="card-description">
                PX4 開發環境的安裝與配置指南...
              </p>
              <div class="card-footer">
                <span class="view-link">點擊查看全文</span>
              </div>
            </div>
          </div>

          <!-- PX4 文檔 2 -->
          <div class="card" @click="openLink('https://hackmd.io/@Yo6S6-QbTX2tGrnWSw-aUw/SyBNddx-lx')">
            <div class="card-thumbnail px4">
              <img src="/images/px4-logo.svg" alt="PX4 Logo" class="fallback-img" />
            </div>
            <div class="card-content">
              <h3>PX4 模擬器使用</h3>
              <p class="card-description">
                如何使用 Gazebo 和 SITL 進行 PX4 飛行控制模擬...
              </p>
              <div class="card-footer">
                <span class="view-link">點擊查看全文</span>
              </div>
            </div>
          </div>

          <!-- PX4 文檔 3 -->
          <div class="card" @click="openLink('https://hackmd.io/@Yo6S6-QbTX2tGrnWSw-aUw/B1v8Si-zll')">
            <div class="card-thumbnail px4">
              <img src="/images/px4-logo.svg" alt="PX4 Logo" class="fallback-img" />
            </div>
            <div class="card-content">
              <h3>認識PX4</h3>
              <p class="card-description">
                認識飛行控制器功能與應用開發指南...
              </p>
              <div class="card-footer">
                <span class="view-link">點擊查看全文</span>
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
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

h2 {
  color: #34495e;
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
}

p {
  font-size: 1.2em;
  line-height: 1.5;
}

.content-sections {
  margin-top: 2rem;
}

.content-section {
  margin-bottom: 3rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  height: 100%;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.card-thumbnail {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card-thumbnail.github {
  background: linear-gradient(135deg, #2b3137 0%, #24292e 100%);
}

.card-thumbnail.px4 {
  background: linear-gradient(135deg, #0094D6 0%, #00557D 100%);
}

.fallback-img {
  max-width: 50%;
  max-height: 50%;
  object-fit: contain;
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

h3 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
  font-size: 1.3rem;
}

.card-description {
  margin: 0;
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
  flex: 1;
}

.card-footer {
  margin-top: 1.5rem;
  text-align: right;
}

.view-link {
  color: #41b883;
  font-weight: 600;
}

.view-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
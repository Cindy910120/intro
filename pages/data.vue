<template>
  <div class="data-container data-page">
    <!-- 動態背景裝飾 -->
    <div class="data-background">
      <div class="floating-books">
        <div class="book book-1">📚</div>
        <div class="book book-2">📖</div>
        <div class="book book-3">📝</div>
        <div class="book book-4">💡</div>
        <div class="book book-5">⚡</div>
      </div>
      <div class="code-rain">
        <div class="code-line">{ }</div>
        <div class="code-line">&lt;/&gt;</div>
        <div class="code-line">[ ]</div>
        <div class="code-line">( )</div>
      </div>
    </div>

    <!-- 頁面標題區域 -->
    <div class="data-header animate-on-scroll">
      <h1 class="data-title">
        <span class="title-text">技術學習</span>
        <span class="title-highlight">筆記集</span>
        <div class="title-decoration">
          <div class="decoration-line"></div>
          <div class="decoration-dot"></div>
          <div class="decoration-line"></div>
        </div>
      </h1>
      <p class="data-description">
        這裡收集了我在學習過程中整理的各項技術筆記與學習心得，涵蓋開發工具使用、飛控系統研究等領域
      </p>
    </div>    <div class="data-content-sections">
      <!-- GitHub 區域 -->
      <div class="data-content-section animate-on-scroll">
        <h2 class="data-section-title">
          <span class="section-icon">🛠️</span>
          開發工具學習筆記
          <div class="section-underline"></div>
        </h2>
        <div class="data-cards-grid">
          <div class="data-card card-hover-effect" @click="openLink('https://hackmd.io/@Yo6S6-QbTX2tGrnWSw-aUw/HkuPMjWGxg')">
            <div class="data-card-thumbnail github">
              <img src="/images/github-logo.svg" alt="GitHub Logo" class="data-card-img pulse-animation" />
              <div class="thumbnail-overlay">
                <div class="overlay-icon">🚀</div>
              </div>
            </div>
            <div class="data-card-content">
              <h3>GitHub 版本控制完整指南</h3>
              <p class="data-card-description">
                涵蓋 Git 基本指令、分支管理策略、團隊協作流程、衝突解決等實務開發必備技能的完整教學
              </p>
              <div class="data-card-footer">
                <span class="data-view-link">
                  點擊查看全文
                  <span class="link-arrow">→</span>
                </span>
              </div>
            </div>
          </div>

          <div class="data-card card-hover-effect" @click="openLink('https://hackmd.io/@Yo6S6-QbTX2tGrnWSw-aUw/HkFd81DQxl')">
            <div class="data-card-thumbnail development">
              <div class="data-icon-placeholder animate-float">📚</div>
              <div class="thumbnail-overlay">
                <div class="overlay-icon">✨</div>
              </div>
            </div>
            <div class="data-card-content">
              <h3>PX4程式開發學習筆記</h3>
              <p class="data-card-description">
                整理程式設計相關的學習心得、技術要點及實務經驗分享
              </p>
              <div class="data-card-footer">
                <span class="data-view-link">
                  點擊查看全文
                  <span class="link-arrow">→</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>      <!-- PX4 區域 -->
      <div class="data-content-section animate-on-scroll">
        <h2 class="data-section-title">
          <span class="section-icon">🚁</span>
          PX4 飛控系統學習筆記
          <div class="section-underline"></div>
        </h2>
        <div class="data-cards-grid">
          <!-- PX4 文檔 1 -->
          <div class="data-card card-hover-effect" @click="openLink('https://hackmd.io/@Yo6S6-QbTX2tGrnWSw-aUw/Hyunr2JS2')">
            <div class="data-card-thumbnail px4">
              <img src="/images/px4-logo.svg" alt="PX4 Logo" class="data-card-img pulse-animation" />
              <div class="thumbnail-overlay">
                <div class="overlay-icon">⚙️</div>
              </div>
            </div>
            <div class="data-card-content">
              <h3>PX4 開發環境建置指南</h3>
              <p class="data-card-description">
                詳細介紹PX4開發環境的安裝配置流程，包含工具鏈設置、編譯環境準備及常見問題排解
              </p>
              <div class="data-card-footer">
                <span class="data-view-link">
                  點擊查看全文
                  <span class="link-arrow">→</span>
                </span>
              </div>
            </div>
          </div>

          <!-- PX4 文檔 2 -->
          <div class="data-card card-hover-effect" @click="openLink('https://hackmd.io/@Yo6S6-QbTX2tGrnWSw-aUw/SyBNddx-lx')">
            <div class="data-card-thumbnail px4">
              <img src="/images/px4-logo.svg" alt="PX4 Logo" class="data-card-img pulse-animation" />
              <div class="thumbnail-overlay">
                <div class="overlay-icon">🎮</div>
              </div>
            </div>
            <div class="data-card-content">
              <h3>PX4 SITL模擬器實戰教學</h3>
              <p class="data-card-description">
                深入探討如何使用Gazebo進行PX4飛行控制模擬，涵蓋SITL配置、場景設定及飛行測試實務
              </p>
              <div class="data-card-footer">
                <span class="data-view-link">
                  點擊查看全文
                  <span class="link-arrow">→</span>
                </span>
              </div>
            </div>
          </div>

          <!-- PX4 文檔 3 -->
          <div class="data-card card-hover-effect" @click="openLink('https://hackmd.io/@Yo6S6-QbTX2tGrnWSw-aUw/B1v8Si-zll')">
            <div class="data-card-thumbnail px4">
              <img src="/images/px4-logo.svg" alt="PX4 Logo" class="data-card-img pulse-animation" />
              <div class="thumbnail-overlay">
                <div class="overlay-icon">🔬</div>
              </div>
            </div>
            <div class="data-card-content">
              <h3>PX4飛控系統架構深度解析</h3>
              <p class="data-card-description">
                深入了解PX4飛行控制器的核心架構、模組功能及無人機應用開發的關鍵技術要點
              </p>
              <div class="data-card-footer">
                <span class="data-view-link">
                  點擊查看全文
                  <span class="link-arrow">→</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

// 打開外部連結函數
const openLink = (url) => {
  window.open(url, '_blank')
}

// 滾動動畫觀察器
const setupScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        
        // 特殊處理卡片動畫
        if (entry.target.classList.contains('data-content-section')) {
          const cards = entry.target.querySelectorAll('.data-card')
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-in')
            }, index * 200)
          })
        }
      }
    })
  }, observerOptions)

  // 觀察所有需要動畫的元素
  const animateElements = document.querySelectorAll('.animate-on-scroll')
  animateElements.forEach(el => observer.observe(el))
}

onMounted(async () => {
  await nextTick()
  setupScrollAnimations()
})
</script>

<style scoped>
/* ===== 動態背景效果 ===== */
.data-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.floating-books {
  position: absolute;
  width: 100%;
  height: 100%;
}

.book {
  position: absolute;
  font-size: 2rem;
  opacity: 0.1;
  animation: floatBooks 20s infinite linear;
}

.book-1 {
  left: 10%;
  animation-delay: 0s;
  animation-duration: 25s;
}

.book-2 {
  left: 30%;
  animation-delay: -5s;
  animation-duration: 20s;
}

.book-3 {
  left: 50%;
  animation-delay: -10s;
  animation-duration: 30s;
}

.book-4 {
  left: 70%;
  animation-delay: -15s;
  animation-duration: 22s;
}

.book-5 {
  left: 90%;
  animation-delay: -20s;
  animation-duration: 28s;
}

.code-rain {
  position: absolute;
  width: 100%;
  height: 100%;
}

.code-line {
  position: absolute;
  color: rgba(102, 126, 234, 0.1);
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  animation: codeRain 15s infinite linear;
}

.code-line:nth-child(1) {
  left: 20%;
  animation-delay: 0s;
}

.code-line:nth-child(2) {
  left: 40%;
  animation-delay: -3s;
}

.code-line:nth-child(3) {
  left: 60%;
  animation-delay: -6s;
}

.code-line:nth-child(4) {
  left: 80%;
  animation-delay: -9s;
}

/* ===== 頁面標題樣式 ===== */
.data-header {
  text-align: center;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
}

.data-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.title-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  transform: translateY(50px);
  animation: titleSlideIn 1s ease forwards 0.2s;
}

.title-highlight {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  transform: translateY(50px);
  animation: titleSlideIn 1s ease forwards 0.4s;
}

.title-decoration {
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  animation: fadeInUp 1s ease forwards 0.6s;
}

.decoration-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #667eea, transparent);
  border-radius: 2px;
}

.decoration-dot {
  width: 12px;
  height: 12px;
  background: #667eea;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.data-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  opacity: 0;
  animation: fadeInUp 1s ease forwards 0.8s;
}

/* ===== 區段標題樣式 ===== */
.data-section-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.section-icon {
  font-size: 2.5rem;
  animation: iconBounce 2s ease-in-out infinite;
}

.section-underline {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2, transparent);
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.8s ease;
}

/* ===== 卡片樣式增強 ===== */
.data-card {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  transform: translateY(30px);
  opacity: 0;
}

.card-hover-effect {
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover-effect.animate-in {
  transform: translateY(0);
  opacity: 1;
}

.card-hover-effect:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.card-hover-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 0.6s ease;
  z-index: 1;
}

.card-hover-effect:hover::before {
  left: 100%;
}

/* ===== 縮圖增強效果 ===== */
.data-card-thumbnail {
  position: relative;
  overflow: hidden;
}

.thumbnail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-icon {
  font-size: 3rem;
  transform: scale(0.5);
  transition: transform 0.3s ease;
}

.data-card:hover .thumbnail-overlay {
  opacity: 1;
}

.data-card:hover .overlay-icon {
  transform: scale(1);
}

.pulse-animation {
  animation: pulseGlow 3s infinite;
}

.animate-float {
  animation: floatIcon 3s ease-in-out infinite;
}

/* ===== 連結箭頭動畫 ===== */
.data-view-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.link-arrow {
  transition: transform 0.3s ease;
}

.data-card:hover .link-arrow {
  transform: translateX(5px);
}

/* ===== 滾動動畫 ===== */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.animate-on-scroll.animate-in .section-underline {
  transform: scaleX(1);
}

/* ===== 動畫關鍵幀 ===== */
@keyframes floatBooks {
  0% {
    transform: translateY(100vh) rotate(0deg);
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
  }
}

@keyframes codeRain {
  0% {
    transform: translateY(-100vh);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

@keyframes titleSlideIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
}

@keyframes iconBounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulseGlow {
  0%, 100% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
}

@keyframes floatIcon {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(5deg);
  }
  66% {
    transform: translateY(5px) rotate(-3deg);
  }
}

/* ===== 響應式設計 ===== */
@media (max-width: 768px) {
  .data-header {
    padding: 3rem 1rem;
    min-height: 60vh;
  }
  
  .data-title {
    font-size: clamp(2rem, 8vw, 3rem);
  }
  
  .data-description {
    font-size: 1rem;
    padding: 0 1rem;
  }
  
  .title-decoration {
    scale: 0.8;
  }
  
  .decoration-line {
    width: 60px;
    height: 2px;
  }
  
  .data-content {
    padding: 2rem 1rem;
  }
  
  .data-section {
    margin-bottom: 3rem;
  }
  
  .data-section-title {
    font-size: 1.5rem;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  
  .section-icon {
    font-size: 2rem;
  }
  
  .data-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .data-card {
    padding: 1.5rem;
  }
  
  .data-card h3 {
    font-size: 1.2rem;
  }
  
  .data-card p {
    font-size: 0.9rem;
  }
  
  .card-hover-effect:hover {
    transform: translateY(-5px) scale(1.01);
  }
  
  .floating-books .book {
    font-size: 1.5rem;
  }
  
  .code-rain .code-line {
    font-size: 1.2rem;
  }
  
  /* 浮動背景優化 */
  .floating-books,
  .code-rain {
    opacity: 0.3;
  }
  
  .floating-books .book,
  .code-rain .code-line {
    animation-duration: 15s;
  }
}

@media (max-width: 480px) {
  .data-header {
    padding: 2rem 0.5rem;
    min-height: 50vh;
  }
  
  .data-title {
    font-size: clamp(1.5rem, 10vw, 2.5rem);
    margin-bottom: 1rem;
  }
  
  .data-description {
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }
  
  .title-decoration {
    scale: 0.6;
    margin: 1rem 0;
  }
  
  .decoration-line {
    width: 40px;
    height: 2px;
  }
  
  .data-content {
    padding: 1.5rem 0.5rem;
  }
  
  .data-section {
    margin-bottom: 2rem;
  }
  
  .data-section-title {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  
  .section-icon {
    font-size: 1.5rem;
  }
  
  .data-grid {
    gap: 1rem;
  }
  
  .data-card {
    padding: 1rem;
  }
  
  .data-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
  
  .data-card p {
    font-size: 0.85rem;
    line-height: 1.5;
  }
  
  .data-card .card-icon {
    font-size: 2rem;
  }
  
  /* 簡化背景動畫 */
  .floating-books,
  .code-rain {
    display: none;
  }
}

/* ===== 橫屏手機優化 ===== */
@media (max-width: 768px) and (orientation: landscape) {
  .data-header {
    min-height: 40vh;
    padding: 1.5rem 1rem;
  }
  
  .data-title {
    font-size: 2.5rem;
  }
  
  .floating-books,
  .code-rain {
    opacity: 0.2;
  }
}
</style>
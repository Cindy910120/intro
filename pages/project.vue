<template>
  <div class="project-container project-page">
    <!-- 動態背景裝飾 -->
    <div class="project-background">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
    </div>
    
    <!-- 主標題區域 -->
    <div class="project-header animate-on-scroll">
      <h1 class="project-title">
        <span class="title-word">期末</span>
        <span class="title-word">專題</span>
        <span class="title-word">網頁</span>
        <span class="title-word">介紹</span>
        <span class="title-emoji">🚀</span>
      </h1>
      <div class="project-title-underline"></div>
    </div>

    <!-- 專題介紹卡片 -->
    <div class="project-intro-grid animate-on-scroll">
      <div class="project-intro-card">
        <div class="project-card-icon">💡</div>
        <h2>專題概念</h2>
        <p>這邊是期末專題的介紹</p>
      </div>
      
      <div class="project-intro-card">
        <div class="project-card-icon">🎯</div>
        <h2>學習應用</h2>
        <p>運用這學期所學與自身經歷，我製作了一個關於勞基法的網頁</p>
      </div>
      
      <div class="project-intro-card">
        <div class="project-card-icon">📚</div>
        <h2>設計理念</h2>
        <p>把難懂的法條加上點例子，更方便我們了解如何運用</p>
      </div>
    </div>

    <!-- 專題亮點 -->
    <div class="project-highlights animate-on-scroll">
      <h2 class="project-section-title">
        <span class="highlight-text">專題亮點</span>
        <span class="sparkle">✨</span>
      </h2>
      <div class="project-highlights-grid">
        <div class="project-highlight-item">
          <div class="highlight-icon">🎨</div>
          <h3>視覺設計</h3>
          <p>現代化的UI設計，提升使用者體驗</p>
        </div>
        <div class="project-highlight-item">
          <div class="highlight-icon">⚡</div>
          <h3>互動體驗</h3>
          <p>豐富的互動元素，讓學習更有趣</p>
        </div>
        <div class="project-highlight-item">
          <div class="highlight-icon">🎯</div>
          <h3>實用性</h3>
          <p>結合實際案例，易於理解應用</p>
        </div>
      </div>
    </div>

    <!-- 專題連結按鈕 -->
    <div class="project-link-section animate-on-scroll">
      <a href="https://law-rose.vercel.app/" target="_blank" class="project-link-button">
        <span class="project-button-icon">🌐</span>
        <span class="project-button-text">點擊查看專題網站</span>
        <span class="project-button-arrow">→</span>
      </a>
      <div class="project-button-glow"></div>
    </div>

    <!-- 技術標籤 -->
    <div class="project-tech-stack animate-on-scroll">
      <h3>使用技術</h3>
      <div class="project-tech-tags">
        <span class="project-tech-tag vue">Vue.js</span>
        <span class="project-tech-tag nuxt">Nuxt.js</span>
        <span class="project-tech-tag css">CSS3</span>
        <span class="project-tech-tag js">JavaScript</span>
        <span class="project-tech-tag responsive">響應式設計</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// 使用純 CSS 動畫，不需要額外的庫
import { onMounted } from 'vue'

onMounted(() => {
  // 添加滾動觸發動畫的邏輯
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  // 觀察所有需要動畫的元素
  const animateElements = document.querySelectorAll('.animate-on-scroll')
  animateElements.forEach(el => observer.observe(el))
})
</script>

<style scoped>
/* 專項頁面特殊動畫效果，其他樣式已移至 project.css */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* 特殊入場動畫序列 */
.project-header.animate-in {
  animation: fadeInDown 0.8s ease-out;
}

.project-intro-grid.animate-in {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.project-highlights.animate-in {
  animation: zoomIn 0.8s ease-out 0.4s both;
}

.project-link-section.animate-in {
  animation: bounceIn 0.8s ease-out 0.6s both;
}

.project-tech-stack.animate-in {
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

@keyframes fadeInDown {
  0% { opacity: 0; transform: translateY(-30px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes zoomIn {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.3) translateY(50px); }
  50% { opacity: 0.7; transform: scale(1.05) translateY(-10px); }
  70% { opacity: 0.9; transform: scale(0.9) translateY(0); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
</style>
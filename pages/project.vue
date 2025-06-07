<template>
  <div class="container">
    <!-- 動態背景裝飾 -->
    <div class="background-decoration">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
    </div>    <!-- 主標題區域 -->
    <div class="header-section animate-on-scroll">
      <h1 class="animated-title">
        <span class="title-word">期末</span>
        <span class="title-word">專題</span>
        <span class="title-word">網頁</span>
        <span class="title-word">介紹</span>
        <span class="title-emoji">🚀</span>
      </h1>
      <div class="title-underline"></div>
    </div>

    <!-- 專題介紹卡片 -->
    <div class="project-intro animate-on-scroll">
      <div class="intro-card">
        <div class="card-icon">💡</div>
        <h2>專題概念</h2>
        <p>這邊是期末專題的介紹</p>
      </div>
      
      <div class="intro-card">
        <div class="card-icon">🎯</div>
        <h2>學習應用</h2>
        <p>運用這學期所學與自身經歷，我製作了一個關於勞基法的網頁</p>
      </div>
      
      <div class="intro-card">
        <div class="card-icon">📚</div>
        <h2>設計理念</h2>
        <p>把難懂的法條加上點例子，更方便我們了解如何運用</p>
      </div>
    </div>

    <!-- 專題亮點 -->
    <div class="project-highlights animate-on-scroll">
      <h2 class="section-title">
        <span class="highlight-text">專題亮點</span>
        <span class="sparkle">✨</span>
      </h2>
      <div class="highlights-grid">
        <div class="highlight-item">
          <div class="highlight-icon">🎨</div>
          <h3>視覺設計</h3>
          <p>現代化的UI設計，提升使用者體驗</p>
        </div>
        <div class="highlight-item">
          <div class="highlight-icon">⚡</div>
          <h3>互動體驗</h3>
          <p>豐富的互動元素，讓學習更有趣</p>
        </div>
        <div class="highlight-item">
          <div class="highlight-icon">🎯</div>
          <h3>實用性</h3>
          <p>結合實際案例，易於理解應用</p>
        </div>
      </div>
    </div>

    <!-- 專題連結按鈕 -->
    <div class="project-link animate-on-scroll">
      <a href="https://law-rose.vercel.app/" target="_blank" class="link-button">
        <span class="button-icon">🌐</span>
        <span class="button-text">點擊查看專題網站</span>
        <span class="button-arrow">→</span>
      </a>
      <div class="button-glow"></div>
    </div>

    <!-- 技術標籤 -->
    <div class="tech-stack animate-on-scroll">
      <h3>使用技術</h3>
      <div class="tech-tags">
        <span class="tech-tag vue">Vue.js</span>
        <span class="tech-tag nuxt">Nuxt.js</span>
        <span class="tech-tag css">CSS3</span>
        <span class="tech-tag js">JavaScript</span>
        <span class="tech-tag responsive">響應式設計</span>
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
/* 全域容器樣式 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow-x: hidden;
}

/* 動態背景裝飾 */
.background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  top: 30%;
  right: 30%;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

/* 標題區域 */
.header-section {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.animated-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.title-word {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease-in-out infinite;
  display: inline-block;
  padding: 0 0.2rem;
}

.title-emoji {
  font-size: 3rem;
  animation: bounce 2s infinite;
  margin-left: 1rem;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

.title-underline {
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  margin: 0 auto;
  border-radius: 2px;
  animation: expandLine 2s ease-out;
}

@keyframes expandLine {
  0% { width: 0; }
  100% { width: 200px; }
}

/* 專題介紹卡片 */
.project-intro {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.intro-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.intro-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
}

.intro-card h2 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.intro-card p {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* 專題亮點 */
.project-highlights {
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.highlight-text {
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
}

.sparkle {
  font-size: 2rem;
  animation: sparkleRotate 3s linear infinite;
}

@keyframes sparkleRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.highlight-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.highlight-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
}

.highlight-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.highlight-item h3 {
  color: white;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.highlight-item p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
}

/* 專題連結按鈕 */
.project-link {
  text-align: center;
  margin: 4rem 0;
  position: relative;
  z-index: 1;
}

.link-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  padding: 1.5rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.link-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.link-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.link-button:hover::before {
  left: 100%;
}

.button-icon {
  font-size: 1.5rem;
  animation: rotate 4s linear infinite;
}

.button-text {
  flex: 1;
}

.button-arrow {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.link-button:hover .button-arrow {
  transform: translateX(5px);
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.button-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  pointer-events: none;
}

.link-button:hover + .button-glow {
  width: 200px;
  height: 200px;
}

/* 技術標籤 */
.tech-stack {
  text-align: center;
  position: relative;
  z-index: 1;
}

.tech-stack h3 {
  color: white;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 600;
}

.tech-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.tech-tag {
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.tech-tag::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.tech-tag:hover::before {
  left: 100%;
}

.tech-tag:hover {
  transform: translateY(-3px) scale(1.05);
}

.tech-tag.vue {
  background: linear-gradient(45deg, #4fc08d, #42b883);
  color: white;
}

.tech-tag.nuxt {
  background: linear-gradient(45deg, #00c58e, #00dc82);
  color: white;
}

.tech-tag.css {
  background: linear-gradient(45deg, #264de4, #2965f1);
  color: white;
}

.tech-tag.js {
  background: linear-gradient(45deg, #f0db4f, #f7df1e);
  color: #323330;
}

.tech-tag.responsive {
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  color: white;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  .animated-title {
    font-size: 2.5rem;
  }
  
  .title-word {
    padding: 0;
  }
  
  .project-intro {
    grid-template-columns: 1fr;
  }
  
  .highlights-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-tags {
    flex-direction: column;
    align-items: center;
  }
  
  .link-button {
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 2rem;
  }
}

/* 新增載入動畫 */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* AOS 動畫補強 */
[data-aos] {
  transition-property: transform, opacity;
}

/* 滾動動畫樣式 */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* 不同元素的動畫延遲 */
.header-section.animate-in {
  transform: translateY(0) scale(1);
  animation: fadeInDown 0.8s ease-out;
}

.project-intro.animate-in {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.project-highlights.animate-in {
  animation: zoomIn 0.8s ease-out 0.4s both;
}

.project-link.animate-in {
  animation: bounceIn 0.8s ease-out 0.6s both;
}

.tech-stack.animate-in {
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(50px);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05) translateY(-10px);
  }
  70% {
    opacity: 0.9;
    transform: scale(0.9) translateY(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
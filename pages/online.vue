<template>
  <div class="cyber-container">
    <!-- 動態科技背景 -->
    <div class="cyber-background">
      <div class="matrix-rain">
        <div v-for="n in 20" :key="`matrix-${n}`" class="matrix-column" :style="{ 
          '--delay': `${Math.random() * 5}s`,
          '--duration': `${Math.random() * 10 + 15}s`,
          '--left': `${Math.random() * 100}%`
        }">
          <span v-for="m in 30" :key="`char-${m}`" class="matrix-char">{{ getRandomChar() }}</span>
        </div>
      </div>
      <div class="cyber-grid"></div>
      <div class="neon-particles">
        <div v-for="n in 15" :key="`particle-${n}`" class="particle" :style="{
          '--x': `${Math.random() * 100}%`,
          '--y': `${Math.random() * 100}%`,
          '--delay': `${Math.random() * 8}s`,
          '--duration': `${Math.random() * 12 + 8}s`
        }"></div>
      </div>
    </div>

    <!-- 主要內容 -->
    <div class="main-content">
      <!-- 標題區域 -->
      <section class="hero-section">
        <div class="glitch-container">
          <h1 class="cyber-title" data-text="ONLINE ROSE SYSTEM">
            ONLINE ROSE SYSTEM
          </h1>
          <div class="subtitle-container">
            <p class="cyber-subtitle">
              <span class="typing-text">次世代個人成長管理系統</span>
              <span class="cursor">|</span>
            </p>
          </div>
        </div>
        
        <!-- 系統狀態指示器 -->
        <div class="status-panel">
          <div class="status-item">
            <span class="status-dot online"></span>
            <span>系統狀態: ONLINE</span>
          </div>
          <div class="status-item">
            <span class="status-dot secure"></span>
            <span>安全等級: MAXIMUM</span>
          </div>
          <div class="status-item">
            <span class="status-dot active"></span>
            <span>數據完整性: 100%</span>
          </div>
        </div>
      </section>

      <!-- 功能模組介紹 -->
      <section class="modules-section">
        <h2 class="section-title">
          <span class="title-bracket">[</span>
          核心模組
          <span class="title-bracket">]</span>
        </h2>
        
        <div class="modules-grid">
          <!-- 個人面板 -->
          <div class="cyber-card" data-aos="fade-up" data-aos-delay="100">
            <div class="card-header">
              <div class="module-icon">
                <i class="icon-dashboard">📊</i>
              </div>
              <h3>個人面板</h3>
              <div class="card-status">ACTIVE</div>
            </div>
            <div class="card-content">
              <p>查看個人統計和儀表板，實時監控您的成長數據和系統狀態。</p>
              <div class="progress-bar">
                <div class="progress-fill" data-progress="60"></div>
                <span class="progress-text">數據量: 60%</span>
              </div>
            </div>
            <div class="card-footer">
              <span class="tech-tag">Dashboard</span>
              <span class="tech-tag">Analytics</span>
            </div>
          </div>

          <!-- 個人資料更新 -->
          <div class="cyber-card" data-aos="fade-up" data-aos-delay="200">
            <div class="card-header">
              <div class="module-icon">
                <i class="icon-user">👤</i>
              </div>
              <h3>個人資料</h3>
              <div class="card-status">UPDATING</div>
            </div>
            <div class="card-content">
              <p>管理和更新您的個人資訊，建立完整的數位身份檔案。</p>
              <div class="progress-bar">
                <div class="progress-fill" data-progress="90"></div>
                <span class="progress-text">完成度: 90%</span>
              </div>
            </div>
            <div class="card-footer">
              <span class="tech-tag">Profile</span>
              <span class="tech-tag">Identity</span>
            </div>
          </div>

          <!-- 技能樹 -->
          <div class="cyber-card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-header">
              <div class="module-icon">
                <i class="icon-skills">💡</i>
              </div>
              <h3>技能樹</h3>
              <div class="card-status">EVOLVING</div>
            </div>
            <div class="card-content">
              <p>查看和升級您的技能點數，解鎖新的能力分支和專業領域。</p>
              <div class="progress-bar">
                <div class="progress-fill" data-progress="75"></div>
                <span class="progress-text">技能度: 75%</span>
              </div>
            </div>
            <div class="card-footer">
              <span class="tech-tag">Skills</span>
              <span class="tech-tag">Upgrade</span>
            </div>
          </div>

          <!-- 任務系統 -->
          <div class="cyber-card" data-aos="fade-up" data-aos-delay="400">
            <div class="card-header">
              <div class="module-icon">
                <i class="icon-tasks">📋</i>
              </div>
              <h3>任務系統</h3>
              <div class="card-status">ACTIVE</div>
            </div>
            <div class="card-content">
              <p>查看當前任務進度，接受新的挑戰並追踪完成狀態。</p>
              <div class="progress-bar">
                <div class="progress-fill" data-progress="35"></div>
                <span class="progress-text">進度: 35%</span>
              </div>
            </div>
            <div class="card-footer">
              <span class="tech-tag">Missions</span>
              <span class="tech-tag">Progress</span>
            </div>
          </div>

          <!-- 成就系統 -->
          <div class="cyber-card" data-aos="fade-up" data-aos-delay="500">
            <div class="card-header">
              <div class="module-icon">
                <i class="icon-achievements">✓</i>
              </div>
              <h3>成就系統</h3>
              <div class="card-status">UNLOCKING</div>
            </div>
            <div class="card-content">
              <p>查看已解鎖的成就獎章，追求更高層次的個人突破。</p>
              <div class="progress-bar">
                <div class="progress-fill" data-progress="15"></div>
                <span class="progress-text">解鎖: 15%</span>
              </div>
            </div>
            <div class="card-footer">
              <span class="tech-tag">Achievement</span>
              <span class="tech-tag">Unlock</span>
            </div>
          </div>

          <!-- 系統狀態 -->
          <div class="cyber-card special-card" data-aos="fade-up" data-aos-delay="600">
            <div class="card-header">
              <div class="module-icon">
                <i class="icon-system">⚡</i>
              </div>
              <h3>系統監控</h3>
              <div class="card-status special">OPTIMAL</div>
            </div>
            <div class="card-content">
              <p>實時系統狀態監控，確保所有模組正常運作並保持最佳性能。</p>
              <div class="system-stats">
                <div class="stat-item">
                  <span class="stat-label">CPU:</span>
                  <span class="stat-value">23%</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">RAM:</span>
                  <span class="stat-value">45%</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">UPTIME:</span>
                  <span class="stat-value">19:26:59</span>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <span class="tech-tag special">Monitoring</span>
              <span class="tech-tag special">Real-time</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 系統特色 -->
      <section class="features-section">
        <h2 class="section-title">
          <span class="title-bracket">[</span>
          系統特色
          <span class="title-bracket">]</span>
        </h2>
        
        <div class="features-grid">
          <div class="feature-item" data-aos="fade-right" data-aos-delay="100">
            <div class="feature-icon">🔐</div>
            <h3>量子級安全</h3>
            <p>採用最先進的加密技術，確保您的數據在多維度空間中絕對安全。</p>
          </div>
          
          <div class="feature-item" data-aos="fade-right" data-aos-delay="200">
            <div class="feature-icon">🧠</div>
            <h3>AI智能分析</h3>
            <p>結合機器學習算法，為您提供個性化的成長建議和優化方案。</p>
          </div>
          
          <div class="feature-item" data-aos="fade-right" data-aos-delay="300">
            <div class="feature-icon">⚡</div>
            <h3>即時同步</h3>
            <p>跨平台實時數據同步，無論在何時何地都能無縫訳續您的進度。</p>
          </div>
          
          <div class="feature-item" data-aos="fade-right" data-aos-delay="400">
            <div class="feature-icon">🌌</div>
            <h3>沉浸體驗</h3>
            <p>科技感十足的UI設計，讓個人管理變成一場未來科幻冒險。</p>
          </div>
        </div>
      </section>

      <!-- 訪問按鈕 -->
      <section class="access-section">
        <div class="access-portal">
          <h2 class="portal-title">進入數位領域</h2>
          <p class="portal-description">準備好開始您的數位進化之旅了嗎？</p>
            <a href="https://online-rose.vercel.app/" target="_blank" class="home-link-button cyber-enhanced">
            啟動系統
          </a>
          
          <div class="portal-footer">
            <p>系統版本: v2.0.1 | 建議瀏覽器: Chrome 90+ | 最佳解析度: 1920x1080</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 隨機字符生成
const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'

const getRandomChar = () => {
  return characters.charAt(Math.floor(Math.random() * characters.length))
}

// 打字效果
const typingTexts = [
  '次世代個人成長管理系統',
  'Next-Gen Personal Growth Platform',
  '未來科技 × 個人進化',
  'Technology Meets Evolution'
]
let currentTextIndex = 0
let currentCharIndex = 0
let isDeleting = false

const typewriterEffect = () => {
  const element = document.querySelector('.typing-text')
  if (!element) return

  const currentText = typingTexts[currentTextIndex]
  
  if (isDeleting) {
    element.textContent = currentText.substring(0, currentCharIndex - 1)
    currentCharIndex--
  } else {
    element.textContent = currentText.substring(0, currentCharIndex + 1)
    currentCharIndex++
  }

  let typeSpeed = isDeleting ? 50 : 100

  if (!isDeleting && currentCharIndex === currentText.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false
    currentTextIndex = (currentTextIndex + 1) % typingTexts.length
    typeSpeed = 500
  }

  setTimeout(typewriterEffect, typeSpeed)
}

// 進度條動畫
const animateProgressBars = () => {
  const progressBars = document.querySelectorAll('.progress-fill')
  progressBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress')
    setTimeout(() => {
      bar.style.width = progress + '%'
    }, Math.random() * 1000)
  })
}

// AOS初始化
const initAOS = () => {
  const elements = document.querySelectorAll('[data-aos]')
  elements.forEach((element, index) => {
    const delay = element.getAttribute('data-aos-delay') || 0
    element.style.opacity = '0'
    element.style.transform = 'translateY(50px)'
    element.style.transition = `all 0.8s ease ${delay}ms`
  })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  })

  elements.forEach(element => observer.observe(element))
}

onMounted(() => {
  setTimeout(typewriterEffect, 1000)
  setTimeout(animateProgressBars, 1500)
  initAOS()
})
</script>

<style scoped>
/* 基礎樣式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.cyber-container {
  min-height: 100vh;
  background: #0a0a0a;
  color: #00ffff;
  font-family: 'Courier New', monospace;
  position: relative;
  overflow-x: hidden;
}

/* 動態背景 */
.cyber-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

.matrix-rain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.matrix-column {
  position: absolute;
  top: -100%;
  left: var(--left);
  width: 20px;
  font-size: 14px;
  line-height: 20px;
  color: #00ff41;
  animation: matrixFall var(--duration) linear infinite;
  animation-delay: var(--delay);
  opacity: 0.6;
}

.matrix-char {
  display: block;
  animation: matrixGlow 2s ease-in-out infinite alternate;
}

@keyframes matrixFall {
  0% { top: -100%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

@keyframes matrixGlow {
  0% { text-shadow: 0 0 5px #00ff41; }
  100% { text-shadow: 0 0 20px #00ff41, 0 0 30px #00ff41; }
}

.cyber-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.neon-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  top: var(--y);
  left: var(--x);
  width: 4px;
  height: 4px;
  background: #00ffff;
  border-radius: 50%;
  box-shadow: 0 0 10px #00ffff;
  animation: particleFloat var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes particleFloat {
  0%, 100% { transform: translate(0, 0) scale(0.5); opacity: 0; }
  50% { transform: translate(100px, -100px) scale(1); opacity: 1; }
}

/* 主要內容 */
.main-content {
  position: relative;
  z-index: 1;
  padding: 2rem;
}

/* 英雄區域 */
.hero-section {
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 4rem;
}

.glitch-container {
  margin-bottom: 3rem;
}

.cyber-title {
  font-size: 4rem;
  font-weight: bold;
  color: #00ffff;
  text-shadow: 0 0 20px #00ffff;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  animation: titleGlow 3s ease-in-out infinite alternate;
}

.cyber-title::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 2px;
  color: #ff0080;
  z-index: -1;
  animation: glitch1 2s infinite;
}

.cyber-title::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: -2px;
  color: #00ff80;
  z-index: -2;
  animation: glitch2 2s infinite;
}

@keyframes titleGlow {
  0% { text-shadow: 0 0 20px #00ffff; }
  100% { text-shadow: 0 0 40px #00ffff, 0 0 60px #00ffff; }
}

@keyframes glitch1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(2px, -2px); }
  40% { transform: translate(2px, 2px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(-2px, 2px); }
}

.subtitle-container {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cyber-subtitle {
  font-size: 1.5rem;
  color: #00ff80;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cursor {
  animation: blink 1s infinite;
  color: #00ffff;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* 狀態面板 */
.status-panel {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid #00ffff;
  border-radius: 25px;
  backdrop-filter: blur(10px);
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.status-dot.online { background: #00ff00; }
.status-dot.secure { background: #ffff00; }
.status-dot.active { background: #00ffff; }

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* 模組區域 */
.modules-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #00ffff;
  text-shadow: 0 0 20px #00ffff;
}

.title-bracket {
  color: #ff0080;
  text-shadow: 0 0 10px #ff0080;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* 卡片樣式 */
.cyber-card {
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 128, 0.1));
  border: 1px solid #00ffff;
  border-radius: 10px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cyber-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.cyber-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
  border-color: #ff0080;
}

.cyber-card:hover::before {
  left: 100%;
}

.special-card {
  border: 1px solid #ff0080;
  background: linear-gradient(135deg, rgba(255, 0, 128, 0.15), rgba(0, 255, 255, 0.15));
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.module-icon {
  width: 50px;
  height: 50px;
  background: rgba(0, 255, 255, 0.2);
  border: 1px solid #00ffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.card-header h3 {
  flex: 1;
  font-size: 1.3rem;
  color: #00ffff;
}

.card-status {
  padding: 0.3rem 0.8rem;
  background: rgba(0, 255, 0, 0.2);
  border: 1px solid #00ff00;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #00ff00;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-status.special {
  background: rgba(255, 0, 128, 0.2);
  border-color: #ff0080;
  color: #ff0080;
}

.card-content {
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.card-content p {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.progress-bar {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #00ffff;
  border-radius: 10px;
  height: 25px;
  position: relative;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00ffff, #00ff80);
  width: 0%;
  transition: width 2s ease;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: progressShimmer 2s infinite;
}

@keyframes progressShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #000;
  font-weight: bold;
  font-size: 0.9rem;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}

.system-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-item {
  text-align: center;
  padding: 0.5rem;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid #00ffff;
  border-radius: 5px;
}

.stat-label {
  display: block;
  font-size: 0.8rem;
  color: #888;
}

.stat-value {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  color: #00ffff;
}

.card-footer {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.tech-tag {
  padding: 0.3rem 0.8rem;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid #00ffff;
  border-radius: 15px;
  font-size: 0.8rem;
  color: #00ffff;
  text-transform: uppercase;
}

.tech-tag.special {
  background: rgba(255, 0, 128, 0.1);
  border-color: #ff0080;
  color: #ff0080;
}

/* 特色區域 */
.features-section {
  margin-bottom: 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-item {
  text-align: center;
  padding: 2rem;
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(0, 255, 255, 0.1);
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  color: #00ffff;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature-item p {
  color: #cccccc;
  line-height: 1.6;
}

/* 訪問區域 */
.access-section {
  text-align: center;
  padding: 4rem 0;
}

.access-portal {
  max-width: 600px;
  margin: 0 auto;
}

.portal-title {
  font-size: 2.5rem;
  color: #00ffff;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px #00ffff;
}

.portal-description {
  font-size: 1.2rem;
  color: #cccccc;
  margin-bottom: 3rem;
}

.cyber-button {
  display: inline-block;
  padding: 1rem 3rem;
  background: linear-gradient(45deg, #00ffff, #ff0080);
  border: none;
  border-radius: 30px;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 255, 255, 0.4);
}

.cyber-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.6);
}

.button-text {
  position: relative;
  z-index: 2;
}

.button-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s ease;
}

.cyber-button:hover .button-effect {
  left: 100%;
}

.button-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.btn-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  animation: buttonParticle 2s infinite;
}

.btn-particle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
.btn-particle:nth-child(2) { top: 80%; left: 30%; animation-delay: 0.2s; }
.btn-particle:nth-child(3) { top: 40%; left: 70%; animation-delay: 0.4s; }
.btn-particle:nth-child(4) { top: 60%; left: 80%; animation-delay: 0.6s; }
.btn-particle:nth-child(5) { top: 30%; left: 50%; animation-delay: 0.8s; }
.btn-particle:nth-child(6) { top: 70%; left: 60%; animation-delay: 1s; }
.btn-particle:nth-child(7) { top: 50%; left: 20%; animation-delay: 1.2s; }
.btn-particle:nth-child(8) { top: 80%; left: 80%; animation-delay: 1.4s; }

@keyframes buttonParticle {
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
}

.portal-footer {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 255, 255, 0.3);
}

.portal-footer p {
  color: #888;
  font-size: 0.9rem;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .cyber-title {
    font-size: 2.5rem;
  }
  
  .modules-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .status-panel {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .main-content {
    padding: 1rem;
  }
  
  .system-stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .cyber-title {
    font-size: 2rem;
  }
  
  .cyber-subtitle {
    font-size: 1.2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
    .cyber-card {
    padding: 1rem;
  }
}

/* 科技增強按鈕樣式 */
.cyber-enhanced {
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color-accent);
  box-shadow: 
    var(--shadow-xl),
    0 0 20px rgba(0, 255, 255, 0.3),
    inset 0 0 20px rgba(0, 255, 255, 0.1);
  animation: pulse-glow 2s infinite;
}

.cyber-enhanced:hover {
  box-shadow: 
    var(--shadow-xl),
    0 0 30px rgba(0, 255, 255, 0.5),
    inset 0 0 30px rgba(0, 255, 255, 0.2);
  transform: translateY(-3px) scale(1.05);
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 
      var(--shadow-xl),
      0 0 20px rgba(0, 255, 255, 0.3),
      inset 0 0 20px rgba(0, 255, 255, 0.1);
  }
  50% {
    box-shadow: 
      var(--shadow-xl),
      0 0 25px rgba(0, 255, 255, 0.4),
      inset 0 0 25px rgba(0, 255, 255, 0.15);
  }
}
</style>

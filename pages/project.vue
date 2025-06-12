<template>
  <div class="project-container project-page">
    <!-- 粒子背景效果 -->
    <div class="particles-background">
      <canvas ref="particlesCanvas" class="particles-canvas"></canvas>
    </div>
    
    <!-- 動態背景裝飾 -->
    <div class="project-background">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
      <div class="floating-shape shape-5"></div>
      <div class="floating-shape shape-6"></div>
    </div>
    
    <!-- Hero 區域 -->
    <div class="project-hero animate-on-scroll">
      <div class="hero-content">
        <h1 class="project-title">
          <span class="title-word glow-text">期末</span>
          <span class="title-word glow-text">專題</span>
          <span class="title-word glow-text">網頁</span>
          <span class="title-word glow-text">介紹</span>
          <span class="title-emoji">🚀</span>
        </h1>
        <div class="project-title-underline"></div>
        <p class="hero-subtitle animate-fade-in">
          運用所學技術，打造實用性與美觀兼具的勞基法學習平台
        </p>
        <div class="scroll-indicator">
          <div class="scroll-arrow">⬇</div>
          <span>向下探索更多</span>
        </div>
      </div>
    </div>

    <!-- 專題簡介區域 -->
    <div class="project-overview animate-on-scroll">
      <div class="overview-container">
        <div class="overview-left">
          <h2 class="section-title-large">
            <span class="gradient-text">勞基法學習平台</span>
          </h2>
          <p class="overview-description">
            這是一個專為學習勞基法設計的互動式網站。透過現代化的設計語言和直觀的使用者介面，
            將複雜的法條轉化為易於理解的內容，讓每個人都能輕鬆掌握自己的權益。
          </p>
          <div class="overview-stats">
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">法條解析</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">5+</div>
              <div class="stat-label">實際案例</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">100%</div>
              <div class="stat-label">響應式設計</div>
            </div>
          </div>
        </div>        <div class="overview-right">
          <div class="project-preview">
            <div class="preview-hint">
              <span class="hint-icon">🔄</span>
              <span class="hint-text">按住拖拽來旋轉</span>
            </div>
            <div class="preview-controls">
              <button class="reset-rotation-btn" @click="resetRotation">
                <span>重置視角</span>
              </button>
            </div>
            <div class="preview-frame" ref="previewFrame" @mousedown="startRotation" @mousemove="handleRotation" @mouseup="stopRotation" @mouseleave="stopRotation">
              <div class="frame-header">
                <div class="frame-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="frame-url">law-rose.vercel.app</div>
              </div>
              <div class="frame-content">
                <div class="preview-placeholder">
                  <div class="preview-icon">⚖️</div>
                  <div class="preview-text">勞基法學習平台</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 專題特色卡片 -->
    <div class="project-features animate-on-scroll">
      <h2 class="section-title">
        <span class="highlight-text">專題特色</span>
        <span class="sparkle">✨</span>
      </h2>
      <div class="features-grid">
        <div class="feature-card card-concept" data-tilt>
          <div class="card-header">
            <div class="project-card-icon">💡</div>
            <h3>創新概念</h3>
          </div>
          <div class="card-content">
            <p>將傳統的法條學習轉化為現代化的數位體驗，透過互動式設計讓學習變得更有趣</p>
            <div class="card-tags">
              <span class="tag">創新思維</span>
              <span class="tag">使用者體驗</span>
            </div>
          </div>
          <div class="card-glow"></div>
        </div>
        
        <div class="feature-card card-application" data-tilt>
          <div class="card-header">
            <div class="project-card-icon">🎯</div>
            <h3>實用應用</h3>
          </div>
          <div class="card-content">
            <p>結合實際工作經驗與法律知識，提供真實案例分析，讓理論與實務完美結合</p>
            <div class="card-tags">
              <span class="tag">實務導向</span>
              <span class="tag">案例分析</span>
            </div>
          </div>
          <div class="card-glow"></div>
        </div>
        
        <div class="feature-card card-design" data-tilt>
          <div class="card-header">
            <div class="project-card-icon">🎨</div>
            <h3>設計美學</h3>
          </div>
          <div class="card-content">
            <p>採用現代化的視覺設計語言，搭配流暢的動畫效果，打造賞心悅目的學習環境</p>
            <div class="card-tags">
              <span class="tag">視覺設計</span>
              <span class="tag">動畫效果</span>
            </div>
          </div>
          <div class="card-glow"></div>
        </div>
      </div>
    </div>    <!-- 專題亮點展示 -->
    <div class="project-highlights animate-on-scroll">
      <h2 class="section-title">
        <span class="highlight-text">技術亮點</span>
        <span class="sparkle">⭐</span>
      </h2>
      <div class="highlights-showcase">
        <div class="highlight-item visual-design">
          <div class="highlight-icon-wrapper">
            <div class="highlight-icon">🎨</div>
            <div class="icon-ripple"></div>
          </div>
          <h3>視覺設計</h3>
          <p>採用現代化的設計語言，打造直觀且美觀的使用者介面，提升整體使用體驗</p>
          <div class="highlight-details">
            <span class="detail-tag">漸層效果</span>
            <span class="detail-tag">微互動</span>
            <span class="detail-tag">動畫系統</span>
          </div>
        </div>
        
        <div class="highlight-item interactive-experience">
          <div class="highlight-icon-wrapper">
            <div class="highlight-icon">⚡</div>
            <div class="icon-ripple"></div>
          </div>
          <h3>互動體驗</h3>
          <p>豐富的互動元素和流暢的動畫效果，讓學習過程變得生動有趣且充滿樂趣</p>
          <div class="highlight-details">
            <span class="detail-tag">懸停效果</span>
            <span class="detail-tag">滾動動畫</span>
            <span class="detail-tag">手勢支援</span>
          </div>
        </div>
        
        <div class="highlight-item practical-utility">
          <div class="highlight-icon-wrapper">
            <div class="highlight-icon">🎯</div>
            <div class="icon-ripple"></div>
          </div>
          <h3>實用性</h3>
          <p>結合真實案例與法條解析，提供實用的學習內容，讓理論知識能夠實際應用</p>
          <div class="highlight-details">
            <span class="detail-tag">案例研究</span>
            <span class="detail-tag">法條解析</span>
            <span class="detail-tag">實務指南</span>
          </div>
        </div>
        
        <div class="highlight-item responsive-design">
          <div class="highlight-icon-wrapper">
            <div class="highlight-icon">📱</div>
            <div class="icon-ripple"></div>
          </div>
          <h3>響應式設計</h3>
          <p>完美適配各種設備螢幕，確保在手機、平板、電腦上都能獲得最佳瀏覽體驗</p>
          <div class="highlight-details">
            <span class="detail-tag">跨平台</span>
            <span class="detail-tag">自適應</span>
            <span class="detail-tag">高效能</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 技術棧展示 -->
    <div class="project-tech-stack animate-on-scroll">
      <h2 class="section-title">
        <span class="highlight-text">技術架構</span>
        <span class="tech-icon">⚙️</span>
      </h2>
      <div class="tech-stack-grid">
        <div class="tech-category frontend">
          <h3 class="category-title">前端技術</h3>
          <div class="tech-items">
            <div class="tech-item vue">
              <div class="tech-logo">V</div>
              <span class="tech-name">Vue.js 3</span>
              <div class="tech-progress">
                <div class="progress-bar" style="width: 90%"></div>
              </div>
            </div>
            <div class="tech-item nuxt">
              <div class="tech-logo">N</div>
              <span class="tech-name">Nuxt.js</span>
              <div class="tech-progress">
                <div class="progress-bar" style="width: 85%"></div>
              </div>
            </div>
            <div class="tech-item js">
              <div class="tech-logo">JS</div>
              <span class="tech-name">JavaScript</span>
              <div class="tech-progress">
                <div class="progress-bar" style="width: 88%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="tech-category styling">
          <h3 class="category-title">樣式設計</h3>
          <div class="tech-items">
            <div class="tech-item css">
              <div class="tech-logo">CSS</div>
              <span class="tech-name">CSS3</span>
              <div class="tech-progress">
                <div class="progress-bar" style="width: 92%"></div>
              </div>
            </div>
            <div class="tech-item animations">
              <div class="tech-logo">🎬</div>
              <span class="tech-name">Animations</span>
              <div class="tech-progress">
                <div class="progress-bar" style="width: 80%"></div>
              </div>
            </div>
            <div class="tech-item responsive">
              <div class="tech-logo">📱</div>
              <span class="tech-name">響應式設計</span>
              <div class="tech-progress">
                <div class="progress-bar" style="width: 95%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 專題連結與行動呼籲 -->
    <div class="project-cta animate-on-scroll">
      <div class="cta-container">
        <h2 class="cta-title">準備好探索了嗎？</h2>
        <p class="cta-description">
          點擊下方按鈕，立即體驗這個精心設計的勞基法學習平台
        </p>
        
        <div class="cta-buttons">
          <a href="https://law-rose.vercel.app/" target="_blank" class="primary-cta-button">
            <span class="button-icon">🌐</span>
            <span class="button-text">立即體驗</span>
            <span class="button-arrow">→</span>
            <div class="button-particles"></div>
          </a>
          
          <button class="secondary-cta-button" @click="showProjectDetails">
            <span class="button-icon">📖</span>
            <span class="button-text">詳細資訊</span>
          </button>
        </div>
        
        <div class="cta-features">
          <div class="feature-badge">
            <span class="badge-icon">⚡</span>
            <span class="badge-text">即時載入</span>
          </div>
          <div class="feature-badge">
            <span class="badge-icon">🔒</span>
            <span class="badge-text">安全可靠</span>
          </div>
          <div class="feature-badge">
            <span class="badge-icon">📱</span>
            <span class="badge-text">跨平台支援</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 專案統計 -->
    <div class="project-stats animate-on-scroll">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">⏱️</div>
          <div class="stat-number" data-target="120">0</div>
          <div class="stat-label">開發時數</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">📄</div>
          <div class="stat-number" data-target="15">0</div>
          <div class="stat-label">頁面數量</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">🎨</div>
          <div class="stat-number" data-target="50">0</div>
          <div class="stat-label">動畫效果</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">📚</div>
          <div class="stat-number" data-target="20">0</div>
          <div class="stat-label">法條解析</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'

const particlesCanvas = ref(null)
const previewFrame = ref(null)

// 旋轉相關狀態
const isRotating = ref(false)
const rotationX = ref(-10)
const rotationY = ref(5)
const lastMouseX = ref(0)
const lastMouseY = ref(0)

// 粒子系統
let particles = []
let animationId = null

class Particle {
  constructor(canvas) {
    this.canvas = canvas
    this.reset()
    this.y = Math.random() * canvas.height
  }
  
  reset() {
    this.x = Math.random() * this.canvas.width
    this.y = -10
    this.speed = Math.random() * 2 + 0.5
    this.size = Math.random() * 3 + 1
    this.opacity = Math.random() * 0.5 + 0.2
  }
  
  update() {
    this.y += this.speed
    if (this.y > this.canvas.height + 10) {
      this.reset()
    }
  }
  
  draw(ctx) {
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }
}

const initParticles = () => {
  if (!particlesCanvas.value) return
  
  const canvas = particlesCanvas.value
  const ctx = canvas.getContext('2d')
  
  // 設置畫布大小
  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  
  // 創建粒子
  particles = []
  const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(canvas))
  }
  
  // 動畫循環
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    particles.forEach(particle => {
      particle.update()
      particle.draw(ctx)
    })
    
    animationId = requestAnimationFrame(animate)
  }
  
  animate()
}

// 數字計數動畫
const animateCounter = (element, target, duration = 2000) => {
  const start = 0
  const increment = target / (duration / 16)
  let current = start
  
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current)
  }, 16)
}

// 滾動動畫觀察器
const setupScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        
        // 特殊處理統計數字動畫
        if (entry.target.classList.contains('project-stats')) {
          const statNumbers = entry.target.querySelectorAll('.stat-number')
          statNumbers.forEach(statElement => {
            const target = parseInt(statElement.dataset.target)
            animateCounter(statElement, target)
          })
        }
        
        // 特殊處理技術進度條動畫
        if (entry.target.classList.contains('project-tech-stack')) {
          const progressBars = entry.target.querySelectorAll('.progress-bar')
          progressBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.style.transform = 'scaleX(1)'
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

// 卡片傾斜效果
const setupTiltEffect = () => {
  const tiltElements = document.querySelectorAll('[data-tilt]')
  
  tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10
      
      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    })
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    })
  })
}

// 專題詳情顯示
const showProjectDetails = () => {
  alert('這裡可以展示更多專題詳細資訊！')
}

// 預覽框架旋轉功能
const startRotation = (event) => {
  isRotating.value = true
  lastMouseX.value = event.clientX
  lastMouseY.value = event.clientY
  
  // 防止拖拽時選中文字
  event.preventDefault()
  document.body.style.userSelect = 'none'
}

const handleRotation = (event) => {
  if (!isRotating.value) return
  
  const deltaX = event.clientX - lastMouseX.value
  const deltaY = event.clientY - lastMouseY.value
  
  // 更新旋轉角度（增加敏感度）
  rotationY.value += deltaX * 0.5
  rotationX.value -= deltaY * 0.5
  
  // 限制X軸和Y軸旋轉範圍都在±60度之間
  rotationX.value = Math.max(-60, Math.min(60, rotationX.value))
  rotationY.value = Math.max(-60, Math.min(60, rotationY.value))
  
  // 應用變換
  if (previewFrame.value) {
    previewFrame.value.style.transform = `perspective(1000px) rotateX(${rotationX.value}deg) rotateY(${rotationY.value}deg)`
  }
  
  lastMouseX.value = event.clientX
  lastMouseY.value = event.clientY
}

const stopRotation = () => {
  isRotating.value = false
  document.body.style.userSelect = ''
}

// 重置旋轉角度
const resetRotation = () => {
  rotationX.value = -10
  rotationY.value = 5
  
  if (previewFrame.value) {
    previewFrame.value.style.transition = 'transform 0.5s ease'
    previewFrame.value.style.transform = `perspective(1000px) rotateX(${rotationX.value}deg) rotateY(${rotationY.value}deg)`
    
    // 重置後移除過渡效果
    setTimeout(() => {
      if (previewFrame.value) {
        previewFrame.value.style.transition = ''
      }
    }, 500)
  }
}

onMounted(async () => {
  await nextTick()
  
  // 初始化各種效果
  initParticles()
  setupScrollAnimations()
  setupTiltEffect()
  
  // 設置預覽框架初始旋轉
  if (previewFrame.value) {
    previewFrame.value.style.transform = `perspective(1000px) rotateX(${rotationX.value}deg) rotateY(${rotationY.value}deg)`
  }
  
  // 添加全局滑鼠事件監聽器
  const handleGlobalMouseMove = (event) => {
    handleRotation(event)
  }
  
  const handleGlobalMouseUp = () => {
    stopRotation()
  }
  
  document.addEventListener('mousemove', handleGlobalMouseMove)
  document.addEventListener('mouseup', handleGlobalMouseUp)
  
  // 清理函數
  const cleanup = () => {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
    document.removeEventListener('mousemove', handleGlobalMouseMove)
    document.removeEventListener('mouseup', handleGlobalMouseUp)
  }
  
  // 監聽頁面卸載
  window.addEventListener('beforeunload', cleanup)
})
</script>

<style scoped>
/* ===== 粒子背景效果 ===== */
.particles-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.particles-canvas {
  width: 100%;
  height: 100%;
  opacity: 0.3;
}

/* ===== Hero 區域樣式 ===== */
.project-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
}

.project-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.title-word {
  display: inline-block;
  opacity: 0;
  transform: translateY(50px);
  animation: titleReveal 0.8s ease forwards;
}

.title-word:nth-child(1) { animation-delay: 0.1s; }
.title-word:nth-child(2) { animation-delay: 0.2s; }
.title-word:nth-child(3) { animation-delay: 0.3s; }
.title-word:nth-child(4) { animation-delay: 0.4s; }

.glow-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
}

.title-emoji {
  font-size: 1.2em;
  animation: rocketLaunch 2s ease-in-out infinite;
}

.project-title-underline {
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  margin: 2rem auto;
  border-radius: 2px;
  transform: scaleX(0);
  animation: underlineGrow 1s ease forwards 0.6s;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  line-height: 1.6;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.8s;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  animation: bounce 2s infinite;
}

.scroll-arrow {
  font-size: 1.5rem;
  animation: float 2s ease-in-out infinite;
}

/* ===== 專題概覽區域 ===== */
.project-overview {
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
}

.overview-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-title-large {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.overview-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
}

.overview-stats {
  display: flex;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  display: block;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.project-preview {
  perspective: 1000px;
  position: relative;
}

.preview-hint {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(102, 126, 234, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid rgba(102, 126, 234, 0.3);
  backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  z-index: 10;
}

.preview-hint:hover {
  opacity: 1;
}

.preview-controls {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.reset-rotation-btn {
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.4);
  color: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  font-size: 0.85rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.reset-rotation-btn:hover {
  background: rgba(102, 126, 234, 0.3);
  border-color: rgba(102, 126, 234, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
}

.reset-rotation-btn:active {
  transform: translateY(0);
}

.hint-icon {
  animation: rotate360 3s linear infinite;
}

@keyframes rotate360 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .overview-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .preview-hint {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  
  .reset-rotation-btn {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }
  
  .preview-frame {
    transform: perspective(800px) rotateY(-5deg) rotateX(3deg);
  }
}

.preview-frame {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform: perspective(1000px) rotateY(-10deg) rotateX(5deg);
  transition: all 0.3s ease;
  cursor: grab;
  user-select: none;
}

.preview-frame:hover {
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
  border-color: rgba(102, 126, 234, 0.4);
}

.preview-frame:active {
  cursor: grabbing;
}

.frame-header {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.frame-dots {
  display: flex;
  gap: 0.5rem;
}

.frame-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
}

.frame-dots span:nth-child(1) { background: #ff5f56; }
.frame-dots span:nth-child(2) { background: #ffbd2e; }
.frame-dots span:nth-child(3) { background: #27ca3f; }

.frame-url {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
}

.frame-content {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-placeholder {
  text-align: center;
}

.preview-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.preview-text {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
}

/* ===== 特色卡片樣式 ===== */
.project-features {
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.highlight-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sparkle {
  animation: sparkle 2s ease-in-out infinite;
}

.features-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(102, 126, 234, 0.3);
}

.feature-card:hover::before {
  opacity: 1;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.project-card-icon {
  font-size: 2.5rem;
  transition: transform 0.3s ease;
}

.feature-card:hover .project-card-icon {
  transform: scale(1.2) rotate(10deg);
}

.card-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

.card-content p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.card-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.feature-card:hover .card-glow {
  opacity: 1;
}

/* ===== 亮點展示樣式 ===== */
.project-highlights {
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
}

.highlights-showcase {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.highlight-item {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.highlight-item::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  transform: rotate(45deg);
  transition: transform 0.6s ease;
  opacity: 0;
}

.highlight-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.08);
}

.highlight-item:hover::before {
  opacity: 1;
  transform: rotate(45deg) translate(100%, 100%);
}

.highlight-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.highlight-icon {
  font-size: 3rem;
  transition: transform 0.3s ease;
}

.icon-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ripple 2s infinite;
}

.highlight-item h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.highlight-item p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.highlight-details {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.detail-tag {
  background: rgba(102, 126, 234, 0.15);
  color: #667eea;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* ===== 技術棧樣式 ===== */
.project-tech-stack {
  padding: 6rem 2rem;
  position: relative;
  z-index: 1;
}

.tech-stack-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
}

.tech-category {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(5px);
}

.tech-logo {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  font-size: 0.9rem;
}

.tech-name {
  font-weight: 500;
  color: white;
  flex: 1;
}

.tech-progress {
  width: 100px;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 3px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1s ease;
}

/* ===== CTA 區域樣式 ===== */
.project-cta {
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.primary-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.primary-cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.primary-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
}

.primary-cta-button:hover::before {
  left: 100%;
}

.secondary-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.secondary-cta-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.cta-features {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.feature-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

/* ===== 專案統計樣式 ===== */
.project-stats {
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
}

.stats-grid {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

/* ===== 動畫關鍵幀 ===== */
@keyframes titleReveal {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes rocketLaunch {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(5deg); }
  75% { transform: translateY(-5px) rotate(-5deg); }
}

@keyframes underlineGrow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
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

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40%, 43% { transform: translateX(-50%) translateY(-10px); }
  70% { transform: translateX(-50%) translateY(-5px); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes sparkle {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
  50% { transform: scale(1.2) rotate(180deg); opacity: 0.7; }
}

@keyframes ripple {
  0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
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

.animate-fade-in {
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

/* ===== 響應式設計 ===== */
@media (max-width: 1024px) {
  .overview-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .tech-stack-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .project-title {
    font-size: clamp(2rem, 6vw, 3rem);
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .overview-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .highlights-showcase {
    grid-template-columns: 1fr;
  }
  
  .tech-category {
    min-width: auto;
    padding: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .project-hero {
    min-height: 80vh;
  }
  
  .section-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .overview-stats {
    align-items: center;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
  
  .highlight-item {
    padding: 1.5rem;
  }
}
</style>
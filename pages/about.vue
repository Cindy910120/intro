<template>
  <div class="container">
    <!-- 第一個區域：自我介紹 -->
    <section class="section intro-section">
      <h1>自我介紹</h1>
      
      <div class="profile-container">
        <div class="profile-text">
          <h2>林芊蓉</h2>
          
          <div class="info-group">
            <h3>學校</h3>
            <p>中原大學</p>
          </div>
          
          <div class="info-group">
            <h3>學習內容</h3>
            <p>主修電機工程，專注於嵌入式系統開發與網頁前端技術。</p>
            <p>熟悉 Vue.js、Nuxt.js、C++、Python 等程式語言，對於機器人控制與 PX4 飛控系統有相關研究經驗。</p>
          </div>
          
          <div class="info-group">
            <h3>參加過的活動</h3>
            <ul>
              <li>2024 </li>
              <li>2024 </li>
              <li>2023 </li>
              <li>2023 </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 新增：專業技能展示區 -->
    <section class="section skills-section">
      <h1>專業技能</h1>
      
      <div class="skills-container">
        <div class="skill-category">
          <h3>前端開發</h3>
          <div class="skill-items">
            <!-- 前端技能內容 (待填寫) -->
            <div class="skill-item">
              <div class="skill-name">HTML/CSS</div>
              <div class="skill-bar">
                <div class="skill-level" style="width: 90%"></div>
              </div>
            </div>
            <!-- 更多前端技能 (待填寫) -->
          </div>
        </div>
        
        <div class="skill-category">
          <h3>嵌入式系統</h3>
          <div class="skill-items">
            <!-- 嵌入式系統技能內容 (待填寫) -->
          </div>
        </div>
        
        <div class="skill-category">
          <h3>程式語言</h3>
          <div class="skill-items">
            <!-- 程式語言技能內容 (待填寫) -->
          </div>
        </div>
      </div>
    </section>

    <!-- 新增：專案經歷 -->
    <section class="section projects-section">
      <h1>專案經歷</h1>
      
      <div class="projects-container">
        <!-- 專案1 (待填寫) -->
        <div class="project-item">
          <div class="project-title">
            <h3><!-- 專案名稱 (待填寫) --></h3>
            <span class="project-date"><!-- 日期 (待填寫) --></span>
          </div>
          <p class="project-description">
            <!-- 專案描述 (待填寫) -->
          </p>
          <div class="project-tech">
            <!-- 使用技術標籤 (待填寫) -->
          </div>
        </div>
        
        <!-- 專案2 (待填寫) -->
        <div class="project-item">
          <!-- 專案內容 (待填寫) -->
        </div>
        
        <!-- 專案3 (待填寫) -->
        <div class="project-item">
          <!-- 專案內容 (待填寫) -->
        </div>
      </div>
    </section>

    <!-- 新增：教育背景時間線 -->
    <section class="section education-section">
      <h1>教育背景</h1>
      
      <div class="timeline">
        <!-- 教育經歷1 (待填寫) -->
        <div class="timeline-item">
          <div class="timeline-date">
            <!-- 日期 (待填寫) -->
          </div>
          <div class="timeline-content">
            <h3><!-- 學校/學位 (待填寫) --></h3>
            <p><!-- 相關描述 (待填寫) --></p>
            <ul>
              <!-- 相關課程或成就 (待填寫) -->
            </ul>
          </div>
        </div>
        
        <!-- 教育經歷2 (待填寫) -->
        <div class="timeline-item">
          <!-- 內容 (待填寫) -->
        </div>
      </div>
    </section>

    <!-- 新增：未來目標與願景 -->
    <section class="section goals-section">
      <h1>未來目標</h1>
      
      <div class="goals-container">
        <!-- 目標與願景內容 (待填寫) -->
      </div>
    </section>

    <!-- 新增：證照與技能認證 -->
    <section class="section certificates-section">
      <h1>證照與認證</h1>
      
      <div class="certificates-container">
        <!-- 證照與認證內容 (待填寫) -->
      </div>
    </section>

    <!-- 第二個區域：個人興趣 -->
    <section class="section interests-section">
      <h1>個人興趣</h1>
      
      <div class="interests-container">
        <!-- 書法 -->
        <div class="interest-item">
          <div class="interest-image">
            <div class="slideshow-container">
              <div v-for="(image, index) in calligraphyImages" :key="'cal-'+index" class="slide" :class="{ active: currentIndexes.calligraphy === index }">
                <img :src="image" :alt="'書法作品 ' + (index + 1)" 
                     :class="getImageRotationClass('calligraphy', index)"
                     @click="openLightbox('calligraphy', index)" />
              </div>
              <div class="slide-counter">{{ currentIndexes.calligraphy + 1 }}/{{ calligraphyImages.length }}</div>
              <!-- 添加左右切換按鈕 -->
              <button class="slide-nav prev" @click="prevSlide('calligraphy')">&lt;</button>
              <button class="slide-nav next" @click="nextSlide('calligraphy')">&gt;</button>
            </div>
          </div>
          <div class="interest-description">
            <h3>書法</h3>
            <p>從小學習書法已有十年，擅長楷書。曾在書法比賽中獲獎，也會在閒暇時間練習書寫，筆墨之間的寧靜時光。</p>
          </div>
        </div>
        
        <!-- 爵士鼓 -->
        <div class="interest-item">
          <div class="interest-image">
            <div class="slideshow-container">
              <div v-for="(image, index) in drumImages" :key="'drum-'+index" class="slide" :class="{ active: currentIndexes.drum === index }">
                <img :src="image" :alt="'爵士鼓演奏 ' + (index + 1)" 
                     :class="getImageRotationClass('drum', index)" 
                     @click="openLightbox('drum', index)" />
              </div>
              <div class="slide-counter">{{ currentIndexes.drum + 1 }}/{{ drumImages.length }}</div>
              <button class="slide-nav prev" @click="prevSlide('drum')">&lt;</button>
              <button class="slide-nav next" @click="nextSlide('drum')">&gt;</button>
            </div>
          </div>
          <div class="interest-description">
            <h3>爵士鼓</h3>
            <p>大學開始學習爵士鼓，現已有三年經驗。喜歡透過節奏表達自我，釋放壓力。</p>
            <p>曾參與校內樂團表演，擅長演奏流行音樂與爵士樂風格的曲目。</p>
          </div>
        </div>

        <!-- 繪畫 -->
        <div class="interest-item">
          <div class="interest-image">
            <div class="slideshow-container">
              <div v-for="(image, index) in drawImages" :key="'draw-'+index" class="slide" :class="{ active: currentIndexes.draw === index }">
                <img :src="image" :alt="'繪畫作品 ' + (index + 1)" 
                     :class="getImageRotationClass('draw', index)" 
                     @click="openLightbox('draw', index)" />
              </div>
              <div class="slide-counter">{{ currentIndexes.draw + 1 }}/{{ drawImages.length }}</div>
              <button class="slide-nav prev" @click="prevSlide('draw')">&lt;</button>
              <button class="slide-nav next" @click="nextSlide('draw')">&gt;</button>
            </div>
          </div>
          <div class="interest-description">
            <h3>繪畫</h3>
            <p>喜歡透過繪畫表達創意與想法，擅長素描和水彩畫。</p>
            <p>閒暇時會畫一些生活中的風景和物件，記錄生活中的美好瞬間。</p>
          </div>
        </div>

        <!-- 拼圖 -->
        <div class="interest-item">
          <div class="interest-image">
            <div class="slideshow-container">
              <div v-for="(image, index) in puzzleImages" :key="'puzzle-'+index" class="slide" :class="{ active: currentIndexes.puzzle === index }">
                <img :src="image" :alt="'拼圖作品 ' + (index + 1)" 
                     :class="getImageRotationClass('puzzle', index)" 
                     @click="openLightbox('puzzle', index)" />
              </div>
              <div class="slide-counter">{{ currentIndexes.puzzle + 1 }}/{{ puzzleImages.length }}</div>
              <button class="slide-nav prev" @click="prevSlide('puzzle')">&lt;</button>
              <button class="slide-nav next" @click="nextSlide('puzzle')">&gt;</button>
            </div>
          </div>
          <div class="interest-description">
            <h3>拼圖</h3>
            <p>享受拼圖帶來的挑戰與完成時的成就感。</p>
            <p>常常選擇千片以上的複雜拼圖，透過耐心和專注力一步步完成。</p>
          </div>
        </div>

        <!-- 玄學研究 -->
        <div class="interest-item">
          <div class="interest-image">
            <div class="slideshow-container">
              <div v-for="(image, index) in physicsImages" :key="'physics-'+index" class="slide" :class="{ active: currentIndexes.physics === index }">
                <img :src="image" :alt="'玄學研究 ' + (index + 1)" 
                     :class="getImageRotationClass('physics', index)" 
                     @click="openLightbox('physics', index)" />
              </div>
              <div class="slide-counter">{{ currentIndexes.physics + 1 }}/{{ physicsImages.length }}</div>
              <button class="slide-nav prev" @click="prevSlide('physics')">&lt;</button>
              <button class="slide-nav next" @click="nextSlide('physics')">&gt;</button>
            </div>
          </div>
          <div class="interest-description">
            <h3>玄學研究</h3>
            <p>最近投入研究玄學相關的課題，探索自然界的奧秘。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 圖片放大檢視元件 -->
    <div v-if="lightbox.show" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <img :src="lightbox.image" :alt="lightbox.alt" :class="getImageRotationClass(lightbox.type, lightbox.index)" />
        <button class="lightbox-close" @click="closeLightbox">✕</button>
        <div class="lightbox-nav">
          <button class="lightbox-prev" @click.stop="lightboxPrev">&lt;</button>
          <div class="lightbox-counter">{{ lightbox.index + 1 }}/{{ getImagesArray(lightbox.type).length }}</div>
          <button class="lightbox-next" @click.stop="lightboxNext">&gt;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 定義各類型圖片路徑
const calligraphyImages = [
  '/images/interests/calligraphy/IMG_20250513_105817.jpg',
  '/images/interests/calligraphy/IMG_20250513_105821.jpg',
  '/images/interests/calligraphy/IMG_20250528_171833.jpg',
  '/images/interests/calligraphy/IMG_20250528_171841.jpg',
  '/images/interests/calligraphy/IMG_20250528_171851.jpg',
]

const drumImages = [
  '/images/interests/drum/IMG_20220219_141637.jpg',
  '/images/interests/drum/IMG_20220223_191419.jpg',
]

const drawImages = [
  '/images/interests/draw/IMG_20241002_195745.jpg',
  '/images/interests/draw/IMG_20241002_195803.jpg',
  '/images/interests/draw/IMG_20241002_200011.jpg',
  '/images/interests/draw/IMG_20241002_200044.jpg',
]

const puzzleImages = [
  '/images/interests/puzzle/IMG_20200807_192038.jpg',
  '/images/interests/puzzle/IMG_20220501_204514.jpg',
  '/images/interests/puzzle/IMG_20220523_160018.jpg',
  '/images/interests/puzzle/IMG_20220523_211711.jpg',
  '/images/interests/puzzle/IMG_20240327_084401.jpg',
]

const physicsImages = [
  '/images/interests/physics/img-1950542225_1745635199325.jpg',
  '/images/interests/physics/img1657701570_1745568794007.jpeg',
]

// 儲存每個類別當前顯示的圖片索引
const currentIndexes = ref({
  calligraphy: 0,
  drum: 0,
  draw: 0,
  puzzle: 0,
  physics: 0
})

// 圖片放大檢視狀態
const lightbox = ref({
  show: false,
  image: '',
  alt: '',
  type: '',
  index: 0
})

// 獲取指定類型的圖片陣列
const getImagesArray = (type) => {
  const imageArrays = {
    calligraphy: calligraphyImages,
    drum: drumImages,
    draw: drawImages,
    puzzle: puzzleImages,
    physics: physicsImages
  }
  return imageArrays[type] || []
}

// 開啟圖片放大檢視
const openLightbox = (type, index) => {
  // 在開啟lightbox前暫停所有輪播
  pauseAllSlideshows()
  
  const images = getImagesArray(type)
  if (images && images.length > 0) {
    lightbox.value = {
      show: true,
      image: images[index],
      alt: `${type} image ${index + 1}`,
      type: type,
      index: index
    }
    
    // 在lightbox模式下關閉頁面滾動
    document.body.style.overflow = 'hidden'
  }
}

// 關閉圖片放大檢視
const closeLightbox = () => {
  lightbox.value.show = false
  document.body.style.overflow = ''
  // 關閉lightbox後重新開始所有輪播
  startSlideshow()
}

// lightbox中顯示上一張圖片
const lightboxPrev = () => {
  const images = getImagesArray(lightbox.value.type)
  if (images && images.length > 0) {
    lightbox.value.index = (lightbox.value.index - 1 + images.length) % images.length
    lightbox.value.image = images[lightbox.value.index]
    lightbox.value.alt = `${lightbox.value.type} image ${lightbox.value.index + 1}`
  }
}

// lightbox中顯示下一張圖片
const lightboxNext = () => {
  const images = getImagesArray(lightbox.value.type)
  if (images && images.length > 0) {
    lightbox.value.index = (lightbox.value.index + 1) % images.length
    lightbox.value.image = images[lightbox.value.index]
    lightbox.value.alt = `${lightbox.value.type} image ${lightbox.value.index + 1}`
  }
}

// 顯示上一張輪播圖片
const prevSlide = (type) => {
  const images = getImagesArray(type)
  if (images && images.length > 0) {
    currentIndexes.value[type] = (currentIndexes.value[type] - 1 + images.length) % images.length
  }
}

// 顯示下一張輪播圖片
const nextSlide = (type) => {
  const images = getImagesArray(type)
  if (images && images.length > 0) {
    currentIndexes.value[type] = (currentIndexes.value[type] + 1) % images.length
  }
}

// 定義一個間隔時間（毫秒）
const intervalTime = 3000
let slideshowIntervals = {}

// 輪播函數
const startSlideshow = () => {
  // 為每個類別建立獨立的輪播計時器
  slideshowIntervals.calligraphy = setInterval(() => {
    if (!lightbox.value.show) { // 只有在lightbox不顯示時才自動輪播
      currentIndexes.value.calligraphy = (currentIndexes.value.calligraphy + 1) % calligraphyImages.length
    }
  }, intervalTime)
  
  slideshowIntervals.drum = setInterval(() => {
    if (!lightbox.value.show) {
      currentIndexes.value.drum = (currentIndexes.value.drum + 1) % drumImages.length
    }
  }, intervalTime)
  
  slideshowIntervals.draw = setInterval(() => {
    if (!lightbox.value.show) {
      currentIndexes.value.draw = (currentIndexes.value.draw + 1) % drawImages.length
    }
  }, intervalTime)
  
  slideshowIntervals.puzzle = setInterval(() => {
    if (!lightbox.value.show) {
      currentIndexes.value.puzzle = (currentIndexes.value.puzzle + 1) % puzzleImages.length
    }
  }, intervalTime)
  
  slideshowIntervals.physics = setInterval(() => {
    if (!lightbox.value.show) {
      currentIndexes.value.physics = (currentIndexes.value.physics + 1) % physicsImages.length
    }
  }, intervalTime)
}

// 暫停所有輪播
const pauseAllSlideshows = () => {
  Object.values(slideshowIntervals).forEach(interval => {
    clearInterval(interval)
  })
}

// 根據圖片類型和索引返回適當的旋轉類別
const getImageRotationClass = (type, index) => {
  // 預設所有圖片不需要旋轉
  const rotations = {
    // 書法圖片的旋轉
    calligraphy: {
      0: 'rotate-90', // 第一張圖片需要旋轉90度
      2: 'rotate-270', // 第三張圖片需要旋轉270度
      4: 'rotate-90', // 第五張圖片需要旋轉90度
    },
    // 爵士鼓圖片的旋轉
    drum: {
      1: 'rotate-90', // 第二張圖片需要旋轉90度
    },
    // 繪畫圖片的旋轉
    draw: {
      2: 'rotate-270', // 第三張圖片需要旋轉270度
    },
    // 拼圖圖片的旋轉
    puzzle: {
      0: 'rotate-90', // 第一張圖片需要旋轉90度
      3: 'rotate-270', // 第四張圖片需要旋轉270度
    },
    // 物理研究圖片的旋轉
    physics: {} // 物理研究圖片不需要旋轉
  }
  
  // 檢查是否有特定圖片需要旋轉
  if (rotations[type] && rotations[type][index]) {
    return `${rotations[type][index]} rotated`
  }
  
  return '' // 沒有指定旋轉的圖片返回空字符串
}

// 監聽ESC鍵關閉放大檢視
const handleKeyDown = (e) => {
  if (e.key === 'Escape' && lightbox.value.show) {
    closeLightbox()
  } else if (e.key === 'ArrowLeft' && lightbox.value.show) {
    lightboxPrev()
  } else if (e.key === 'ArrowRight' && lightbox.value.show) {
    lightboxNext()
  }
}

// 在元件掛載時啟動輪播和鍵盤事件監聽
onMounted(() => {
  startSlideshow()
  window.addEventListener('keydown', handleKeyDown)
})

// 在元件卸載前清除計時器和事件監聽器
onBeforeUnmount(() => {
  pauseAllSlideshows()
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.section {
  margin-bottom: 4rem;
  padding-bottom: 2rem;
}

.section h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
  font-size: 2rem;
}

.profile-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-text h2 {
  color: #41b883;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.info-group {
  margin-bottom: 1.5rem;
}

.info-group h3 {
  color: #34495e;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.info-group p {
  margin: 0.5rem 0;
  line-height: 1.6;
  font-size: 1.1rem;
}

.info-group ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.info-group li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.interests-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.interest-item {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.interest-image {
  flex: 0 0 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.slideshow-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide.active {
  opacity: 1;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.slide-counter {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.interest-description {
  flex: 1;
}

.interest-description h3 {
  color: #41b883;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.interest-description p {
  margin: 0.5rem 0;
  line-height: 1.6;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .interest-item {
    flex-direction: column;
    text-align: center;
  }
  
  .interest-image {
    margin: 0 auto;
  }
}

.rotate-90, .rotate-270 {
  width: auto !important;
  height: auto !important;
  max-height: 300px;
  max-width: 300px;
}

.rotate-90 {
  transform: rotate(90deg);
}

.rotate-180 {
  transform: rotate(180deg);
}

.rotate-270 {
  transform: rotate(270deg);
}

/* 確保旋轉圖片的容器適應旋轉內容 */
.slide img.rotated {
  object-fit: contain; /* 確保旋轉後圖片完整顯示 */
  max-height: 100%;
  max-width: 100%;
}

/* 輪播控制按鈕 */
.slide-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  opacity: 0;
  z-index: 10;
}

.slideshow-container:hover .slide-nav {
  opacity: 0.8;
}

.slide-nav:hover {
  background: rgba(0, 0, 0, 0.8);
}

.slide-nav.prev {
  left: 10px;
}

.slide-nav.next {
  right: 10px;
}

/* 圖片放大檢視樣式 */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lightbox-content img {
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: transparent;
  color: white;
  border: none;
  font-size: 36px;
  cursor: pointer;
  padding: 10px;
}

.lightbox-nav {
  position: absolute;
  bottom: -60px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.lightbox-counter {
  color: white;
  font-size: 18px;
}

.lightbox-prev,
.lightbox-next {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.lightbox-prev:hover,
.lightbox-next:hover {
  background: rgba(255, 255, 255, 0.4);
}

/* 使滑鼠指針顯示為可點擊 */
.slide img {
  cursor: pointer;
}

/* 調整放大檢視中的旋轉圖片樣式 */
.lightbox-content .rotate-90,
.lightbox-content .rotate-270 {
  max-height: 80vh;
  max-width: 80vw;
}

/* 新增的樣式 */
/* 專業技能區塊樣式 */
.skills-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-category {
  margin-bottom: 1.5rem;
}

.skill-category h3 {
  color: #34495e;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-name {
  flex: 0 0 120px;
  font-weight: 600;
}

.skill-bar {
  flex: 1;
  height: 10px;
  background-color: #eee;
  border-radius: 5px;
  overflow: hidden;
}

.skill-level {
  height: 100%;
  background: linear-gradient(90deg, #41b883, #35495e);
  border-radius: 5px;
}

/* 專案經歷樣式 */
.projects-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-item {
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.project-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-date {
  color: #666;
  font-size: 0.9rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  background-color: #e8f5e9;
  color: #388e3c;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.9rem;
}

/* 教育背景時間線樣式 */
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: #41b883;
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2.5rem;
  top: 0.5rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
  border: 4px solid #41b883;
}

.timeline-date {
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

/* 其他區塊樣式 */
.goals-container,
.certificates-container,
.contact-container {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  background-color: #41b883;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: background-color 0.3s;
}

.social-icon:hover {
  background-color: #34495e;
}

/* 響應式調整 */
@media (max-width: 768px) {
  .project-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .skill-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .skill-name {
    margin-bottom: 0.5rem;
  }
  
  .skill-bar {
    width: 100%;
  }
}
</style>
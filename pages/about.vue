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
            <p>國立臺灣大學</p>
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

    <!-- 第二個區域：個人興趣 -->
    <section class="section interests-section">
      <h1>個人興趣</h1>
      
      <div class="interests-container">
        <!-- 書法 -->
        <div class="interest-item">
          <div class="interest-image">
            <div class="slideshow-container">
              <div v-for="(image, index) in calligraphyImages" :key="'cal-'+index" class="slide" :class="{ active: currentIndexes.calligraphy === index }">
                <img :src="image" alt="書法作品" />
              </div>
              <div class="slide-counter">{{ currentIndexes.calligraphy + 1 }}/{{ calligraphyImages.length }}</div>
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
                <img :src="image" alt="爵士鼓演奏" />
              </div>
              <div class="slide-counter">{{ currentIndexes.drum + 1 }}/{{ drumImages.length }}</div>
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
                <img :src="image" alt="繪畫作品" />
              </div>
              <div class="slide-counter">{{ currentIndexes.draw + 1 }}/{{ drawImages.length }}</div>
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
                <img :src="image" alt="拼圖作品" />
              </div>
              <div class="slide-counter">{{ currentIndexes.puzzle + 1 }}/{{ puzzleImages.length }}</div>
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
                <img :src="image" alt="玄學研究" />
              </div>
              <div class="slide-counter">{{ currentIndexes.physics + 1 }}/{{ physicsImages.length }}</div>
            </div>
          </div>
          <div class="interest-description">
            <h3>玄學研究</h3>
            <p>最近投入研究玄學相關的課題，探索自然界的奧秘。</p>
          </div>
        </div>
      </div>
    </section>
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

// 定義一個間隔時間（毫秒）
const intervalTime = 3000
let slideshowIntervals = {}

// 輪播函數
const startSlideshow = () => {
  // 為每個類別建立獨立的輪播計時器
  slideshowIntervals.calligraphy = setInterval(() => {
    currentIndexes.value.calligraphy = (currentIndexes.value.calligraphy + 1) % calligraphyImages.length
  }, intervalTime)
  
  slideshowIntervals.drum = setInterval(() => {
    currentIndexes.value.drum = (currentIndexes.value.drum + 1) % drumImages.length
  }, intervalTime)
  
  slideshowIntervals.draw = setInterval(() => {
    currentIndexes.value.draw = (currentIndexes.value.draw + 1) % drawImages.length
  }, intervalTime)
  
  slideshowIntervals.puzzle = setInterval(() => {
    currentIndexes.value.puzzle = (currentIndexes.value.puzzle + 1) % puzzleImages.length
  }, intervalTime)
  
  slideshowIntervals.physics = setInterval(() => {
    currentIndexes.value.physics = (currentIndexes.value.physics + 1) % physicsImages.length
  }, intervalTime)
}

// 在元件掛載時啟動輪播
onMounted(() => {
  startSlideshow()
})

// 在元件卸載前清除計時器
onBeforeUnmount(() => {
  Object.values(slideshowIntervals).forEach(interval => {
    clearInterval(interval)
  })
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
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
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
</style>
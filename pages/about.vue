<template>
  <div class="container">
    <!-- 彈跳視窗觸發按鈕 - 固定在右側 -->
    <div class="popup-trigger-container">
      <button class="popup-trigger-btn" @click="openPopup" title="徵男友資訊">
        <span class="trigger-icon">💕</span>
        <span class="trigger-text">幫徵男友</span>
      </button>
    </div>

    <!-- 第一個區域：自我介紹 -->
    <section class="section intro-section">
      <h1>自我介紹</h1>
      
      <div class="profile-container">
        <div class="profile-text">
          <h2>姓名 : 林芊蓉</h2>
          
          <div class="info-group">
            <h3>學校</h3>
            <p>大學 : 中原大學電機工程系 2020~2024</p>
            <p>碩士 : 中原大學電機工程系 (就學中)2024~</p>
          </div>
            <div class="info-group">
            <h3>學習內容</h3>
            <p>主修電機工程，大學曾修習企管、財金、國貿...等科系的課程。</p>
            <p>熟悉 Vue.js、Nuxt.js、C++、Python 、MATLAB等程式語言，對於 PX4 飛控系統有相關研究經驗。</p>
            <p>研討會論文：<a href="https://ieeexplore.ieee.org/document/10773309" target="_blank">Quaternion-Based Attitude Tracking Control Design for UAVs</a></p>
          </div>
            <div class="info-group">
            <h3 class="traits-title">個人特質</h3>
            <div class="personality-traits">
              <div class="trait-item trait-responsible" data-aos="fade-up" data-aos-delay="100">
                <div class="trait-icon">🎯</div>
                <div class="trait-content">
                  <h4>認真負責</h4>
                  <p>我會在專題實驗中尋求問題並致力於解決它們，確保實驗進行順利且結果可靠，我會盡力完成每一項任務，確保學習的有效性和成果的品質。</p>
                </div>
                <div class="trait-decoration"></div>
              </div>
              
              <div class="trait-item trait-learning" data-aos="fade-up" data-aos-delay="200">
                <div class="trait-icon">📚</div>
                <div class="trait-content">
                  <h4>樂於學習</h4>
                  <p>我總是樂於探究新的知識和技能，並且願意踏入時間和精力去學習。不僅在本科系的課程中，我也願意跨領域地學習，例如參與數位音樂名師專題、銀行實務管理、企業危機等課程，這些不同領域的學習經歷讓我能夠應用自己的視野，並且提供了更多的思考角度和解決問題的方法。</p>
                </div>
                <div class="trait-decoration"></div>
              </div>
              
              <div class="trait-item trait-active" data-aos="fade-up" data-aos-delay="300">
                <div class="trait-icon">⚡</div>
                <div class="trait-content">
                  <h4>做事積極</h4>
                  <p>我對待工作和學習都非常積極主動，我會主動承擔責任，積極提出問題和解決方案，並且樂於承擔責任。</p>
                </div>
                <div class="trait-decoration"></div>
              </div>
              
              <div class="trait-item trait-communication" data-aos="fade-up" data-aos-delay="400">
                <div class="trait-icon">🤝</div>
                <div class="trait-content">
                  <h4>溝通合作</h4>
                  <p>長期參加卡內基課程，已有兩張學員、三張學長的證書，能好好運用在卡內基所學到的能力與人達成倆好的合作與溝通。</p>
                </div>
                <div class="trait-decoration"></div>
              </div>
              
              <div class="trait-item trait-analysis" data-aos="fade-up" data-aos-delay="500">
                <div class="trait-icon">🔍</div>
                <div class="trait-content">
                  <h4>資訊處理</h4>
                  <p>我擅長蒐集各種資訊並加以分析，以便更好地理解問題並找到解決方案。</p>
                </div>
                <div class="trait-decoration"></div>
              </div>
            </div>
          </div>

          <div class="info-group">
            <h3>參加過的活動</h3><!-- 活動圖片展示 -->
            <div class="activities-gallery">
              <div class="activity-item">
                <div class="interest-image">
                  <div class="slideshow-container">
                    <div v-for="(image, index) in activityImages" :key="'activity-'+index" class="slide" :class="{ active: currentIndexes.activities === index }">
                      <img :src="image.src" :alt="image.alt" 
                           @click="openLightbox('activities', index)" />
                    </div>
                    <div class="slide-counter">{{ currentIndexes.activities + 1 }}/{{ activityImages.length }}</div>
                    <button class="slide-nav prev" @click="prevSlide('activities')">&lt;</button>
                    <button class="slide-nav next" @click="nextSlide('activities')">&gt;</button>
                  </div>
                </div>
                <div class="activity-description">
                  <h4>{{ activityImages[currentIndexes.activities]?.title }}</h4>
                  <p>{{ activityImages[currentIndexes.activities]?.description }}</p>
                </div>
              </div>
            </div>
            
            <ul>
              <li>2024/11 CACS研討會</li>
              <li>112-1學期 修習「資訊科技與輔具應用」運用自己的所學參與校外的服務學習</li>
              <li>112/7/30 ~ 112/8/5 參與TDU International Workshop</li>
              <li>111-2學期 參加綠基會活動</li>
              <li>2021/8 參加卡內基(帶領大學部)學長結業第三次</li>
            </ul>
          </div>
        </div>
      </div>    </section>    <!-- 新增：專案經歷 -->
    <section class="section projects-section">
      <h1>專題經歷</h1>
      <div class="projects-container">       
        <div class="project-item">
          <div class="project-title">
            <h3>資訊科技與社會關懷期末報告</h3>
            <span class="project-date">專題</span>
          </div>
          <div class="project-team">
            <p><strong>指導老師：</strong>王佳盈</p>
            <p><strong>成員：</strong>林芊蓉、王語婕、林敬玲</p>
          </div>
          <p class="project-description">
            首次踏足寶貝中心時，在廚房實作看到了一些可以改進的地方。我們發現在製作飲料的過程中，同學們加入冰塊時，無法變通磅秤讀數，堅持要剛好符合規定的重量，又或者有些同學無法判讀數字，造成作業上的不便。
        　　為了解決這個問題，我們構想製作一個結合燈號的磅秤，讓他們可以更輕鬆的工作，也不需讓機構的老師時刻監督不會看數字的同學。
        　　我們以3D列印技術製作磅秤外殼，結合Arduino esp32及手機操作磅秤，使用者可以輕鬆更改設定，不需更改程式。
            磅秤基本上延續去年的設計，保留主結構及LCD螢幕顯示方式，板子則由Arduino UNO改用esp32，讓使用者使用手機的藍芽功能連接到esp32，更直觀的直接輸入所需重量及誤差值，不需使用去年的旋鈕方式更改重量設定，
　　        我們也重新更改了磅秤的外殼設計，將磅秤體積縮小，更加方便使用與攜帶，也將開蓋設計更改，避免了原版設計的外殼會割傷手的可能。
          </p>
          <div class="project-tech">
           <span class="tech-tag">服務學習</span>
            <span class="tech-tag">Arduino</span>
            <span class="tech-tag">產品設計</span>
          </div>
          <div class="project-documents">
            <h4>相關文件：</h4>
            <div class="document-links">
              <a href="/documents/資訊科技與社會關懷期末報告.pdf" target="_blank" class="document-link">
                <span class="document-icon">📊</span>
                專題簡報 (PDF)
              </a>
            </div>
          </div>
        </div>
        <!-- 畢業專題：四軸無人機軌跡追蹤與飛行控制設計 -->
        <div class="project-item">
          <div class="project-title">
            <h3>四軸無人機軌跡追蹤與飛行控制設計</h3>
            <span class="project-date">大學畢業專題</span>
          </div>
          <div class="project-team">
            <p><strong>指導老師：</strong>游仁德</p>
            <p><strong>成員：</strong>林芊蓉</p>
          </div>
          <p class="project-description">
            隨著科技進步，無人機技術成為引人注目的發展領域。本研究的動機在於深入了解無人
            機的基本運作內容，探討其在不同行業的應用潛力。首先，理解無人機的基本原理有助於深
            入了解其飛行能力、操控性以及在各種環境中的適應性。其次，研究無人機在不同行業中的
            應用案例有助於揭示其在解決現實問題、提高效率和降低成本方面的實際效益。同時，隨著
            人工智慧算法的發展，無人機在自主性和智能性方面的應用成為研究的重要方向。 
            本研究的目的在於深入了解無人機的運動方式，透過運動方程式建模實現穩定的飛行狀
            態，並在仿真平台上模擬數據。研究將聚焦於內迴路和外迴路的控制系統，內迴路控制飛行
            器的姿態，外迴路負責整體運動方程。已有的研究成果和算法將被借鑑，特別是基於特殊正
            交群SO(3)的姿態表示。此外，研究還將關注無人機的編程和開發，探討如何利用PX4仿真
            平台實現無人機的自動化控制和任務執行，進一步推動該技術的發展。
          </p>          <div class="project-tech">
            <span class="tech-tag">PX4飛控系統</span>
            <span class="tech-tag">MATLAB/Simulink</span>
            <span class="tech-tag">C++</span>
            <span class="tech-tag">控制理論</span>
            <span class="tech-tag">無人機技術</span>
          </div>
          <div class="project-documents">
            <h4>相關文件：</h4>
            <div class="document-links">
              <a href="/documents/四軸無人機專題論文.pdf" target="_blank" class="document-link">
                <span class="document-icon">📄</span>
                專題論文 (PDF)
              </a>
              <a href="/documents/四軸無人機簡報.pdf" target="_blank" class="document-link">
                <span class="document-icon">📊</span>
                專題海報 (PDF)
              </a>
            </div>
          </div>
        </div>
        
        <!-- 專題：電腦架 -->
        <div class="project-item">
          <div class="project-title">
            <h3>電腦架設計專題</h3>
            <span class="project-date">專題作品</span>
          </div>
          <div class="project-team">
            <p><strong>指導老師：</strong>廖裕評 </p>
            <p><strong>成員：</strong>林芊蓉、黃芷宸</p>
          </div>
          <p class="project-description">
            現今長期使用電腦，已經成為人們生活的一部分，人們選擇電腦架主要為三個原因，分
            別為增加筆記型電腦散熱空間、增加桌面利用空間與減少姿勢不良困擾，先來說第一點，長
            期使用電腦，會使得電腦溫度升高，如果沒有適當的散熱方式，當CPU 溫度太高，將會觸
            發降低效能以避免損壞處理器的機制，使用電腦架能始的電腦更容易散熱。再來，由於使用
            了電腦架，桌子的使用空間會比把電腦放在桌上使用時的空間大，我們可以更有效的運用桌
            子去做其他事情。最後，長時間坐在電腦桌前用筆記型電腦工作，肩頸會不自覺的就開始痠
            痛，其實是因為螢幕高度與正常平視的角度不同，在使用筆記型電腦時，脖子都會有稍微需
            要低下來的動作，長期下來便導致肩頸方面的困擾。因此有一個適合自己且方便的電腦架是
            很重要的。
          </p>          <div class="project-tech">
            <span class="tech-tag">微處理機</span>
          </div>
          <div class="project-documents">
            <h4>相關文件：</h4>
            <div class="document-links">
              <a href="/documents/電腦架設計專題報告.pdf" target="_blank" class="document-link">
                <span class="document-icon">📄</span>
                專題報告 (PDF)
              </a>
            </div>
          </div>
        </div>
        
        <!-- 專題：磅秤與杯墊 -->
        <div class="project-item">
          <div class="project-title">
            <h3>智能磅秤與杯墊系統</h3>
            <span class="project-date">專題作品</span>
          </div>
          <div class="project-team">
            <p><strong>指導老師：</strong>王佳盈  </p>
            <p><strong>成員：</strong>林芊蓉、張智翔、蔡秉霖 </p>
          </div>
          <p class="project-description">
            在參與課程接觸服務學習後，我們深刻體會到如何運用所學知識來協助他人。透過與中
            心的互動，我們了解到他們的需求，並提出了一個設計方案：製作一個磅秤與杯墊，以使他
            們的工作更輕鬆 
            了解他們的需求後，我們需要設計一個能讓他們方便觀察、使用的輔具，所設計的杯墊
            貼和他們所使用的玻璃杯與馬克杯，可以使杯子更不易滑落，相比原本的杯墊，比較不容易
            在上菜的時候產生意外。至於我們設計的磅秤，我們經過多次與中心老師的溝通和確認，設
            計了易於辨識的數字顯示方式。此外，我們還加上LED，以紅綠燈的方式提示使用者何時
            停止稱重，即使無法辨識數字或有困惑的使用者也能透過LED二次確認，或直接得知何時
            停止稱重。 
          </p>          <div class="project-tech">
            <span class="tech-tag">服務學習</span>
            <span class="tech-tag">Arduino</span>
            <span class="tech-tag">產品設計</span>
          </div>
          <div class="project-documents">
            <h4>相關文件：</h4>
            <div class="document-links">
              <a href="/documents/智能磅秤與杯墊系統簡報.pdf" target="_blank" class="document-link">
                <span class="document-icon">📊</span>
                專題簡報 (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 第二個區域：個人興趣 -->
    <section class="section interests-section">
      <h1>個人興趣</h1>
      
      <div class="interests-container">        <!-- 書法 -->
        <div class="interest-item">
          <div class="activity-image-compact">
            <div class="activity-slideshow-container">
              <div v-for="(image, index) in calligraphyImages" :key="'cal-'+index" class="activity-slide" :class="{ active: currentIndexes.calligraphy === index }">
                <img :src="image" :alt="'書法作品 ' + (index + 1)" 
                     @click="openLightbox('calligraphy', index)" />
              </div>
              <div class="activity-slide-counter">{{ currentIndexes.calligraphy + 1 }}/{{ calligraphyImages.length }}</div>
              <!-- 添加左右切換按鈕 -->
              <button class="activity-slide-nav prev" @click="prevSlide('calligraphy')">&lt;</button>
              <button class="activity-slide-nav next" @click="nextSlide('calligraphy')">&gt;</button>
            </div>
          </div>
          <div class="interest-description">
            <h3>書法</h3>
            <p>從小學習書法已有十年，擅長楷書。曾在書法比賽中獲獎，也會在閒暇時間練習書寫，筆墨之間的寧靜時光。</p>
          </div>
        </div>
          <!-- 爵士鼓 -->
        <div class="interest-item">
          <div class="activity-image-compact">
            <div class="activity-slideshow-container">
              <div v-for="(image, index) in drumImages" :key="'drum-'+index" class="activity-slide" :class="{ active: currentIndexes.drum === index }">
                <img :src="image" :alt="'爵士鼓演奏 ' + (index + 1)" 
                     @click="openLightbox('drum', index)" />
              </div>
              <div class="activity-slide-counter">{{ currentIndexes.drum + 1 }}/{{ drumImages.length }}</div>
              <button class="activity-slide-nav prev" @click="prevSlide('drum')">&lt;</button>
              <button class="activity-slide-nav next" @click="nextSlide('drum')">&gt;</button>
            </div>
          </div>
          <div class="interest-description">
            <h3>爵士鼓</h3>
            <p>大學開始學習爵士鼓，現已有三年經驗。喜歡透過節奏表達自我，釋放壓力。</p>
            <p>曾參與校內樂團表演，擅長演奏流行音樂與爵士樂風格的曲目。</p>
          </div>
        </div>        <!-- 繪畫 -->
        <div class="interest-item">
          <div class="activity-image-compact">
            <div class="activity-slideshow-container">
              <div v-for="(image, index) in drawImages" :key="'draw-'+index" class="activity-slide" :class="{ active: currentIndexes.draw === index }">
                <img :src="image" :alt="'繪畫作品 ' + (index + 1)" 
                     @click="openLightbox('draw', index)" />
              </div>
              <div class="activity-slide-counter">{{ currentIndexes.draw + 1 }}/{{ drawImages.length }}</div>
              <button class="activity-slide-nav prev" @click="prevSlide('draw')">&lt;</button>
              <button class="activity-slide-nav next" @click="nextSlide('draw')">&gt;</button>
            </div>
          </div>
          <div class="interest-description">
            <h3>繪畫</h3>
            <p>喜歡透過繪畫表達創意與想法，擅長素描和水彩畫。</p>
            <p>閒暇時會畫一些生活中的風景和物件，記錄生活中的美好瞬間。</p>
          </div>
        </div>        <!-- 拼圖 -->
        <div class="interest-item">
          <div class="activity-image-compact">
            <div class="activity-slideshow-container">
              <div v-for="(image, index) in puzzleImages" :key="'puzzle-'+index" class="activity-slide" :class="{ active: currentIndexes.puzzle === index }">
                <img :src="image" :alt="'拼圖作品 ' + (index + 1)" 
                     @click="openLightbox('puzzle', index)" />
              </div>
              <div class="activity-slide-counter">{{ currentIndexes.puzzle + 1 }}/{{ puzzleImages.length }}</div>
              <button class="activity-slide-nav prev" @click="prevSlide('puzzle')">&lt;</button>
              <button class="activity-slide-nav next" @click="nextSlide('puzzle')">&gt;</button>
            </div>
          </div>
          <div class="interest-description">
            <h3>拼圖</h3>
            <p>享受拼圖帶來的挑戰與完成時的成就感。</p>
            <p>常常選擇千片以上的複雜拼圖，透過耐心和專注力一步步完成。</p>
          </div>
        </div>        <!-- 玄學研究 -->
        <div class="interest-item">
          <div class="activity-image-compact">
            <div class="activity-slideshow-container">
              <div v-for="(image, index) in physicsImages" :key="'physics-'+index" class="activity-slide" :class="{ active: currentIndexes.physics === index }">
                <img :src="image" :alt="'玄學研究 ' + (index + 1)" 
                     @click="openLightbox('physics', index)" />
              </div>
              <div class="activity-slide-counter">{{ currentIndexes.physics + 1 }}/{{ physicsImages.length }}</div>
              <button class="activity-slide-nav prev" @click="prevSlide('physics')">&lt;</button>
              <button class="activity-slide-nav next" @click="nextSlide('physics')">&gt;</button>
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
        <img :src="lightbox.image" :alt="lightbox.alt" />
        <button class="lightbox-close" @click="closeLightbox">✕</button>
        <div class="lightbox-nav">
          <button class="lightbox-prev" @click.stop="lightboxPrev">&lt;</button>
          <div class="lightbox-counter">{{ lightbox.index + 1 }}/{{ getImagesArray(lightbox.type).length }}</div>
          <button class="lightbox-next" @click.stop="lightboxNext">&gt;</button>
        </div>
      </div>
    </div>    <!-- PopupModal 組件 -->
    <PopupModal 
      v-model="showPopup"
      title="徵男友"
      :show-footer="true"
      confirm-text="我有興趣 💕"
      cancel-text="下次再說"
      @confirm="handlePopupConfirm"
    >
      <div class="popup-content">
        <!-- 照片輪播區域 -->
        <div class="photo-carousel">
          <div class="carousel-container">
            <div 
              v-for="(photo, index) in popupPhotos" 
              :key="index"
              class="photo-slide"
              :class="{ active: currentPhotoIndex === index }"
            >
              <img :src="photo.src" :alt="photo.alt" />
            </div>
            <div class="photo-indicator">
              {{ currentPhotoIndex + 1 }} / {{ popupPhotos.length }}
            </div>
          </div>
        </div>        <div class="dating-info">
          <h3>💖 關於我</h3>
          <p><strong>綽號：</strong>世新金冬天</p>
          <p><strong>年齡：</strong>21歲</p>
          <p><strong>星座：</strong>天秤(但自認為是射手+雙魚)</p>
          <p><strong>學歷：</strong>世新大學公共關係暨廣告學系在讀</p>
          <p><strong>興趣：</strong>一生摯愛打籃球、音樂祭、偶爾會跑山上看星星、出去玩</p>
          <p><strong>個性：</strong>爆肝人、邏輯人、微衝動、直接(情緒都在臉上)、熱情</p>
        </div>
        
        <div class="contact-section">
          <h3>📧 聯絡方式</h3>
          <p><strong>ig：</strong><a href="https://www.instagram.com/im__yannnnnnn?igsh=MTJ1cWVveTNsMXE4Nw=="target="_blank">查看ig</a></p>
        </div>
        
        <div class="requirements">
          <h3>💕 理想型</h3>
          <p>對未來有想像、有目標，你如果要軟爛也要軟爛的合理。喜歡熱情的人，可以浪漫一點，我沒體驗過</p>
        </div>
      </div>
    </PopupModal>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import PopupModal from '@/components/PopupModal.vue'

// PopupModal 相關狀態
const showPopup = ref(false)
const currentPhotoIndex = ref(0)
let photoCarouselInterval = null

// 彈跳視窗照片陣列
const popupPhotos = [
  { src: '/images/popup/865798.jpg', alt: '個人照片 1' },
  { src: '/images/popup/865799_0.jpg', alt: '個人照片 2' },
  { src: '/images/popup/865800_0.jpg', alt: '個人照片 3' }
]

// PopupModal 相關方法
const openPopup = () => {
  showPopup.value = true
  startPhotoCarousel()
}

const handlePopupConfirm = () => {
  showPopup.value = false
  stopPhotoCarousel()
  // 跳轉到IG頁面
  window.open('https://www.instagram.com/im__yannnnnnn?igsh=MTJ1cWVveTNsMXE4Nw==', '_blank')
}

// 照片輪播功能
const startPhotoCarousel = () => {
  photoCarouselInterval = setInterval(() => {
    currentPhotoIndex.value = (currentPhotoIndex.value + 1) % popupPhotos.length
  }, 3000) // 每3秒切換一張照片
}

const stopPhotoCarousel = () => {
  if (photoCarouselInterval) {
    clearInterval(photoCarouselInterval)
    photoCarouselInterval = null
  }
}

// 監聽彈跳視窗關閉
watch(showPopup, (newValue) => {
  if (!newValue) {
    stopPhotoCarousel()
    currentPhotoIndex.value = 0 // 重置照片索引
  }
})

// 简单的AOS效果实现
const handleScroll = () => {
  const elements = document.querySelectorAll('[data-aos]')
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight
    
    if (elementTop < windowHeight * 0.8) {
      element.style.opacity = '1'
      element.style.transform = 'translateY(0) scale(1)'
      element.classList.add('aos-animate')
    }
  })
}

// 初始化AOS效果
const initAOS = () => {
  const elements = document.querySelectorAll('[data-aos]')
  elements.forEach((element, index) => {
    const delay = element.getAttribute('data-aos-delay') || 0
    element.style.opacity = '0'
    element.style.transform = 'translateY(30px) scale(0.9)'
    element.style.transition = `all 0.6s ease ${delay}ms`
    
    // 添加一个小延迟以触发动画
    setTimeout(() => {
      handleScroll()
    }, 100)
  })
  
  window.addEventListener('scroll', handleScroll)
}

// 定義各類型圖片路徑
const calligraphyImages = [
  '/images/interests/calligraphy/IMG_20250513_105817.jpg',
  '/images/interests/calligraphy/IMG_20250513_105821.jpg',
  '/images/interests/calligraphy/IMG_20250528_171833.jpg',
  '/images/interests/calligraphy/IMG_20250528_171841.jpg',
  '/images/interests/calligraphy/IMG_20250528_171851.jpg',
  '/images/interests/calligraphy/IMG_20200113_194926.jpg',
  '/images/interests/calligraphy/received_515809348583753.jpg',
  '/images/interests/calligraphy/received_660991897398830.jpg',
]

const drumImages = [
  '/images/interests/drum/IMG_20220219_141637.jpg',
  '/images/interests/drum/IMG_20210925_130702.jpg',
  '/images/interests/drum/IMG_20220223_191419.jpg',
]

const drawImages = [
  '/images/interests/draw/IMG_20241002_195745.jpg',
  '/images/interests/draw/IMG_20241002_195803.jpg',
  '/images/interests/draw/IMG_20241002_200011.jpg',
  '/images/interests/draw/IMG_20241002_200044.jpg',
  '/images/interests/draw/IMG_20240417_220815.jpg'
]

const puzzleImages = [
  '/images/interests/puzzle/IMG_20200807_192038.jpg',
  '/images/interests/puzzle/IMG_20220501_204514.jpg',
  '/images/interests/puzzle/IMG_20220523_160018.jpg',
  '/images/interests/puzzle/IMG_20220523_211711.jpg',
  '/images/interests/puzzle/IMG_20240327_084401.jpg',
  '/images/interests/puzzle/IMG_20250211_204604.jpg',
  '/images/interests/puzzle/IMG_20250211_204632.jpg',
  '/images/interests/puzzle/IMG_20240908_174112.jpg',
  '/images/interests/puzzle/IMG_20240120_215049.jpg'
]

const physicsImages = [
  '/images/interests/physics/img-1950542225_1745635199325.jpg',
  '/images/interests/physics/img1657701570_1745568794007.jpeg',
  '/images/interests/physics/螢幕擷取畫面 2025-06-07 182911.png',
]

// 活動圖片數據
const activityImages = [
  {
    src: '/images/activitive/CACS.jpg',
    alt: 'CACS研討會',
    title: 'CACS研討會',
    description: '2024/11 參加CACS研討會，發表論文並交流學術經驗'
  },
  {
    src: '/images/activitive/TDU.jpg',
    alt: 'TDU International Workshop',
    title: 'TDU International Workshop',
    description: '112/7/30 ~ 112/8/5 參與TDU International Workshop，參與無人機相關課程與實作'
  },
  {
    src: '/images/activitive/資訊科技輔具.jpg',
    alt: '資訊科技與輔具應用',
    title: '資訊科技與輔具應用',
    description: '112-1學期修習課程，運用所學參與校外服務學習'
  },
  {
    src: '/images/activitive/綠基會.jpg',
    alt: '綠基會活動',
    title: '綠基會活動',
    description: '111-2學期參加綠基會活動，修習關於電力相關課程實作'
  },
  {
    src: '/images/activitive/卡內基.jpg',
    alt: '卡內基訓練',
    title: '卡內基訓練',
    description: '2021/8 參加卡內基訓練，提升領導與溝通能力'
  }
]

// 儲存每個類別當前顯示的圖片索引
const currentIndexes = ref({
  calligraphy: 0,
  drum: 0,
  draw: 0,
  puzzle: 0,
  physics: 0,
  activities: 0
})

// 圖片放大檢視狀態
const lightbox = ref({
  show: false,
  image: '',
  alt: '',
  type: '',  index: 0
})

// 獲取指定類型的圖片陣列
const getImagesArray = (type) => {
  const imageArrays = {
    calligraphy: calligraphyImages,
    drum: drumImages,
    draw: drawImages,
    puzzle: puzzleImages,
    physics: physicsImages,
    activities: activityImages.map(item => item.src)
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
  
  slideshowIntervals.activities = setInterval(() => {
    if (!lightbox.value.show) {
      currentIndexes.value.activities = (currentIndexes.value.activities + 1) % activityImages.length
    }
  }, intervalTime)
}

// 暫停所有輪播
const pauseAllSlideshows = () => {
  Object.values(slideshowIntervals).forEach(interval => {
    clearInterval(interval)
  })
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
  initAOS()
  startSlideshow()
  window.addEventListener('keydown', handleKeyDown)
})

// 在元件卸載前清除計時器和事件監聽器
onBeforeUnmount(() => {
  pauseAllSlideshows()
  stopPhotoCarousel() // 清除照片輪播計時器
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('scroll', handleScroll)
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

/* 個人特質樣式 */
.traits-title {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease-in-out infinite;
  font-size: 1.4rem !important;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem !important;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.personality-traits {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.trait-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  transform: translateY(0);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.trait-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  padding: 3px;
  background: linear-gradient(45deg, transparent, transparent);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: subtract;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: subtract;
  transition: all 0.4s ease;
}

.trait-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.trait-item:hover::before {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 400% 400%;
  animation: borderGlow 2s ease infinite;
}

@keyframes borderGlow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.trait-icon {
  font-size: 2.5rem;
  min-width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.trait-item:hover .trait-icon {
  transform: rotate(360deg) scale(1.1);
  box-shadow: 0 6px 25px rgba(102, 126, 234, 0.5);
}

.trait-content {
  flex: 1;
}

.trait-content h4 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
  transition: all 0.3s ease;
}

.trait-item:hover .trait-content h4 {
  color: #667eea;
  transform: translateX(5px);
}

.trait-content p {
  margin: 0;
  line-height: 1.7;
  color: #555;
  transition: all 0.3s ease;
}

.trait-item:hover .trait-content p {
  color: #333;
}

.trait-decoration {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  opacity: 0.1;
  transition: all 0.3s ease;
}

.trait-item:hover .trait-decoration {
  opacity: 0.3;
  transform: rotate(180deg);
}

/* 不同特質的主題色彩 */
.trait-responsible {
  background: linear-gradient(135deg, #ffeef0 0%, #fff5f5 100%);
}

.trait-responsible .trait-icon {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.trait-responsible .trait-decoration {
  background: radial-gradient(circle, #ff6b6b, transparent);
}

.trait-learning {
  background: linear-gradient(135deg, #e8f5e8 0%, #f0fff0 100%);
}

.trait-learning .trait-icon {
  background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
  box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
}

.trait-learning .trait-decoration {
  background: radial-gradient(circle, #4ecdc4, transparent);
}

.trait-active {
  background: linear-gradient(135deg, #fff9e6 0%, #fffbf0 100%);
}

.trait-active .trait-icon {
  background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
  box-shadow: 0 4px 15px rgba(255, 234, 167, 0.4);
}

.trait-active .trait-decoration {
  background: radial-gradient(circle, #ffeaa7, transparent);
}

.trait-communication {
  background: linear-gradient(135deg, #e6f3ff 0%, #f0f8ff 100%);
}

.trait-communication .trait-icon {
  background: linear-gradient(135deg, #45b7d1 0%, #2980b9 100%);
  box-shadow: 0 4px 15px rgba(69, 183, 209, 0.3);
}

.trait-communication .trait-decoration {
  background: radial-gradient(circle, #45b7d1, transparent);
}

.trait-analysis {
  background: linear-gradient(135deg, #f0e6ff 0%, #f8f0ff 100%);
}

.trait-analysis .trait-icon {
  background: linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%);
  box-shadow: 0 4px 15px rgba(162, 155, 254, 0.3);
}

.trait-analysis .trait-decoration {
  background: radial-gradient(circle, #a29bfe, transparent);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .trait-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .trait-icon {
    align-self: center;
  }
  
  .traits-title {
    font-size: 1.2rem !important;
  }
}

/* AOS动画类 */
.aos-animate {
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* 额外的动画装饰 */
.trait-item::after {
  content: '✨';
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.2rem;
  opacity: 0;
  transition: all 0.4s ease;
  animation: sparkle 3s infinite;
}

.trait-item:hover::after {
  opacity: 1;
  transform: rotate(360deg) scale(1.2);
}

@keyframes sparkle {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.1) rotate(180deg);
  }
}

/* 懸停時的特殊效果 */
.trait-item:hover {
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* 標題的額外效果 */
.traits-title::after {
  content: '💫';
  margin-left: 10px;
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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
  height: 400px;
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
  bottom: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
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

/* 確保圖片完整顯示 */
.slide img {
  object-fit: contain;
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
  width: 45px;
  height: 45px;
  font-size: 22px;
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

/* 新增的樣式 */
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

.project-team {
  background-color: #e8f4f8;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border-left: 4px solid #41b883;
}

.project-team p {
  margin: 0.3rem 0;
  font-size: 1rem;
  color: #2c3e50;
}

.project-team strong {
  color: #41b883;
  font-weight: 600;
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

.project-documents {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #007bff;
}

.project-documents h4 {
  margin: 0 0 0.8rem 0;
  color: #007bff;
  font-size: 1.1rem;
  font-weight: 600;
}

.document-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.document-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background-color: white;
  border: 2px solid #007bff;
  border-radius: 6px;
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.1);
}

.document-link:hover {
  background-color: #007bff;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
}

.document-icon {
  font-size: 1.2rem;
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

/* 活動圖片展示樣式 - 緊湊格式 */
.activities-gallery {
  margin: 1rem 0 2rem 0;
}

.activity-item {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.activity-image-compact {
  flex: 0 0 350px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
}

.activity-slideshow-container {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.activity-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.activity-slide.active {
  opacity: 1;
}

.activity-slide img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
  display: block;
}

.activity-slide-counter {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

.activity-slide-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
  opacity: 0;
  z-index: 10;
}

.activity-slideshow-container:hover .activity-slide-nav {
  opacity: 0.8;
}

.activity-slide-nav:hover {
  background: rgba(0, 0, 0, 0.8);
}

.activity-slide-nav.prev {
  left: 8px;
}

.activity-slide-nav.next {
  right: 8px;
}

.activity-description {
  flex: 1;
  padding-left: 1rem;
}

.activity-description h4 {
  color: #41b883;
  font-size: 1.3rem;
  margin-bottom: 0.6rem;
  font-weight: 600;
}

.activity-description p {
  margin: 0.6rem 0;
  line-height: 1.6;
  font-size: 1rem;
  color: #555;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .activity-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .activity-image-compact {
    margin: 0 auto;
    flex: none;
    width: 100%;
    max-width: 350px;
  }
  
  .activity-description {
    padding-left: 0;
    text-align: center;
  }
}

/* PopupModal 樣式 */
.popup-trigger-container {
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  z-index: 100;
}

.popup-trigger-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #ff69b4 0%, #ff1493 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: heartbeat 2s infinite;
}

.popup-trigger-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 105, 180, 0.6);
  background: linear-gradient(135deg, #ff1493 0%, #ff69b4 100%);
}

.popup-trigger-btn:active {
  transform: translateY(-1px) scale(0.98);
}

.trigger-icon {
  font-size: 1.2rem;
  animation: heartPulse 1.5s infinite;
}

.trigger-text {
  font-family: "LXGW WenKai Mono TC", monospace;
}

@keyframes heartbeat {
  0%, 100% {
    box-shadow: 0 4px 15px rgba(255, 105, 180, 0.4);
  }
  50% {
    box-shadow: 0 6px 20px rgba(255, 105, 180, 0.7);
  }
}

@keyframes heartPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

/* 彈跳視窗內容樣式 */
.popup-content {
  padding: 2rem;
  color: #2c3e50;
}

/* 照片輪播樣式 */
.photo-carousel {
  margin-bottom: 2rem;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
}

.photo-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-slide.active {
  opacity: 1;
}

.photo-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.photo-indicator {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* 內容區塊樣式 */
.dating-info, .contact-section, .requirements {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffeef8 0%, #fff0f5 100%);
  border-radius: 12px;
  border-left: 4px solid #ff69b4;
  transition: all 0.3s ease;
}

.dating-info:hover, .contact-section:hover, .requirements:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 105, 180, 0.2);
}

.dating-info h3, .contact-section h3, .requirements h3 {
  color: #ff1493;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.dating-info p, .contact-section p, .requirements p {
  margin: 0.5rem 0;
  line-height: 1.6;
  font-size: 1rem;
}

.dating-info strong, .contact-section strong {
  color: #2c3e50;
  font-weight: 600;
}

.contact-section a {
  color: #ff1493;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 2px 6px;
  border-radius: 4px;
}

.contact-section a:hover {
  background: rgba(255, 20, 147, 0.1);
  text-decoration: underline;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .popup-trigger-container {
    top: auto;
    bottom: 2rem;
    right: 1rem;
    transform: none;
  }
  
  .popup-trigger-btn {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
  
  .trigger-text {
    display: none;
  }
  
  .popup-content {
    padding: 1.5rem;
  }
  
  .carousel-container {
    height: 250px;
  }
  
  .dating-info h3,
  .contact-section h3,
  .requirements h3 {
    font-size: 1.1rem;
  }
  
  .dating-info,
  .contact-section,
  .requirements {
    padding: 1rem;
  }
  
  .activity-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .activity-image-compact {
    margin: 0 auto;
    flex: none;
    width: 100%;
    max-width: 350px;
  }
  
  .activity-description {
    padding-left: 0;
    text-align: center;
  }
}
</style>
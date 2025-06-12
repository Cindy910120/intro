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
          </div>          <div class="info-group">
            <h3>參加過的活動</h3>
            <!-- 活動圖片展示 - 新的左圖右字佈局 -->            
            <div class="activity-card">
              <div class="activity-image-section">
                <div class="activity-image-container">
                  <div v-for="(image, index) in activityImages" :key="'activity-'+index" 
                       class="activity-slide" :class="{ active: currentIndexes.activities === index }">
                    <img :src="image.src" :alt="image.alt" 
                         @click="openLightbox('activities', index)" 
                         class="activity-img" />
                  </div>
                  <div class="slide-counter">{{ currentIndexes.activities + 1 }}/{{ activityImages.length }}</div>
                  <button class="slide-nav-side prev-side" @click="prevSlide('activities')" aria-label="上一張">
                    <span class="nav-arrow">‹</span>
                  </button>
                  <button class="slide-nav-side next-side" @click="nextSlide('activities')" aria-label="下一張">
                    <span class="nav-arrow">›</span>
                  </button>
                </div>
              </div>
              <div class="activity-content">
                <div class="activity-icon">📸</div>
                <h4 class="activity-title">{{ activityImages[currentIndexes.activities]?.title }}</h4>
                <div class="activity-details">
                  <p>{{ activityImages[currentIndexes.activities]?.description }}</p>
                  <div class="activity-list">
                    <h5>活動紀錄：</h5>
                    <ul>
                      <li>2024/11 CACS研討會</li>
                      <li>112-1學期 修習「資訊科技與輔具應用」運用自己的所學參與校外的服務學習</li>
                      <li>112/7/30 ~ 112/8/5 參與TDU International Workshop</li>
                      <li>111-2學期 參加綠基會活動</li>
                      <li>2021/8 參加卡內基(帶領大學部)學長結業第三次</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    </section>    <!-- 學術成果區域 -->
    <section class="section academic-section">
      <div class="section-header">
        <h1>學術成果</h1>
        <p class="section-subtitle">研究發表與學術貢獻</p>
      </div>
      
      <div class="academic-timeline">
        <!-- IEEE 研討會論文 -->
        <div class="academic-card paper-publication">
          <div class="academic-status">
            <span class="status-badge conference">研討會論文</span>
          </div>
          
          <div class="academic-header">
            <div class="academic-icon">📄</div>
            <div class="academic-title-group">
              <h2>Quaternion-Based Attitude Tracking Control Design for UAVs</h2>
              <p class="academic-subtitle">基於四元數的無人機姿態追蹤控制設計</p>
            </div>
          </div>
          
          <div class="academic-details">
            <div class="paper-info">
              <div class="info-item">
                <span class="icon">📚</span>
                <span>發表於：IEEE Conference</span>
              </div>
              <div class="info-item">
                <span class="icon">🔗</span>
                <a href="https://ieeexplore.ieee.org/document/10773309" target="_blank">IEEE Xplore 論文連結</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 專題經歷區域 -->
    <section class="section projects-section">
      <div class="section-header">
        <h1>專題經歷</h1>
        <p class="section-subtitle">從學習到實踐，每個專題都是成長的足跡</p>
      </div>
      
      <div class="projects-timeline">
        <!-- 畢業專題：四軸無人機軌跡追蹤與飛行控制設計 -->
        <div class="project-card featured-project">
          <div class="project-status">
            <span class="status-badge graduate">大學畢業專題</span>
          </div>
          
          <div class="project-header">
            <div class="project-icon">🚁</div>
            <div class="project-title-group">
              <h2>四軸無人機軌跡追蹤與飛行控制設計</h2>
            </div>
          </div>
          
          <div class="project-details">
            <div class="project-team">
              <div class="team-item">
                <span class="icon">👨‍🏫</span>
                <span>指導老師：游仁德</span>
              </div>
              <div class="team-item">
                <span class="icon">👨‍🎓</span>
                <span>成員：林芊蓉</span>
              </div>
            </div>
            
            <div class="project-content">
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
              </p>
            </div>
          </div>
          
          <div class="project-tech-stack">
            <span class="tech-tag primary">PX4飛控系統</span>
            <span class="tech-tag primary">MATLAB/Simulink</span>
            <span class="tech-tag secondary">C++</span>
            <span class="tech-tag secondary">控制理論</span>
            <span class="tech-tag secondary">無人機技術</span>
          </div>
          
          <div class="project-documents">
            <div class="document-grid">
              <a href="/documents/四軸無人機專題論文.pdf" target="_blank" class="doc-card">
                <span class="doc-icon">📄</span>
                <div class="doc-info">
                  <strong>專題論文</strong>
                  <p>PDF</p>
                </div>
              </a>
              <a href="/documents/四軸無人機簡報.pdf" target="_blank" class="doc-card">
                <span class="doc-icon">📊</span>
                <div class="doc-info">
                  <strong>專題海報</strong>
                  <p>PDF</p>
                </div>
              </a>
            </div>
          </div>
        </div>        
        <!-- 服務學習專題：資訊科技與社會關懷 -->
        <div class="project-card service-project">
          <div class="project-status">
            <span class="status-badge service">專題</span>
          </div>
          
          <div class="project-header">
            <div class="project-icon">❤️</div>
            <div class="project-title-group">
              <h2>資訊科技與社會關懷期末報告</h2>
            </div>
          </div>
          
          <div class="project-details">
            <div class="project-team">
              <div class="team-item">
                <span class="icon">👨‍🏫</span>
                <span>指導老師：王佳盈</span>
              </div>
              <div class="team-item">
                <span class="icon">👥</span>
                <span>成員：林芊蓉、王語婕、林敬玲</span>
              </div>
            </div>
            
            <div class="project-content">
              <p class="project-description">
                首次踏足寶貝中心時，在廚房實作看到了一些可以改進的地方。我們發現在製作飲料的過程中，同學們加入冰塊時，無法變通磅秤讀數，堅持要剛好符合規定的重量，又或者有些同學無法判讀數字，造成作業上的不便。
                　　為了解決這個問題，我們構想製作一個結合燈號的磅秤，讓他們可以更輕鬆的工作，也不需讓機構的老師時刻監督不會看數字的同學。
                　　我們以3D列印技術製作磅秤外殼，結合Arduino esp32及手機操作磅秤，使用者可以輕鬆更改設定，不需更改程式。
                磅秤基本上延續去年的設計，保留主結構及LCD螢幕顯示方式，板子則由Arduino UNO改用esp32，讓使用者使用手機的藍芽功能連接到esp32，更直觀的直接輸入所需重量及誤差值，不需使用去年的旋鈕方式更改重量設定，
                　　我們也重新更改了磅秤的外殼設計，將磅秤體積縮小，更加方便使用與攜帶，也將開蓋設計更改，避免了原版設計的外殼會割傷手的可能。
              </p>
            </div>
          </div>
          
          <div class="project-tech-stack">
            <span class="tech-tag primary">服務學習</span>
            <span class="tech-tag primary">Arduino</span>
            <span class="tech-tag secondary">產品設計</span>
          </div>
          
          <div class="project-documents">
            <div class="document-grid">
              <a href="/documents/資訊科技與社會關懷期末報告.pdf" target="_blank" class="doc-card">
                <span class="doc-icon">📊</span>
                <div class="doc-info">
                  <strong>專題簡報</strong>
                  <p>PDF</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <!-- 產品設計專題：電腦架設計 -->
        <div class="project-card design-project">
          <div class="project-status">
            <span class="status-badge design">專題作品</span>
          </div>
          
          <div class="project-header">
            <div class="project-icon">💻</div>
            <div class="project-title-group">
              <h2>電腦架設計專題</h2>
            </div>
          </div>
          
          <div class="project-details">
            <div class="project-team">
              <div class="team-item">
                <span class="icon">👨‍🏫</span>
                <span>指導老師：廖裕評</span>
              </div>
              <div class="team-item">
                <span class="icon">👥</span>
                <span>成員：林芊蓉、黃芷宸</span>
              </div>
            </div>
            
            <div class="project-content">
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
              </p>
            </div>
          </div>
          
          <div class="project-tech-stack">
            <span class="tech-tag primary">微處理機</span>
          </div>
          
          <div class="project-documents">
            <div class="document-grid">
              <a href="/documents/電腦架設計專題報告.pdf" target="_blank" class="doc-card">
                <span class="doc-icon">📄</span>
                <div class="doc-info">
                  <strong>專題報告</strong>
                  <p>PDF</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <!-- 早期專題：智能杯墊系統 -->
        <div class="project-card early-project">
          <div class="project-status">
            <span class="status-badge early">專題作品</span>
          </div>
          
          <div class="project-header">
            <div class="project-icon">☕</div>
            <div class="project-title-group">
              <h2>智能磅秤與杯墊系統</h2>
            </div>
          </div>
          
          <div class="project-details">
            <div class="project-team">
              <div class="team-item">
                <span class="icon">👨‍🏫</span>
                <span>指導老師：王佳盈</span>
              </div>
              <div class="team-item">
                <span class="icon">👥</span>
                <span>成員：林芊蓉、張智翔、蔡秉霖</span>
              </div>
            </div>
            
            <div class="project-content">
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
              </p>
            </div>
          </div>
          
          <div class="project-tech-stack">
            <span class="tech-tag primary">服務學習</span>
            <span class="tech-tag primary">Arduino</span>
            <span class="tech-tag secondary">產品設計</span>
          </div>
          
          <div class="project-documents">
            <div class="document-grid">
              <a href="/documents/智能磅秤與杯墊系統簡報.pdf" target="_blank" class="doc-card">
                <span class="doc-icon">📊</span>
                <div class="doc-info">
                  <strong>專題簡報</strong>
                  <p>PDF</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>    <!-- 第二個區域：個人興趣 -->
    <section class="section interests-section">
      <div class="section-header">
        <h1>個人興趣</h1>
        <p class="section-subtitle">生活中的多彩時光，每個興趣都是自我表達的方式</p>
      </div>
      
      <div class="interests-grid">        <!-- 書法 -->
        <div class="interest-card">
          <div class="interest-image-section">
            <div class="interest-image-container">
              <div v-for="(image, index) in calligraphyImages" :key="'cal-'+index" 
                   class="interest-slide" :class="{ active: currentIndexes.calligraphy === index }">
                <img :src="image" :alt="'書法作品 ' + (index + 1)" 
                     @click="openLightbox('calligraphy', index)" 
                     class="interest-img" />
              </div>
              <div class="slide-counter">{{ currentIndexes.calligraphy + 1 }}/{{ calligraphyImages.length }}</div>
              <button class="slide-nav-side prev-side" @click="prevSlide('calligraphy')" aria-label="上一張">
                <span class="nav-arrow">‹</span>
              </button>
              <button class="slide-nav-side next-side" @click="nextSlide('calligraphy')" aria-label="下一張">
                <span class="nav-arrow">›</span>
              </button>
            </div>
          </div>
          <div class="interest-content">
            <div class="interest-icon">✍️</div>
            <h3 class="interest-title">書法</h3>
            <div class="interest-details">
              <p>從小學習書法已有十年，擅長楷書。曾在書法比賽中獲獎，也會在閒暇時間練習書寫，筆墨之間的寧靜時光。</p>
              <div class="interest-tags">
                <span class="tag">楷書</span>
                <span class="tag">十年經驗</span>
                <span class="tag">比賽獲獎</span>
              </div>
            </div>
          </div>
        </div>        <!-- 爵士鼓 -->
        <div class="interest-card">
          <div class="interest-image-section">
            <div class="interest-image-container">
              <div v-for="(image, index) in drumImages" :key="'drum-'+index" 
                   class="interest-slide" :class="{ active: currentIndexes.drum === index }">
                <img :src="image" :alt="'爵士鼓演奏 ' + (index + 1)" 
                     @click="openLightbox('drum', index)" 
                     class="interest-img" />
              </div>
              <div class="slide-counter">{{ currentIndexes.drum + 1 }}/{{ drumImages.length }}</div>
              <button class="slide-nav-side prev-side" @click="prevSlide('drum')" aria-label="上一張">
                <span class="nav-arrow">‹</span>
              </button>
              <button class="slide-nav-side next-side" @click="nextSlide('drum')" aria-label="下一張">
                <span class="nav-arrow">›</span>
              </button>
            </div>
          </div>
          <div class="interest-content">
            <div class="interest-icon">🥁</div>
            <h3 class="interest-title">爵士鼓</h3>
            <div class="interest-details">
              <p>大學開始學習爵士鼓，現已有三年經驗。喜歡透過節奏表達自我，釋放壓力。</p>
              <div class="interest-tags">
                <span class="tag">樂器</span>
              </div>
            </div>
          </div>
        </div>        <!-- 繪畫 -->
        <div class="interest-card">
          <div class="interest-image-section">
            <div class="interest-image-container">
              <div v-for="(image, index) in drawImages" :key="'draw-'+index" 
                   class="interest-slide" :class="{ active: currentIndexes.draw === index }">
                <img :src="image" :alt="'繪畫作品 ' + (index + 1)" 
                     @click="openLightbox('draw', index)" 
                     class="interest-img" />
              </div>
              <div class="slide-counter">{{ currentIndexes.draw + 1 }}/{{ drawImages.length }}</div>
              <button class="slide-nav-side prev-side" @click="prevSlide('draw')" aria-label="上一張">
                <span class="nav-arrow">‹</span>
              </button>
              <button class="slide-nav-side next-side" @click="nextSlide('draw')" aria-label="下一張">
                <span class="nav-arrow">›</span>
              </button>
            </div>
          </div>
          <div class="interest-content">
            <div class="interest-icon">🎨</div>
            <h3 class="interest-title">繪畫</h3>
            <div class="interest-details">
              <p>喜歡透過繪畫表達創意與想法，擅長素描和水彩畫。</p>
              <p>閒暇時會畫一些生活中的風景和物件，記錄生活中的美好瞬間。</p>
              <div class="interest-tags">
                <span class="tag">素描</span>
                <span class="tag">水彩畫</span>
                <span class="tag">風景畫</span>
              </div>
            </div>
          </div>
        </div>        <!-- 拼圖 -->
        <div class="interest-card">
          <div class="interest-image-section">
            <div class="interest-image-container">
              <div v-for="(image, index) in puzzleImages" :key="'puzzle-'+index" 
                   class="interest-slide" :class="{ active: currentIndexes.puzzle === index }">
                <img :src="image" :alt="'拼圖作品 ' + (index + 1)" 
                     @click="openLightbox('puzzle', index)" 
                     class="interest-img" />
              </div>
              <div class="slide-counter">{{ currentIndexes.puzzle + 1 }}/{{ puzzleImages.length }}</div>
              <button class="slide-nav-side prev-side" @click="prevSlide('puzzle')" aria-label="上一張">
                <span class="nav-arrow">‹</span>
              </button>
              <button class="slide-nav-side next-side" @click="nextSlide('puzzle')" aria-label="下一張">
                <span class="nav-arrow">›</span>
              </button>
            </div>
          </div>
          <div class="interest-content">
            <div class="interest-icon">🧩</div>
            <h3 class="interest-title">拼圖</h3>
            <div class="interest-details">
              <p>享受拼圖帶來的挑戰與完成時的成就感。</p>
              <p>常常選擇千片以上的複雜拼圖，透過耐心和專注力一步步完成。</p>
              <div class="interest-tags">
                <span class="tag">千片拼圖</span>
                <span class="tag">專注力訓練</span>
                <span class="tag">成就感</span>
              </div>
            </div>
          </div>
        </div>        <!-- 玄學研究 -->
        <div class="interest-card">
          <div class="interest-image-section">
            <div class="interest-image-container">
              <div v-for="(image, index) in physicsImages" :key="'physics-'+index" 
                   class="interest-slide" :class="{ active: currentIndexes.physics === index }">
                <img :src="image" :alt="'玄學研究 ' + (index + 1)" 
                     @click="openLightbox('physics', index)" 
                     class="interest-img" />
              </div>
              <div class="slide-counter">{{ currentIndexes.physics + 1 }}/{{ physicsImages.length }}</div>
              <button class="slide-nav-side prev-side" @click="prevSlide('physics')" aria-label="上一張">
                <span class="nav-arrow">‹</span>
              </button>
              <button class="slide-nav-side next-side" @click="nextSlide('physics')" aria-label="下一張">
                <span class="nav-arrow">›</span>
              </button>
            </div>
          </div>
          <div class="interest-content">
            <div class="interest-icon">🔮</div>
            <h3 class="interest-title">玄學研究</h3>
            <div class="interest-details">
              <p>最近投入研究玄學相關的課題，探索自然界的奧秘。</p>
              <div class="interest-tags">
                <span class="tag">自然奧秘</span>
                <span class="tag">玄學研究</span>
                <span class="tag">探索未知</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    <!-- 圖片放大檢視元件 -->
    <div v-if="lightbox.show" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <img :src="lightbox.image" :alt="lightbox.alt" />
        <button class="lightbox-close" @click="closeLightbox">✕</button>
        <!-- 使用與小圖相同的透明側邊按鈕 -->
        <button class="lightbox-nav-side prev-side" @click.stop="lightboxPrev" aria-label="上一張">
          <span class="nav-arrow">‹</span>
        </button>
        <button class="lightbox-nav-side next-side" @click.stop="lightboxNext" aria-label="下一張">
          <span class="nav-arrow">›</span>
        </button>
        <div class="lightbox-counter">{{ lightbox.index + 1 }}/{{ getImagesArray(lightbox.type).length }}</div>
      </div>
    </div><!-- PopupModal 組件 -->
    <PopupModal 
      v-model="showPopup"
      title="幫徵男友"
      :show-footer="true"
      confirm-text="我有興趣 💕"
      cancel-text="下次再說"
      @confirm="handlePopupConfirm"
    >      <div class="popup-content">
        <!-- 照片輪播區域 - 用卡片框起來 -->
        <div class="photo-carousel-card">
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
          </div>
        </div>

        <!-- 個人信息卡片 -->
        <div class="info-card">
          <div class="dating-info">
            <h3>💖 關於我</h3>
            <p><strong>綽號：</strong>世新金冬天</p>
            <p><strong>年齡：</strong>21歲</p>
            <p><strong>星座：</strong>天秤(但自認為是射手+雙魚)</p>
            <p><strong>學歷：</strong>世新大學公共關係暨廣告學系在讀</p>
            <p><strong>工作：</strong>外商PD，預計七月辭職去打工換宿哈哈哈</p>
            <p><strong>興趣：</strong>一生摯愛打籃球、音樂祭、偶爾會跑山上看星星、出去玩</p>
            <p><strong>個性：</strong>爆肝人、邏輯人、微衝動、直接(情緒都在臉上)、熱情</p>
          </div>
          
          <div class="contact-section">
            <h3>📧 聯絡方式</h3>
            <p><strong>ig：</strong><a href="https://www.instagram.com/im__yannnnnnn?igsh=MTJ1cWVveTNsMXE4Nw=="target="_blank">查看ig</a></p>
          </div>
          
          <div class="requirements">
            <h3>💕 理想型</h3>
            <p>帥的我會怕，醜的也會怕，請你長得合宜適中。對未來有想像、有目標，你如果要軟爛也要軟爛的合理。喜歡熱情的人，可以浪漫一點，我沒體驗過</p>
          </div>
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
/* 使用模組化 CSS 系統，無需額外樣式 */
/* 所有樣式都在 profile.css 模組中定義 */

/* 只保留一些特殊的動畫效果 */
@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes borderGlow {
  0%, 100% { 
    background-position: 0% 50%; 
  }
  50% { 
    background-position: 100% 50%; 
  }
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

/* 特質標題的特殊動畫 */
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

.traits-title::after {
  content: '💫';
  margin-left: 10px;
  animation: rotate 4s linear infinite;
}

/* 特質項目的特殊動畫效果 */
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

.trait-item:hover::before {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 400% 400%;
  animation: borderGlow 2s ease infinite;
}

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

/* 彈出窗口按鈕的動畫 */
.popup-trigger-btn {
  animation: heartbeat 2s infinite;
}

.trigger-icon {
  animation: heartPulse 1.5s infinite;
}

/* Academic Section Styles */
.academic-section {
  padding: 4rem 0 2rem;
}

.academic-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.academic-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.academic-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #6366F1, #8B5CF6);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.academic-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--card-shadow-hover);
}

.academic-card:hover::before {
  opacity: 1;
}

.paper-publication {
  border: 2px solid rgba(99, 102, 241, 0.2);
  background: linear-gradient(135deg, var(--card-bg) 0%, rgba(99, 102, 241, 0.02) 100%);
}

.academic-status {
  margin-bottom: 1.5rem;
}

.status-badge.conference {
  background: linear-gradient(135deg, #6366F1, #8B5CF6);
  color: white;
}

.academic-header {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.academic-icon {
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 15px;
  flex-shrink: 0;
}

.academic-title-group h2 {
  color: var(--text-primary);
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.academic-subtitle {
  color: var(--text-secondary);
  font-size: 1rem;
  margin: 0;
  font-style: italic;
}

.paper-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(99, 102, 241, 0.05);
  border-radius: 12px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.info-item .icon {
  font-size: 1.1rem;
}

.info-item a {
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.info-item a:hover {
  color: var(--text-primary);
}

/* Projects Section Styles */
.projects-section {
  padding: 4rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h1 {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.projects-timeline {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-color), var(--secondary-color));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--card-shadow-hover);
}

.project-card:hover::before {
  opacity: 1;
}

/* Featured Project (畢業專題) */
.featured-project {
  border: 2px solid rgba(var(--accent-color-rgb), 0.2);
  background: linear-gradient(135deg, var(--card-bg) 0%, rgba(var(--accent-color-rgb), 0.02) 100%);
}

.featured-project::before {
  background: linear-gradient(90deg, #FFD700, #FFA500, var(--accent-color));
}

/* Service Project */
.service-project::before {
  background: linear-gradient(90deg, #FF6B6B, #FF8E8E);
}

/* Design Project */
.design-project::before {
  background: linear-gradient(90deg, #4ECDC4, #45B7B8);
}

/* Early Project */
.early-project::before {
  background: linear-gradient(90deg, #A8E6CF, #7FDBCD);
}

.project-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.status-badge {
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-badge.graduate {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: white;
}

.status-badge.service {
  background: linear-gradient(135deg, #FF6B6B, #FF8E8E);
  color: white;
}

.status-badge.design {
  background: linear-gradient(135deg, #4ECDC4, #45B7B8);
  color: white;
}

.status-badge.early {
  background: linear-gradient(135deg, #A8E6CF, #7FDBCD);
  color: white;
}

.project-year {
  background: var(--accent-color);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 15px;
  font-weight: 500;
}

.project-header {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.project-icon {
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(var(--accent-color-rgb), 0.1);
  border-radius: 20px;
  flex-shrink: 0;
}

.project-title-group h2 {
  color: var(--text-primary);
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.project-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin: 0;
  font-style: italic;
}

.project-details {
  margin-bottom: 2rem;
}

.project-team {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(var(--accent-color-rgb), 0.05);
  border-radius: 12px;
}

.team-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.team-item .icon {
  font-size: 1.2rem;
}

.project-content h4 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin: 1.5rem 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-content ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.project-content li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.project-content li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: bold;
}

.research-objectives,
.research-highlights,
.academic-achievement,
.problem-solution,
.technical-features,
.design-objectives,
.design-features,
.project-evolution {
  margin-bottom: 2rem;
}

.academic-achievement .paper-link {
  margin-top: 1rem;
}

.research-paper {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(var(--accent-color-rgb), 0.05);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(var(--accent-color-rgb), 0.1);
}

.research-paper:hover {
  background: rgba(var(--accent-color-rgb), 0.1);
  transform: translateY(-2px);
}

.paper-icon {
  font-size: 2rem;
  color: var(--accent-color);
}

.paper-info strong {
  color: var(--text-primary);
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.5rem;
}

.paper-info p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.9rem;
}

.external-link {
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-left: auto;
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.tech-tag {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-tag.primary {
  background: var(--accent-color);
  color: white;
}

.tech-tag.secondary {
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  border: 1px solid rgba(var(--accent-color-rgb), 0.2);
}

.tech-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(var(--accent-color-rgb), 0.3);
}

.project-documents {
  border-top: 1px solid rgba(var(--text-secondary-rgb), 0.1);
  padding-top: 2rem;
}

.document-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.doc-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(var(--accent-color-rgb), 0.05);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(var(--accent-color-rgb), 0.1);
}

.doc-card:hover {
  background: rgba(var(--accent-color-rgb), 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(var(--accent-color-rgb), 0.2);
}

.doc-icon {
  font-size: 2rem;
  color: var(--accent-color);
}

.doc-info strong {
  color: var(--text-primary);
  font-size: 1rem;
  display: block;
  margin-bottom: 0.3rem;
}

.doc-info p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.85rem;
}

/* ===== 個人興趣區域樣式 ===== */
.interests-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, 
    rgba(var(--color-primary-rgb, 52, 152, 219), 0.05) 0%, 
    rgba(var(--color-secondary-rgb, 44, 62, 80), 0.05) 100%);
  border-radius: var(--border-radius-lg, 20px);
  margin: 2rem 0;
}

/* 手機版興趣區域優化 */
@media (max-width: 768px) {
  .interests-section {
    padding: 2rem 0;
    margin: 1rem 0;
    border-radius: var(--border-radius-md, 15px);
  }
}

.interests-section .section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.interests-section .section-header h1 {
  color: var(--color-text-primary, #2c3e50);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--color-primary, #3498db), var(--color-accent, #e74c3c));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.interests-section .section-subtitle {
  color: var(--color-text-secondary, #34495e);
  font-size: 1.1rem;
  opacity: 0.8;
}

.interests-grid {
  display: grid;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 興趣卡片佈局 - 左圖右字 */
.interest-card {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  background: var(--color-bg-white, #ffffff);
  border-radius: var(--border-radius-lg, 20px);
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(var(--color-primary-rgb, 52, 152, 219), 0.1);
  position: relative;
  overflow: hidden;
}

.interest-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary, #3498db), var(--color-accent, #e74c3c));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.interest-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
}

.interest-card:hover::before {
  opacity: 1;
}

/* 圖片區域 */
.interest-image-section {
  position: relative;
}

.interest-image-container {
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: var(--border-radius-md, 15px);
  overflow: hidden;
  background: var(--color-bg-light, #f8f9fa);
}

.interest-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.interest-slide.active {
  opacity: 1;
}

.interest-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.interest-img:hover {
  transform: scale(1.05);
}

/* 輪播控制項 */
.slide-counter {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: var(--border-radius-sm, 8px);
  font-size: 0.85rem;
  font-weight: 500;
}

.slide-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.slide-nav:hover {
  background: var(--color-primary, #3498db);
  transform: translateY(-50%) scale(1.1);
}

.slide-nav.prev {
  left: 1rem;
}

.slide-nav.next {
  right: 1rem;
}

/* 內容區域 */
.interest-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
}

.interest-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.interest-title {
  color: var(--color-text-primary, #2c3e50);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
}

.interest-title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary, #3498db), var(--color-accent, #e74c3c));
  border-radius: 2px;
}

.interest-details p {
  color: var(--color-text-secondary, #34495e);
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.interest-details p:last-of-type {
  margin-bottom: 1.5rem;
}

/* 標籤區域 */
.interest-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  background: rgba(var(--color-primary-rgb, 52, 152, 219), 0.1);
  color: var(--color-primary, #3498db);
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius-sm, 8px);
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(var(--color-primary-rgb, 52, 152, 219), 0.2);
  transition: all 0.3s ease;
}

.tag:hover {
  background: var(--color-primary, #3498db);
  color: white;
  transform: translateY(-2px);
}

/* ===== Lightbox 圖片放大檢視樣式 ===== */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: lightboxFadeIn 0.3s ease;
}



@keyframes lightboxFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: lightboxSlideIn 0.3s ease;
}

@keyframes lightboxSlideIn {
  from {
    transform: scale(0.8) translateY(20px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--border-radius-md, 15px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  color: var(--color-text-primary, #2c3e50);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
   transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}

.lightbox-close:hover {
  background: var(--color-accent, #e74c3c);
  color: white;
  transform: scale(1.1);
}

.lightbox-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.8rem 1.5rem;
  border-radius: var(--border-radius-lg, 20px);
  backdrop-filter: blur(10px);
}

.lightbox-prev,
.lightbox-next {
  background: var(--color-primary, #3498db);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-prev:hover,
.lightbox-next:hover {
  background: var(--color-accent, #e74c3c);
  transform: scale(1.1);
}

.lightbox-counter {
  color: var(--color-text-primary, #2c3e50);
  font-weight: 600;
  font-size: 1rem;
  padding: 0 1rem;
  min-width: 80px;
  text-align: center;
}

/* ===== PopupModal 卡片樣式 ===== */
/* 照片輪播卡片 */
.photo-carousel-card {
  background: var(--background-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
}

.photo-carousel-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.photo-carousel-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.photo-carousel-card:hover::before {
  opacity: 1;
}

.photo-carousel {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.photo-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.photo-slide.active {
  opacity: 1;
}

.photo-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.photo-indicator {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(5px);
}

/* 信息內容卡片 */
.info-card {
  background: var(--background-primary);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.info-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.info-card:hover::before {
  opacity: 1;
}

.info-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--border-color);
}

.info-card p {
  margin-bottom: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.info-card strong {
  color: var(--text-primary);
  font-weight: 600;
}

.info-card a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.info-card a:hover {
  color: var(--accent-color);
  text-decoration: underline;
}

/* 分區樣式 */
.dating-info,
.contact-section,
.requirements {
  margin-bottom: 2rem;
}

.contact-section,
.requirements {
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
}

/* ===== 詳細的手機版響應式調整 ===== */
@media (max-width: 480px) {
  /* 導航相關調整 */
  .section-header h1 {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
    padding: 0 1rem;
  }
  
  /* 個人資料區域 */
  .profile-container {
    padding: 1rem;
  }
  
  .info-group h3 {
    font-size: 1.2rem;
  }
  
  /* 興趣卡片極小屏幕優化 */
  .interest-card {
    padding: 1rem;
  }
  
  .interest-image-container {
    height: 180px;
  }
  
  .interest-title {
    font-size: 1.2rem;
  }
  
  .interest-details p {
    font-size: 0.9rem;
  }
  
  /* 專題卡片極小屏幕 */
  .project-card {
    padding: 1rem;
  }
  
  .project-title-group h2 {
    font-size: 1.2rem;
  }
  
  .project-content p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  /* 活動卡片極小屏幕 */
  .activity-image-container {
    height: 150px;
  }
  
  .activity-title {
    font-size: 1.1rem;
  }
  
  .activity-list li {
    font-size: 0.85rem;
  }
  
  /* 學術成果極小屏幕 */
  .academic-title-group h2 {
    font-size: 1.3rem;
  }
  
  .academic-subtitle {
    font-size: 0.9rem;
  }
  
  /* 彈出視窗按鈕調整 */
  .popup-trigger-btn {
    width: 50px;
    height: 50px;
    right: 1rem;
    bottom: 1rem;
  }
  
  .trigger-text {
    font-size: 8px;
  }
  
  /* 個人特質調整 */
  .trait-item {
    padding: 1rem;
  }
  
  .trait-content h4 {
    font-size: 1.1rem;
  }
  
  .trait-content p {
    font-size: 0.9rem;
  }
}

/* ===== 橫屏手機優化 ===== */
@media (max-width: 768px) and (orientation: landscape) {
  .interest-image-container,
  .activity-image-container {
    height: 160px;
  }
  
  .project-card {
    padding: 1.2rem;
  }
  
  .section-header h1 {
    font-size: 2.2rem;
  }
}

/* ===== 平板響應式 ===== */
@media (min-width: 769px) and (max-width: 1024px) {
  .interest-card {
    grid-template-columns: 250px 1fr;
    gap: 1.5rem;
  }
  
  .activity-card {
    grid-template-columns: 250px 1fr;
  }
  
  .project-header {
    gap: 1.2rem;
  }
  
  .project-icon {
    width: 70px;
    height: 70px;
    font-size: 2.5rem;
  }
}
</style>
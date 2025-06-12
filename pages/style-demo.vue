<template>
  <div class="container">
    <!-- 示範標題系統 -->
    <section class="section">
      <h1 class="font-display text-center">樣式系統示範頁面</h1>
      <p class="font-body-lg text-center">展示統一樣式系統的各種組件</p>
    </section>

    <!-- 字體示範 -->
    <section class="section section-divided">
      <h2 class="font-heading-xl">字體樣式系統</h2>
      <div class="d-flex flex-col gap-md">
        <h1 class="font-display">Display - 展示標題</h1>
        <h2 class="font-heading-xl">Heading XL - 特大標題</h2>
        <h3 class="font-heading-lg">Heading LG - 大標題</h3>
        <h4 class="font-heading-md">Heading MD - 中標題</h4>
        <h5 class="font-heading-sm">Heading SM - 小標題</h5>
        <p class="font-body-lg">Body LG - 大內文：這是較大的內文字體，用於重要內容</p>
        <p class="font-body">Body - 標準內文：這是標準的內文字體，最常用的文字大小</p>
        <p class="font-body-sm">Body SM - 小內文：這是較小的內文字體，用於輔助說明</p>
        <span class="font-caption">Caption - 標籤文字：用於圖片說明或小標籤</span>
        <p class="font-gradient">漸層文字效果 - Gradient Text</p>
      </div>
    </section>

    <!-- 按鈕示範 -->
    <section class="section section-divided">
      <h2 class="font-heading-xl">按鈕樣式系統</h2>
      
      <div class="mt-lg">
        <h3 class="font-heading-md">基本按鈕類型</h3>
        <div class="d-flex gap-md mt-md flex-wrap">
          <button class="btn-base btn-primary">主要按鈕</button>
          <button class="btn-base btn-secondary">次要按鈕</button>
          <button class="btn-base btn-outline">外框按鈕</button>
          <button class="btn-base btn-ghost">透明按鈕</button>
          <button class="btn-base btn-pink">粉色按鈕</button>
        </div>
      </div>

      <div class="mt-lg">
        <h3 class="font-heading-md">按鈕大小</h3>
        <div class="d-flex gap-md mt-md items-center flex-wrap">
          <button class="btn-base btn-primary btn-sm">小按鈕</button>
          <button class="btn-base btn-primary">標準按鈕</button>
          <button class="btn-base btn-primary btn-lg">大按鈕</button>
          <button class="btn-base btn-primary btn-xl">特大按鈕</button>
        </div>
      </div>

      <div class="mt-lg">
        <h3 class="font-heading-md">特殊效果</h3>
        <div class="d-flex gap-md mt-md flex-wrap">
          <button class="btn-base btn-secondary btn-shine">閃光效果</button>
          <button class="btn-base btn-pink hover-lift">懸停上升</button>
        </div>
      </div>
    </section>

    <!-- 卡片示範 -->
    <section class="section section-divided">
      <h2 class="font-heading-xl">卡片樣式系統</h2>
      
      <div class="d-flex gap-lg mt-lg flex-wrap">
        <!-- 基礎卡片 -->
        <div class="card-base" style="width: 300px;">
          <div class="card-header">
            <h3 class="font-heading-sm">基礎卡片</h3>
          </div>
          <div class="card-body">
            <p class="font-body">這是一個基礎卡片，沒有特殊效果。</p>
          </div>
          <div class="card-footer">
            <button class="btn-base btn-outline btn-sm">了解更多</button>
          </div>
        </div>

        <!-- 懸停效果卡片 -->
        <div class="card-base card-hover" style="width: 300px;">
          <div class="card-header">
            <h3 class="font-heading-sm">懸停效果卡片</h3>
          </div>
          <div class="card-body">
            <p class="font-body">滑鼠懸停時會有上升和陰影效果。</p>
          </div>
          <div class="card-footer">
            <button class="btn-base btn-primary btn-sm">點擊試試</button>
          </div>
        </div>

        <!-- 互動式卡片 -->
        <div class="card-interactive" style="width: 300px;">
          <div class="card-body p-lg">
            <h3 class="font-heading-sm">互動式卡片</h3>
            <p class="font-body">具有閃光動畫和更豐富的互動效果。</p>
            <button class="btn-base btn-secondary btn-sm mt-md">體驗效果</button>
          </div>
        </div>
      </div>

      <div class="d-flex gap-lg mt-lg flex-wrap">
        <!-- 漸層卡片 -->
        <div class="card-base card-gradient" style="width: 300px;">
          <div class="card-body p-lg">
            <h3 class="font-heading-sm" style="color: white;">漸層卡片</h3>
            <p style="color: rgba(255,255,255,0.9);">具有漸層背景的卡片，適合特殊內容展示。</p>
            <button class="btn-base btn-ghost btn-sm mt-md">查看詳情</button>
          </div>
        </div>

        <!-- 玻璃效果卡片 -->
        <div class="card-base card-glass" style="width: 300px; background-image: linear-gradient(45deg, #ff6b6b, #4ecdc4); padding: 2px;">
          <div class="card-body p-lg" style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 10px;">
            <h3 class="font-heading-sm" style="color: white;">玻璃效果卡片</h3>
            <p style="color: rgba(255,255,255,0.9);">毛玻璃效果，現代感十足。</p>
            <button class="btn-base btn-ghost btn-sm mt-md">探索更多</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 動畫示範 -->
    <section class="section section-divided">
      <h2 class="font-heading-xl">動畫效果系統</h2>
      
      <div class="d-flex gap-lg mt-lg flex-wrap items-center">
        <div class="animate-pulse p-md rounded-lg shadow-md" style="background: var(--background-secondary);">
          <span class="font-body">脈動動畫</span>
        </div>
        
        <div class="animate-bounce p-md rounded-lg shadow-md" style="background: var(--background-secondary);">
          <span class="font-body">彈跳動畫</span>
        </div>
        
        <div class="floating-animation p-md rounded-lg shadow-md" style="background: var(--background-secondary);">
          <span class="font-body">漂浮動畫</span>
        </div>

        <div class="hover-lift p-md rounded-lg shadow-md" style="background: var(--background-secondary); cursor: pointer;">
          <span class="font-body">懸停上升</span>
        </div>
      </div>
    </section>

    <!-- 工具類別示範 -->
    <section class="section">
      <h2 class="font-heading-xl">工具類別示範</h2>
      
      <div class="mt-lg">
        <h3 class="font-heading-md">間距和佈局</h3>
        <div class="d-flex gap-md mt-md">
          <div class="p-md rounded-md shadow-sm" style="background: var(--background-secondary);">
            <span class="font-body-sm">間距 MD</span>
          </div>
          <div class="p-lg rounded-lg shadow-md" style="background: var(--background-secondary);">
            <span class="font-body-sm">間距 LG</span>
          </div>
          <div class="p-xl rounded-lg shadow-lg" style="background: var(--background-secondary);">
            <span class="font-body-sm">間距 XL</span>
          </div>
        </div>
      </div>

      <div class="mt-lg">
        <h3 class="font-heading-md">文字對齊</h3>
        <div class="mt-md">
          <p class="font-body text-left p-md rounded-md shadow-sm" style="background: var(--background-secondary);">靠左對齊的文字</p>
          <p class="font-body text-center p-md rounded-md shadow-sm mt-sm" style="background: var(--background-secondary);">置中對齊的文字</p>
          <p class="font-body text-right p-md rounded-md shadow-sm mt-sm" style="background: var(--background-secondary);">靠右對齊的文字</p>
        </div>
      </div>

      <div class="mt-lg">
        <h3 class="font-heading-md">圓角和陰影</h3>
        <div class="d-flex gap-md mt-md flex-wrap">
          <div class="p-md rounded-sm shadow-sm" style="background: var(--background-secondary);">
            <span class="font-body-sm">小圓角 + 小陰影</span>
          </div>
          <div class="p-md rounded-md shadow-md" style="background: var(--background-secondary);">
            <span class="font-body-sm">中圓角 + 中陰影</span>
          </div>
          <div class="p-md rounded-lg shadow-lg" style="background: var(--background-secondary);">
            <span class="font-body-sm">大圓角 + 大陰影</span>
          </div>
          <div class="p-md rounded-full shadow-md" style="background: var(--background-secondary);">
            <span class="font-body-sm">完全圓角</span>
          </div>
        </div>
      </div>    </section>

    <!-- 圖片樣式系統示範 -->
    <section class="section section-divided">
      <h2 class="font-heading-xl">圖片樣式系統</h2>
      
      <div class="mt-lg">
        <h3 class="font-heading-md">圖片尺寸和形狀</h3>
        <div class="d-flex gap-lg mt-md flex-wrap items-center">
          <div>
            <p class="font-body-sm mb-sm">圓形頭像</p>
            <div class="image-circle image-border" style="width: 80px; height: 80px; background: linear-gradient(45deg, #ff6b6b, #4ecdc4);"></div>
          </div>
          
          <div>
            <p class="font-body-sm mb-sm">小正方形</p>
            <div class="image-square-sm image-rounded image-shadow" style="background: linear-gradient(135deg, #667eea, #764ba2);"></div>
          </div>
          
          <div>
            <p class="font-body-sm mb-sm">中正方形</p>
            <div class="image-square-md image-rounded-lg image-shadow" style="background: linear-gradient(45deg, #ff0844, #ffb199);"></div>
          </div>
        </div>
      </div>

      <div class="mt-lg">
        <h3 class="font-heading-md">圖片比例效果</h3>
        <div class="grid grid-cols-3 gap-md mt-md">
          <div>
            <p class="font-body-sm mb-sm">16:9 比例</p>
            <div class="image-rect-16-9 image-rounded image-shadow" style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4);"></div>
          </div>
          
          <div>
            <p class="font-body-sm mb-sm">4:3 比例</p>
            <div class="image-rect-4-3 image-rounded image-shadow" style="background: linear-gradient(135deg, #667eea, #764ba2);"></div>
          </div>
          
          <div>
            <p class="font-body-sm mb-sm">3:2 比例</p>
            <div class="image-rect-3-2 image-rounded image-shadow" style="background: linear-gradient(45deg, #ff0844, #ffb199);"></div>
          </div>
        </div>
      </div>

      <div class="mt-lg">
        <h3 class="font-heading-md">圖片懸停效果</h3>
        <div class="d-flex gap-lg mt-md flex-wrap">
          <div>
            <p class="font-body-sm mb-sm">懸停放大</p>
            <div class="image-hover-zoom image-square-md image-rounded-lg image-shadow" style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4);"></div>
          </div>
          
          <div>
            <p class="font-body-sm mb-sm">懸停上浮</p>
            <div class="image-hover-lift image-square-md image-rounded-lg" style="background: linear-gradient(135deg, #667eea, #764ba2);"></div>
          </div>
          
          <div>
            <p class="font-body-sm mb-sm">懸停遮罩</p>
            <div class="image-overlay image-square-md image-rounded-lg image-shadow" style="background: linear-gradient(45deg, #ff0844, #ffb199);"></div>
          </div>
        </div>
      </div>

      <div class="mt-lg">
        <h3 class="font-heading-md">圖片網格佈局</h3>
        <div class="image-grid mt-md">
          <div class="image-responsive image-rounded image-hover-zoom" style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4); height: 150px;"></div>
          <div class="image-responsive image-rounded image-hover-zoom" style="background: linear-gradient(135deg, #667eea, #764ba2); height: 150px;"></div>
          <div class="image-responsive image-rounded image-hover-zoom" style="background: linear-gradient(45deg, #ff0844, #ffb199); height: 150px;"></div>
          <div class="image-responsive image-rounded image-hover-zoom" style="background: linear-gradient(90deg, #00d2ff, #3a7bd5); height: 150px;"></div>
        </div>
      </div>
      
      <div class="mt-lg">
        <h3 class="font-heading-md">圖片邊框和陰影</h3>
        <div class="d-flex gap-lg mt-md flex-wrap">
          <div>
            <p class="font-body-sm mb-sm">主色邊框</p>
            <div class="image-square-sm image-border-primary image-rounded" style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4);"></div>
          </div>
          
          <div>
            <p class="font-body-sm mb-sm">次色邊框</p>
            <div class="image-square-sm image-border-secondary image-rounded" style="background: linear-gradient(135deg, #667eea, #764ba2);"></div>
          </div>
          
          <div>
            <p class="font-body-sm mb-sm">大陰影</p>
            <div class="image-square-sm image-shadow-lg image-rounded" style="background: linear-gradient(45deg, #ff0844, #ffb199);"></div>
          </div>
          
          <div>
            <p class="font-body-sm mb-sm">特大陰影</p>
            <div class="image-square-sm image-shadow-xl image-rounded" style="background: linear-gradient(90deg, #00d2ff, #3a7bd5);"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 使用說明 -->
    <section class="section">
      <div class="card-base p-xl">
        <h2 class="font-heading-lg text-center">如何使用這些樣式</h2>
        <div class="mt-lg">
          <p class="font-body">這個樣式系統已經整合到整個網站中，你可以：</p>
          <ul class="mt-md">
            <li class="font-body">直接使用類別名稱，如 <code>class="btn-base btn-primary"</code></li>
            <li class="font-body">組合多個類別來達到想要的效果</li>
            <li class="font-body">使用 CSS 變數來自定義樣式，如 <code>color: var(--primary-color)</code></li>
            <li class="font-body">參考 <code>STYLE_GUIDE.md</code> 文檔獲取詳細說明</li>
          </ul>
        </div>
        <div class="text-center mt-lg">
          <button class="btn-base btn-primary btn-lg" @click="goBack">返回主頁</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const goBack = () => {
  navigateTo('/')
}
</script>

<style scoped>
code {
  background: var(--background-accent);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  font-family: 'Courier New', monospace;
  font-size: var(--text-sm);
  color: var(--accent-color);
}

ul {
  padding-left: var(--space-xl);
}

li {
  margin-bottom: var(--space-sm);
}
</style>

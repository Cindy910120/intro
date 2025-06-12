# 組件遷移指南

## 概述
這份文檔說明如何將現有的組件遷移到新的模組化統一樣式系統。

## 新的模組化架構

### CSS 模組結構
現在樣式系統分為以下獨立模組：

1. **variables.css** - 所有 CSS 變數（顏色、間距、字體等）
2. **base.css** - 基礎重置樣式和全域設定
3. **colors.css** - 色彩系統和主題
4. **typography.css** - 字體系統和文字樣式
5. **buttons.css** - 按鈕組件系統
6. **cards.css** - 卡片組件系統
7. **layout.css** - 布局、容器、網格系統
8. **animations.css** - 動畫和過渡效果
9. **utilities.css** - 工具類（間距、對齊等）
10. **main.css** - 主導入文件

### 優點
- **更好的組織**：每個模組負責特定功能
- **更易維護**：修改特定功能時只需編輯對應模組
- **更好的性能**：可以選擇性載入需要的模組
- **團隊協作**：不同開發者可以同時編輯不同模組

## 遷移步驟

### 1. AppHeader.vue 建議更新

**現有問題：**
- 使用了內聯樣式定義
- 重複的漸層動畫代碼
- 響應式設計分散在各處

**建議更新：**

```vue
<template>
  <header class="navbar">
    <div class="container">
      <div class="header-container">
        <div class="site-title">
          <h1 class="font-display">林芊蓉的網站</h1>
        </div>
        <nav>
          <ul class="nav-list">
            <li><NuxtLink to="/" class="nav-link">首頁</NuxtLink></li>
            <li><NuxtLink to="/about" class="nav-link">自我介紹</NuxtLink></li>
            <li><NuxtLink to="/project" class="nav-link">期末專題網頁介紹</NuxtLink></li>
            <li><NuxtLink to="/data" class="nav-link">技術學習筆記</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  width: 100%;
  background-color: var(--background-primary);
  padding: var(--space-lg) 0;
  box-shadow: var(--shadow-sm);
  min-height: 9vh;
  display: flex;
  align-items: center;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.site-title {
  flex: 0 0 30%;
}

nav {
  flex: 0 0 70%;
  display: flex;
  justify-content: center;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
}

.nav-list li {
  text-align: center;
  flex: 1;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: var(--space-md);
  }
  
  .site-title, nav {
    flex: none;
  }
  
  .nav-list {
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--space-md);
  }
  
  .nav-list li {
    flex: none;
  }
}
</style>
```

### 2. PopupModal.vue 建議更新

**使用新的樣式類別：**

```vue
<template>
  <div v-if="isVisible" class="popup-overlay" @click="closeModal">
    <div class="card-base card-glass popup-modal" @click.stop>
      <button class="btn-base btn-ghost close-button" @click="closeModal">
        <span>&times;</span>
      </button>
      
      <div class="card-body">
        <div class="modal-header">
          <h2 class="font-heading-lg text-center">{{ title || '提示訊息' }}</h2>
        </div>
        
        <div class="modal-body mt-lg">
          <div v-if="$slots.default" class="custom-content">
            <slot></slot>
          </div>
          <div v-else class="default-content text-center">
            <div class="font-display animate-bounce">💡</div>
            <p class="font-body mt-md">{{ message || '這是一個彈跳視窗的預設內容' }}</p>
          </div>
        </div>
        
        <div class="modal-footer mt-lg d-flex gap-md justify-center" v-if="showFooter">
          <button class="btn-base btn-primary" @click="handleConfirm">
            {{ confirmText || '確認' }}
          </button>
          <button class="btn-base btn-outline" @click="closeModal">
            {{ cancelText || '取消' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn var(--transition-base) ease-out;
}

.popup-modal {
  max-width: 500px;
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.close-button {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  width: 35px;
  height: 35px;
  border-radius: var(--radius-full);
  z-index: 10;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: scale(0.7) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
```

### 3. data.vue 頁面更新

**使用新的樣式類別：**

```vue
<template>
  <div class="container">
    <section class="section">
      <h1 class="font-heading-xl text-center">技術學習筆記集</h1>
      <p class="font-body-lg text-center">這裡收集了我在學習過程中整理的各項技術筆記與學習心得</p>
    </section>

    <div class="content-sections">
      <section class="section section-divided">
        <h2 class="font-heading-lg">開發工具學習筆記</h2>
        <div class="cards-grid">
          <div class="card-base card-interactive" @click="openLink('...')">
            <div class="card-thumbnail github">
              <img src="/images/github-logo.svg" alt="GitHub Logo" class="fallback-img" />
            </div>
            <div class="card-body">
              <h3 class="font-heading-md">GitHub 版本控制完整指南</h3>
              <p class="font-body">涵蓋 Git 基本指令、分支管理策略...</p>
              <div class="card-footer">
                <span class="font-body-sm gradient-text">點擊查看全文</span>
              </div>
            </div>
          </div>
          <!-- 其他卡片... -->
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-lg);
}

.card-thumbnail {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card-thumbnail.github {
  background: linear-gradient(135deg, #2b3137 0%, #24292e 100%);
}

.fallback-img {
  max-width: 50%;
  max-height: 50%;
  object-fit: contain;
}
</style>
```

### 4. about.vue 頁面更新建議

**主要更新項目：**

1. **標題系統更新：**
```html
<!-- 替換現有的 h1, h2, h3 -->
<h1 class="font-heading-xl">自我介紹</h1>
<h2 class="font-heading-lg">姓名 : 林芊蓉</h2>
<h3 class="font-heading-md">學校</h3>
```

2. **按鈕更新：**
```html
<!-- 徵男友按鈕 -->
<button class="btn-base btn-pink btn-shine popup-trigger-btn" @click="openPopup">
  <span class="trigger-icon">💕</span>
  <span class="trigger-text">徵男友</span>
</button>

<!-- 彈跳視窗按鈕 -->
<button class="btn-base btn-pink btn-lg">我有興趣 💕</button>
<button class="btn-base btn-outline">下次再說</button>
```

3. **卡片樣式更新：**
```html
<!-- 專案卡片 -->
<div class="card-base card-hover project-item">
  <div class="card-body">
    <div class="project-title">
      <h3 class="font-heading-md">四軸無人機軌跡追蹤與飛行控制設計</h3>
      <span class="font-caption">大學畢業專題</span>
    </div>
    <!-- 其他內容 -->
  </div>
</div>
```

4. **興趣展示區域：**
```html
<div class="card-base interest-item">
  <div class="activity-image-compact">
    <!-- 輪播圖片 -->
  </div>
  <div class="card-body">
    <h3 class="font-heading-md">書法</h3>
    <p class="font-body">從小學習書法已有十年...</p>
  </div>
</div>
```

### 5. project.vue 頁面更新

**使用新的樣式類別：**

```html
<div class="container">
  <section class="section text-center">
    <h1 class="font-display animate-fadeInUp">期末專題網頁介紹</h1>
    <div class="title-underline m-auto mt-md"></div>
  </section>

  <section class="section">
    <div class="project-intro">
      <div class="card-base card-gradient intro-card">
        <div class="card-body p-xl">
          <h2 class="font-heading-lg" style="color: white;">專題概述</h2>
          <p class="font-body" style="color: rgba(255,255,255,0.9);">這是一個關於...</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 專題亮點 -->
  <section class="section">
    <h2 class="font-heading-xl text-center">
      <span class="gradient-text">專題亮點</span>
      <span class="animate-bounce">✨</span>
    </h2>
    <div class="highlights-grid">
      <div class="card-base card-interactive highlight-item">
        <div class="card-body text-center p-lg">
          <div class="font-display">🎨</div>
          <h3 class="font-heading-md">視覺設計</h3>
          <p class="font-body">現代化的UI設計</p>
        </div>
      </div>
    </div>
  </section>
</div>
```

## 遷移檢查清單

### ✅ 字體系統
- [ ] 替換所有 `h1, h2, h3` 標籤為對應的字體類別
- [ ] 更新內文段落使用 `font-body` 系列
- [ ] 特殊文字使用 `font-gradient` 或其他效果類別

### ✅ 按鈕系統
- [ ] 統一所有按鈕使用 `btn-base` + 類型類別
- [ ] 根據重要性選擇 `btn-primary`, `btn-secondary` 等
- [ ] 添加適當的大小類別 `btn-sm`, `btn-lg` 等

### ✅ 卡片系統
- [ ] 將容器改為 `card-base` + 效果類別
- [ ] 使用 `card-header`, `card-body`, `card-footer` 結構
- [ ] 添加適當的互動效果

### ✅ 容器系統
- [ ] 使用 `container` 或 `container-sm` 包裝內容
- [ ] 使用 `section` 分隔不同區域
- [ ] 適當添加 `section-divided` 分隔線

### ✅ 工具類別
- [ ] 使用間距類別替代自定義 margin/padding
- [ ] 使用佈局類別 `d-flex`, `justify-center` 等
- [ ] 使用文字對齊類別

### ✅ 響應式設計
- [ ] 移除重複的媒體查詢代碼
- [ ] 使用 `hidden-mobile`, `hidden-desktop` 控制顯示
- [ ] 依賴全局響應式規則

## 遷移優先級

1. **高優先級：** AppHeader.vue - 影響全站導航
2. **中優先級：** about.vue - 主要內容頁面
3. **中優先級：** data.vue - 已部分完成
4. **低優先級：** project.vue - 視覺效果頁面
5. **低優先級：** PopupModal.vue - 功能性組件

## 測試建議

1. **視覺一致性測試：** 確保所有頁面使用相同的設計語言
2. **響應式測試：** 在不同設備尺寸下測試
3. **互動效果測試：** 確保懸停和點擊效果正常
4. **性能測試：** 確保樣式文件載入不影響性能

這個遷移過程可以逐步進行，優先處理高影響的組件，然後逐漸完善其他部分。

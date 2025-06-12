# 網站樣式系統使用指南

## 概述
這個樣式系統為整個網站提供了統一的設計語言，採用模組化架構，包含顏色、間距、字體、按鈕、卡片等所有基礎樣式組件。

## 模組化架構
樣式系統現在分為以下模組：

- **variables.css** - CSS 變數定義
- **base.css** - 基礎重置樣式
- **colors.css** - 色彩系統
- **typography.css** - 字體系統
- **buttons.css** - 按鈕系統
- **cards.css** - 卡片系統
- **layout.css** - 布局系統
- **animations.css** - 動畫系統
- **images.css** - 圖片系統
- **utilities.css** - 工具類
- **main.css** - 主要導入文件

## 設計理念
- **一致性**：統一的視覺風格和互動體驗
- **可維護性**：集中管理樣式，易於修改和擴展
- **響應式**：適配各種設備尺寸
- **模組化**：樣式組件可組合使用
- **可擴展**：易於添加新的樣式模組

## 如何使用

### 1. CSS 變數系統
所有的顏色、間距、字體大小都定義在 `:root` 中，可以直接使用：

```css
.my-element {
  color: var(--primary-color);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
}
```

### 2. 字體樣式類別

#### 標題字體
- `.font-display` - 最大的展示標題（首頁大標題）
- `.font-heading-xl` - 特大標題（頁面主標題）
- `.font-heading-lg` - 大標題（章節標題）
- `.font-heading-md` - 中標題（小節標題）
- `.font-heading-sm` - 小標題（子標題）

#### 內文字體
- `.font-body-lg` - 大內文（重要內容）
- `.font-body` - 標準內文
- `.font-body-sm` - 小內文（輔助說明）
- `.font-caption` - 標籤文字（圖片說明、標籤等）

#### 特殊效果
- `.font-gradient` - 漸層色彩文字

**使用範例：**
```html
<h1 class="font-display">網站主標題</h1>
<h2 class="font-heading-xl">章節標題</h2>
<p class="font-body">這是標準內文段落</p>
<span class="font-caption">輔助說明文字</span>
```

### 3. 按鈕樣式系統

#### 基本按鈕類型
- `.btn-primary` - 主要按鈕（重要操作）
- `.btn-secondary` - 次要按鈕（一般操作）
- `.btn-outline` - 外框按鈕（較不重要的操作）
- `.btn-ghost` - 透明按鈕（輕微操作）
- `.btn-pink` - 粉色按鈕（特殊主題，如徵男友）

#### 按鈕大小
- `.btn-sm` - 小按鈕
- `.btn-lg` - 大按鈕
- `.btn-xl` - 特大按鈕

#### 特殊效果
- `.btn-shine` - 閃光效果按鈕

**使用範例：**
```html
<button class="btn-base btn-primary btn-lg">主要操作</button>
<button class="btn-base btn-outline btn-sm">次要操作</button>
<button class="btn-base btn-pink btn-shine">我有興趣 💕</button>
```

### 4. 卡片樣式系統

#### 基本卡片
- `.card-base` - 基礎卡片樣式
- `.card-hover` - 懸停效果卡片
- `.card-interactive` - 互動式卡片（含動畫）

#### 特殊效果卡片
- `.card-gradient` - 漸層背景卡片
- `.card-glass` - 玻璃材質效果卡片

#### 卡片內容區域
- `.card-header` - 卡片頭部
- `.card-body` - 卡片主體
- `.card-footer` - 卡片底部

**使用範例：**
```html
<div class="card-base card-hover">
  <div class="card-header">
    <h3 class="font-heading-md">卡片標題</h3>
  </div>
  <div class="card-body">
    <p class="font-body">卡片內容</p>
  </div>
  <div class="card-footer">
    <button class="btn-base btn-primary">查看更多</button>
  </div>
</div>
```

### 5. 圖片樣式系統

#### 基礎圖片類別
- `.image-responsive` - 響應式圖片（自動調整大小）
- `.image-fluid` - 流動式圖片（寬度100%）
- `.image-cover` - 覆蓋式顯示（保持比例填滿容器）
- `.image-contain` - 包含式顯示（完整顯示圖片）

#### 圖片圓角
- `.image-rounded` - 標準圓角
- `.image-rounded-lg` - 大圓角
- `.image-rounded-full` - 全圓角
- `.image-circle` - 圓形圖片（1:1比例）

#### 圖片尺寸
- `.image-xs` - 極小尺寸（2rem × 2rem）
- `.image-sm` - 小尺寸（3rem × 3rem）
- `.image-md` - 中等尺寸（4rem × 4rem）
- `.image-lg` - 大尺寸（6rem × 6rem）
- `.image-xl` - 特大尺寸（8rem × 8rem）

#### 正方形圖片
- `.image-square-sm` - 小正方形（100px）
- `.image-square-md` - 中正方形（150px）
- `.image-square-lg` - 大正方形（200px）
- `.image-square-xl` - 特大正方形（300px）

#### 圖片比例
- `.image-rect-16-9` - 16:9 比例
- `.image-rect-4-3` - 4:3 比例
- `.image-rect-3-2` - 3:2 比例

#### 圖片效果
- `.image-shadow` - 圖片陰影
- `.image-border` - 圖片邊框
- `.image-hover-zoom` - 懸停放大效果
- `.image-hover-lift` - 懸停上浮效果
- `.image-grayscale` - 灰階效果

#### 圖片遮罩
- `.image-overlay` - 懸停遮罩效果
- `.image-overlay-dark` - 深色遮罩
- `.image-overlay-primary` - 主色遮罩

#### 圖片網格
- `.image-grid` - 自適應網格
- `.image-grid-fixed-2` - 固定2列網格
- `.image-grid-fixed-3` - 固定3列網格
- `.image-grid-fixed-4` - 固定4列網格

**使用範例：**
```html
<!-- 響應式圓角圖片 -->
<img src="photo.jpg" alt="照片" class="image-responsive image-rounded-lg image-shadow">

<!-- 圓形頭像 -->
<img src="avatar.jpg" alt="頭像" class="image-circle image-border">

<!-- 16:9 比例的覆蓋式圖片 -->
<div class="image-container">
  <img src="banner.jpg" alt="橫幅" class="image-rect-16-9 image-cover">
</div>

<!-- 圖片網格 -->
<div class="image-grid">
  <img src="pic1.jpg" alt="圖片1" class="image-responsive image-hover-zoom">
  <img src="pic2.jpg" alt="圖片2" class="image-responsive image-hover-zoom">
  <img src="pic3.jpg" alt="圖片3" class="image-responsive image-hover-zoom">
</div>
```

### 6. 容器系統

- `.container` - 標準容器（最大寬度1200px）
- `.container-fluid` - 全寬容器
- `.container-sm` - 小容器（最大寬度800px）
- `.section` - 區段容器

### 7. 工具類別

#### 文字對齊
- `.text-center` - 置中對齊
- `.text-left` - 靠左對齊
- `.text-right` - 靠右對齊

#### 佈局
- `.d-flex` - 彈性佈局
- `.justify-center` - 水平置中
- `.items-center` - 垂直置中
- `.flex-col` - 垂直排列
- `.gap-md` - 間距

#### 間距
- `.mt-lg` - 上邊距大
- `.p-md` - 內邊距中等

#### 圓角和陰影
- `.rounded-lg` - 大圓角
- `.shadow-md` - 中等陰影

### 8. 響應式設計

#### 隱藏/顯示類別
- `.hidden-mobile` - 手機版隱藏
- `.hidden-desktop` - 桌面版隱藏

## 顏色系統

### 主要顏色
- `--primary-color: #41b883` - 主色（綠色）
- `--secondary-color: #ff6b6b` - 次要色（紅色）
- `--accent-color: #667eea` - 強調色（藍色）

### 文字顏色
- `--text-primary: #2c3e50` - 主要文字
- `--text-secondary: #34495e` - 次要文字
- `--text-muted: #666` - 輔助文字

### 背景顏色
- `--background-primary: #ffffff` - 主背景
- `--background-secondary: #f8f9fa` - 次背景

## 實際應用範例

### 更新現有頁面
1. 將現有的 `h1` 標籤改為 `<h1 class="font-heading-xl">`
2. 將按鈕樣式統一為 `<button class="btn-base btn-primary">`
3. 將卡片容器改為 `<div class="card-base card-hover">`

### 創建新組件
```html
<div class="container">
  <section class="section">
    <h2 class="font-heading-xl text-center">新功能</h2>
    <div class="d-flex gap-lg justify-center">
      <div class="card-base card-interactive">
        <div class="card-body p-lg">
          <h3 class="font-heading-md">功能標題</h3>
          <p class="font-body">功能描述</p>
          <button class="btn-base btn-primary btn-lg">了解更多</button>
        </div>
      </div>
    </div>
  </section>
</div>
```

## 維護指南

### 修改顏色
如需更改主色調，只需修改 `:root` 中的 CSS 變數即可：
```css
:root {
  --primary-color: #新顏色;
}
```

### 添加新樣式
1. 在對應的區塊中添加新的樣式類別
2. 遵循現有的命名規則
3. 使用 CSS 變數保持一致性

### 擴展建議
- 可以添加更多按鈕變體（如警告、危險按鈕）
- 可以添加更多動畫效果
- 可以添加表格、表單等專用樣式

這個樣式系統可以大大簡化後續的開發和維護工作，確保整個網站的設計一致性。

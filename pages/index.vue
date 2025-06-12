<template>
  <div class="page-container">
    <!-- 動態背景元素 -->
    <div class="animated-background">
      <div class="shape bg-circle-lg"></div>
      <div class="shape bg-circle-md"></div>
      <div class="shape bg-circle-sm"></div>
      <div class="shape bg-square-lg"></div>
      <div class="shape bg-square-md"></div>
      <div class="shape bg-triangle-lg"></div>
      <div class="shape bg-triangle-sm"></div>
      <div class="shape bg-rect-lg"></div>
      <div class="shape bg-rect-sm"></div>
      <div class="shape bg-hexagon"></div>
      <div class="shape bg-star"></div>
      <div class="floating-dots">
        <div class="floating-dot"></div>
        <div class="floating-dot"></div>
        <div class="floating-dot"></div>
        <div class="floating-dot"></div>
        <div class="floating-dot"></div>
      </div>
    </div>

    <div class="container main-content">
      <h1 class="home-title">歡迎來到我的網站</h1>
      <p class="home-subtitle">這是我的個人網站首頁</p>
      
      <div class="home-links">
        <NuxtLink to="/about" class="home-link-button">查看自我介紹</NuxtLink>
        <NuxtLink to="/project" class="home-link-button">查看期末專題網頁介紹</NuxtLink>
        <NuxtLink to="/data" class="home-link-button">查看各項學習筆記</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// 這裡可以加入任何需要的邏輯或組件
</script>

<style scoped>
/* 使用模組化 CSS 系統，無需額外樣式 */
/* 所有樣式都在 effects.css 模組中定義 */
</style>
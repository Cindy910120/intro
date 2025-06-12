<template>
  <header class="navbar">
    <div class="header-container">
      <div class="site-title">
        <h1 class="site-title-text">林芊蓉的網站</h1>
      </div>
      <nav class="nav-section">
        <ul class="nav-list">
          <li><NuxtLink to="/" class="nav-link">首頁</NuxtLink></li>
          <li><NuxtLink to="/about" class="nav-link">自我介紹</NuxtLink></li>
          <li><NuxtLink to="/project" class="nav-link">期末專題網頁介紹</NuxtLink></li>
          <li><NuxtLink to="/data" class="nav-link">技術學習筆記</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
/* 使用模組化 CSS 系統，無需額外樣式 */
/* 所有樣式都在 navigation.css 模組中定義 */
</style>
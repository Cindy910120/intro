<template>
  <header class="navbar">
    <div class="header-container">
      <div class="site-title">
        <h1 class="site-title-text">林芊蓉的網站</h1>
      </div>
      <nav class="nav-section">
        <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="切換導航選單">
          ☰
        </button>        <ul class="nav-list" :class="{ 'mobile-active': isMobileMenuOpen }">
          <li><NuxtLink to="/" class="nav-link" @click="closeMobileMenu">首頁</NuxtLink></li>
          <li><NuxtLink to="/about" class="nav-link" @click="closeMobileMenu">自我介紹</NuxtLink></li>
          <li><NuxtLink to="/project" class="nav-link" @click="closeMobileMenu">期末專題</NuxtLink></li>
          <li><NuxtLink to="/data" class="nav-link" @click="closeMobileMenu">技術筆記</NuxtLink></li>
          <li><NuxtLink to="/online" class="nav-link" @click="closeMobileMenu">ONLINE ROSE</NuxtLink></li>
          <li><NuxtLink to="/game" class="nav-link" @click="closeMobileMenu">小遊戲</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// 點擊外部關閉選單
const handleClickOutside = (event) => {
  const navbar = document.querySelector('.navbar')
  if (navbar && !navbar.contains(event.target)) {
    closeMobileMenu()
  }
}

// 監聽視窗大小變化
const handleResize = () => {
  if (window.innerWidth > 768) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* 使用模組化 CSS 系統，無需額外樣式 */
/* 所有樣式都在 navigation.css 模組中定義 */
</style>
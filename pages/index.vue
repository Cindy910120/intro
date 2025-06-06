<template>
  <div class="container">
    <h1>歡迎來到我的網站</h1>
    <p>這是我的個人網站首頁</p>
    
    <div class="links">
      <NuxtLink to="/about" class="link-button">查看自我介紹</NuxtLink>
      <NuxtLink to="/project" class="link-button">查看期末專題網頁介紹</NuxtLink>
      <NuxtLink to="/data" class="link-button">查看各項資料</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// 這裡可以加入任何需要的邏輯或組件
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.links {
  margin-top: 2rem;
}

.link-button {
  display: inline-block;
  background-color: #41b883;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.link-button:hover {
  background-color: #34495e;
}
</style>
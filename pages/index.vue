<template>
  <div class="page-container">
    <!-- 動態背景元素 -->
    <div class="animated-background">
      <div class="shape circle1"></div>
      <div class="shape circle2"></div>
      <div class="shape square1"></div>
      <div class="shape triangle1"></div>
      <div class="shape rect1"></div>
      <div class="shape rect2"></div>
    </div>

    <div class="container">
      <h1>歡迎來到我的網站</h1>
      <p>這是我的個人網站首頁</p>
      
      <div class="links">
        <NuxtLink to="/about" class="link-button">查看自我介紹</NuxtLink>
        <NuxtLink to="/project" class="link-button">查看期末專題網頁介紹</NuxtLink>
        <NuxtLink to="/data" class="link-button">查看各項資料</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// 這裡可以加入任何需要的邏輯或組件
</script>

<style scoped>
.page-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}

/* 動態背景樣式 */
.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.circle1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #41b883, transparent);
  top: -100px;
  left: -100px;
  animation: float 20s infinite;
}

.circle2 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, #35495e, transparent);
  bottom: -50px;
  right: -50px;
  animation: float 15s infinite reverse;
}

.square1 {
  width: 150px;
  height: 150px;
  background: #41b883;
  border-radius: 25px;
  top: 40%;
  left: 20px;
  animation: rotate 25s infinite;
}

.triangle1 {
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 150px solid rgba(65, 184, 131, 0.2);
  border-radius: 0;
  right: 15%;
  top: 30%;
  animation: float 18s infinite;
}

.rect1 {
  width: 200px;
  height: 100px;
  background: rgba(53, 73, 94, 0.2);
  border-radius: 20px;
  top: 70%;
  right: 30%;
  animation: rotate 30s infinite reverse;
}

.rect2 {
  width: 150px;
  height: 80px;
  background: rgba(65, 184, 131, 0.15);
  border-radius: 20px;
  bottom: 20%;
  left: 35%;
  animation: float 22s infinite 2s;
}

@keyframes float {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(50px, -30px) rotate(5deg);
  }
  50% {
    transform: translate(10px, 50px) rotate(0deg);
  }
  75% {
    transform: translate(-30px, 20px) rotate(-5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) translate(0, 0);
  }
  25% {
    transform: rotate(90deg) translate(30px, 20px);
  }
  50% {
    transform: rotate(180deg) translate(10px, -30px);
  }
  75% {
    transform: rotate(270deg) translate(-20px, 10px);
  }
  100% {
    transform: rotate(360deg) translate(0, 0);
  }
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-top: 10vh;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.link-button {
  display: inline-block;
  background-color: #41b883;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(65, 184, 131, 0.2);
}

.link-button:hover {
  background-color: #34495e;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(52, 73, 94, 0.3);
}
</style>
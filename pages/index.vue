<template>
  <div class="page-container">    <!-- 動態背景元素 -->
    <div class="animated-background">
      <div class="shape circle1"></div>
      <div class="shape circle2"></div>
      <div class="shape circle3"></div>
      <div class="shape square1"></div>
      <div class="shape square2"></div>
      <div class="shape triangle1"></div>
      <div class="shape triangle2"></div>
      <div class="shape rect1"></div>
      <div class="shape rect2"></div>
      <div class="shape hexagon1"></div>
      <div class="shape star1"></div>
      <div class="floating-dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>

    <div class="container">
      <h1>歡迎來到我的網站</h1>
      <p>這是我的個人網站首頁</p>
      
      <div class="links">
        <NuxtLink to="/about" class="link-button">查看自我介紹</NuxtLink>
        <NuxtLink to="/project" class="link-button">查看期末專題網頁介紹</NuxtLink>
        <NuxtLink to="/data" class="link-button">查看各項學習筆記</NuxtLink>
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
  min-height: 67vh;
  overflow: hidden;
  background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 50%, #f7f1ff 100%);
  animation: backgroundShift 30s ease-in-out infinite;
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

.circle3 {
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, #ff6b6b, transparent);
  top: 60%;
  left: 80%;
  animation: pulse 8s infinite;
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

.square2 {
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 15px;
  top: 10%;
  right: 25%;
  animation: bounce 12s infinite;
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

.triangle2 {
  width: 0;
  height: 0;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  border-bottom: 90px solid rgba(255, 107, 107, 0.3);
  border-radius: 0;
  left: 10%;
  bottom: 30%;
  animation: wiggle 10s infinite;
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

.hexagon1 {
  width: 120px;
  height: 104px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  position: relative;
  top: 20%;
  right: 10%;
  opacity: 0.3;
  animation: spin 20s infinite;
}

.hexagon1:before,
.hexagon1:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
}

.hexagon1:before {
  bottom: 100%;
  border-bottom: 30px solid;
  border-bottom-color: inherit;
}

.hexagon1:after {
  top: 100%;
  border-top: 30px solid;
  border-top-color: inherit;
}

.star1 {
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 30px solid rgba(255, 193, 7, 0.4);
  position: relative;
  top: 80%;
  left: 70%;
  animation: twinkle 6s infinite;
  transform: rotate(35deg);
}

.star1:before {
  content: '';
  position: absolute;
  left: -40px;
  top: -20px;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 30px solid rgba(255, 193, 7, 0.4);
  transform: rotate(-70deg);
}

.star1:after {
  content: '';
  position: absolute;
  left: -40px;
  top: 3px;
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 30px solid rgba(255, 193, 7, 0.4);
  transform: rotate(70deg);
}

.floating-dots {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(65, 184, 131, 0.6);
  border-radius: 50%;
  animation: floatDots 15s infinite linear;
}

.dot:nth-child(1) {
  left: 10%;
  animation-delay: 0s;
  animation-duration: 15s;
}

.dot:nth-child(2) {
  left: 30%;
  animation-delay: 3s;
  animation-duration: 18s;
}

.dot:nth-child(3) {
  left: 50%;
  animation-delay: 6s;
  animation-duration: 12s;
}

.dot:nth-child(4) {
  left: 70%;
  animation-delay: 9s;
  animation-duration: 20s;
}

.dot:nth-child(5) {
  left: 90%;
  animation-delay: 12s;
  animation-duration: 16s;
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

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.6;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  40% {
    transform: translateY(-30px) rotate(10deg);
  }
  60% {
    transform: translateY(-15px) rotate(-5deg);
  }
}

@keyframes wiggle {
  0%, 100% {
    transform: rotate(0deg) translateX(0);
  }
  25% {
    transform: rotate(5deg) translateX(10px);
  }
  50% {
    transform: rotate(0deg) translateX(-5px);
  }
  75% {
    transform: rotate(-5deg) translateX(10px);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.4;
    transform: rotate(35deg) scale(1);
  }
  25% {
    opacity: 1;
    transform: rotate(35deg) scale(1.3);
  }
  50% {
    opacity: 0.6;
    transform: rotate(35deg) scale(0.8);
  }
  75% {
    opacity: 0.9;
    transform: rotate(35deg) scale(1.1);
  }
}

@keyframes floatDots {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem;
  text-align: center;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-top: 5vh;
  margin-bottom: 5vh;
  animation: containerFloat 8s ease-in-out infinite;
}

h1 {
  color: #2c3e50;
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
  animation: titleGlow 4s ease-in-out infinite;
}

p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.links {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
}

.link-button {
  display: inline-block;
  background-color: #41b883;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(65, 184, 131, 0.2);
  width: 280px;
  max-width: 90%;
}

.link-button:hover {
  background-color: #34495e;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(52, 73, 94, 0.3);
}

@keyframes backgroundShift {
  0%, 100% {
    background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 50%, #f7f1ff 100%);
  }
  25% {
    background: linear-gradient(120deg, #a8edea 0%, #fed6e3 50%, #ffeaa7 100%);
  }
  50% {
    background: linear-gradient(120deg, #d299c2 0%, #fef9d7 50%, #667eea 100%);
  }
  75% {
    background: linear-gradient(120deg, #89f7fe 0%, #66a6ff 50%, #f093fb 100%);
  }
}

@keyframes containerFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-5px) rotate(0.5deg);
  }
  50% {
    transform: translateY(5px) rotate(0deg);
  }
  75% {
    transform: translateY(-3px) rotate(-0.5deg);
  }
}

@keyframes titleGlow {
  0%, 100% {
    text-shadow: 0 0 5px rgba(65, 184, 131, 0.3);
    color: #2c3e50;
  }
  50% {
    text-shadow: 0 0 20px rgba(65, 184, 131, 0.6), 0 0 30px rgba(65, 184, 131, 0.4);
    color: #41b883;
  }
}

/* 響應式設計 */
@media (min-width: 769px) {
  .page-container {
    min-height: 67vh;
  }
  
  .container {
    margin-top: 3vh;
    margin-bottom: 3vh;
    max-width: 500px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  p {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .page-container {
    min-height: 100vh;
  }
  
  .container {
    max-width: 90%;
    margin-top: 12vh;
    margin-bottom: 5vh;
    padding: 1.2rem;
  }
  
  h1 {
    font-size: 1.8rem;
  }
  
  p {
    font-size: 1rem;
  }
  
  .link-button {
    width: 100%;
    padding: 0.7rem 1rem;
  }
}
</style>
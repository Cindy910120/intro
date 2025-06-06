<template>
  <div class="container">
    <h1>期末專題網頁介紹</h1>
    <p>這邊是期末專題的介紹</p>
    <p>運用這學期所學與自身經歷，我製作了一個關於勞基法的網頁</p>
    <p>把難懂的法條加上點例子，更方便我們了解如何運用</p>
    
    <div class="project-link">
      <a href="https://law-rose.vercel.app/" target="_blank" class="link-button">
        點擊查看專題網站
      </a>
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
}

h1 {
  color: #2c3e50;
}

p {
  font-size: 1.2em;
  line-height: 1.5;
}

.project-link {
  margin-top: 2rem;
  text-align: center;
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
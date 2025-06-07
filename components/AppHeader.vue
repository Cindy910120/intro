<template>
  <header class="navbar">
    <div class="header-container">
      <div class="site-title">
        <h1>林芊蓉的網站</h1>
      </div>
      <nav>
        <ul>
          <li><NuxtLink to="/">首頁</NuxtLink></li>
          <li><NuxtLink to="/about">自我介紹</NuxtLink></li>
          <li><NuxtLink to="/project">期末專題網頁介紹</NuxtLink></li>
          <li><NuxtLink to="/data">各項學習筆記</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  width: 100%;
  background-color: #ffffff;
  padding: 1.25rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  font-family: "LXGW WenKai Mono TC", monospace;
  min-height: 9vh;
  display: flex;
  align-items: center;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.site-title {
  flex: 0 0 30%;
  text-align: left;
}

.site-title h1 {
  margin: 0;
  font-size: 2rem;
  background: linear-gradient(45deg, #ff0844, #ffb199, #ff6b6b);
  background-size: 100% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 4s ease infinite;
}

nav {
  flex: 0 0 70%;
  display: flex;
  justify-content: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
}

li {
  text-align: center;
  flex: 1;
}

a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.3rem;
  background: linear-gradient(45deg, #ff6b6b, #5f27cd, #48dbfb);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 3s linear infinite;
}

a:hover {
  animation: gradient 1s linear infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

a.router-link-active {
  position: relative;
  font-weight: 900;
  background: linear-gradient(45deg, #ff0844, #ffb199);
  background-size: 100% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

a.router-link-active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -5px;
  transform: translateX(-50%);
  width: 30px;
  height: 3px;
  background: linear-gradient(45deg, #ff0844, #ffb199);
  border-radius: 5px;
}

/* 響應式設計 */
@media (min-width: 769px) {
  .navbar {
    min-height: 11vh;
    padding: 1.75rem 0;
  }
  
  .site-title h1 {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .navbar {
    min-height: auto;
    padding: 1.25rem 0;
  }
  
  .site-title h1 {
    font-size: 1.8rem;
  }
    .header-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .site-title, nav {
    flex: none;
  }
  
  ul {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  li {
    flex: none;
  }
}
</style>
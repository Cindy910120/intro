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
  padding: 1.6rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  font-family: "LXGW WenKai Mono TC", monospace;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.site-title h1 {
  margin: 0;
  font-size: 2.2rem;
  background: linear-gradient(45deg, #ff0844, #ffb199, #ff6b6b);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 4s ease infinite;
  text-align: left;
}

nav {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  max-width: 70%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

li {
  margin-left: 2rem;
  text-align: center;
}

a {
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0.7rem;
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
</style>
<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>關於本站</h3>
        <p>這是林芊蓉的個人網站，包含自我介紹、上課練習和期末專題。</p>
      </div>

      <div class="footer-section">
        <h3>聯絡資訊</h3>
        <p>電子郵件：cindyjuliacoco@gmail.com</p>
        <p>實驗室：<a href="https://sites.google.com/view/lab816" target="_blank">Lab 816</a></p>
      </div>

      <div class="footer-section">
        <h3>相關連結</h3>
        <ul>
          <li><a href="/">首頁</a></li>
          <li><a href="/about">自我介紹</a></li>
          <li><a href="/project">期末專題</a></li>
          <li><a href="/data">各項資料</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} 林芊蓉. 版權所有。</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: #f8f9fa;
  color: #333;
  padding: 2.5rem 0 0 0;
  margin-top: 3rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  font-family: "LXGW WenKai Mono TC", monospace;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 2rem;
  padding: 0 1rem;
}

.footer-section h3 {
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  position: relative;
  display: inline-block;
  padding-bottom: 0.7rem;
  color: #333;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, #ff6b6b, #5f27cd);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #0066cc;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 1.1rem;
}

.footer-section a:hover {
  color: #ff6b6b;
  text-decoration: underline;
}

.footer-section p, .footer-section li {
  font-size: 1.1rem;
  line-height: 1.6;
}

.footer-bottom {
  text-align: center;
  padding: 1.5rem 0;
  background-color: #f0f0f0;
  font-size: 1.1rem;
  margin-top: 1.5rem;
}
</style>
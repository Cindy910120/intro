<template>
  <div class="theme-toggle">
    <button 
      @click="toggleThemeMenu"
      class="theme-button"
      :class="{ 'active': showThemeMenu }"
    >
      <span class="theme-icon">🎨</span>
    </button>
    
    <div class="theme-menu" v-show="showThemeMenu">
      <div class="theme-menu-header">
        <span>選擇主題色彩</span>
      </div>
      <div class="theme-colors">
        <button 
          v-for="theme in themes" 
          :key="theme.name"
          @click="setTheme(theme.name)"
          class="theme-color-btn"
          :class="{ 'active': currentTheme === theme.name }"
          :style="{ backgroundColor: theme.primary }"
          :title="theme.label"
        >
          <span class="theme-check" v-if="currentTheme === theme.name">✓</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const showThemeMenu = ref(false)
const currentTheme = ref('default')

// 定義多種主題色彩
const themes = [
  {
    name: 'default',
    label: '預設藍色',
    primary: '#3498db',
    secondary: '#2c3e50',
    accent: '#e74c3c'
  },
  {
    name: 'purple',
    label: '紫色夢幻',
    primary: '#9b59b6',
    secondary: '#8e44ad',
    accent: '#f39c12'
  },
  {
    name: 'green',
    label: '清新綠色',
    primary: '#27ae60',
    secondary: '#2c3e50',
    accent: '#e67e22'
  },
  {
    name: 'orange',
    label: '活力橘色',
    primary: '#f39c12',
    secondary: '#d35400',
    accent: '#e74c3c'
  },
  {
    name: 'pink',
    label: '浪漫粉色',
    primary: '#e91e63',
    secondary: '#ad1457',
    accent: '#ff5722'
  },
  {
    name: 'teal',
    label: '海洋青色',
    primary: '#26a69a',
    secondary: '#00695c',
    accent: '#ff7043'
  },
  {
    name: 'indigo',
    label: '靛藍色',
    primary: '#3f51b5',
    secondary: '#283593',
    accent: '#ff5722'
  },
  {
    name: 'red',
    label: '熱情紅色',
    primary: '#f44336',
    secondary: '#c62828',
    accent: '#ff9800'
  },
  {
    name: 'dark',
    label: '深色主題',
    primary: '#607d8b',
    secondary: '#37474f',
    accent: '#ff6f00'
  }
]

const toggleThemeMenu = () => {
  showThemeMenu.value = !showThemeMenu.value
}

const setTheme = (themeName) => {
  const theme = themes.find(t => t.name === themeName)
  if (theme) {
    currentTheme.value = themeName
    
    // 設置CSS變數到根元素
    const root = document.documentElement
    
    // 主要顏色系統
    root.style.setProperty('--color-primary', theme.primary)
    root.style.setProperty('--color-primary-dark', adjustColor(theme.primary, -20))
    root.style.setProperty('--color-primary-light', adjustColor(theme.primary, 20))
    root.style.setProperty('--color-secondary', theme.secondary)
    root.style.setProperty('--color-accent', theme.accent)
    
    // 背景色系統
    root.style.setProperty('--color-bg-primary', theme.primary)
    root.style.setProperty('--color-bg-secondary', theme.secondary)
    root.style.setProperty('--color-bg-gradient', `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`)
    
    // 文字色系統
    root.style.setProperty('--color-text-themed', theme.primary)
    
    // 漸層系統
    root.style.setProperty('--gradient-primary', `linear-gradient(45deg, ${theme.primary}, ${theme.accent})`)
    root.style.setProperty('--gradient-secondary', `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`)
    root.style.setProperty('--gradient-accent', `linear-gradient(45deg, ${theme.accent}, ${adjustColor(theme.primary, 20)})`)
    
    // 舊有變數兼容性
    root.style.setProperty('--primary-color', theme.primary)
    root.style.setProperty('--primary-hover', adjustColor(theme.primary, -10))
    root.style.setProperty('--secondary-color', theme.secondary)
    root.style.setProperty('--accent-color', theme.accent)
    
    // 儲存到localStorage
    localStorage.setItem('selectedTheme', themeName)
    showThemeMenu.value = false
  }
}

// 調整顏色亮度的函數
const adjustColor = (color, percent) => {
  const num = parseInt(color.replace("#", ""), 16)
  const amt = Math.round(2.55 * percent)
  const R = (num >> 16) + amt
  const G = (num >> 8 & 0x00FF) + amt
  const B = (num & 0x0000FF) + amt
  return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1)
}

// 點擊外部關閉選單
const handleClickOutside = (event) => {
  if (!event.target.closest('.theme-toggle')) {
    showThemeMenu.value = false
  }
}

onMounted(() => {
  // 載入儲存的主題
  const savedTheme = localStorage.getItem('selectedTheme')
  if (savedTheme && themes.find(t => t.name === savedTheme)) {
    setTheme(savedTheme)
  } else {
    setTheme('default')
  }
  
  // 添加全局點擊監聽器
  document.addEventListener('click', handleClickOutside)
})

// 清理事件監聽器
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.theme-toggle {
  position: relative;
  z-index: 1000;
}

.theme-button {
  background: var(--color-primary);
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.theme-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.theme-button.active {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

.theme-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.theme-button:hover::before {
  left: 100%;
}

.theme-icon {
  font-size: 1.5rem;
  animation: colorPulse 3s ease-in-out infinite;
}

@keyframes colorPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.theme-menu {
  position: absolute;
  top: 60px;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  min-width: 280px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.theme-menu-header {
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
  font-size: 0.9rem;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.theme-colors {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.theme-color-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid transparent;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.theme-color-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.theme-color-btn.active {
  border-color: #333;
  transform: scale(1.15);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

.theme-check {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .theme-button {
    width: 40px;
    height: 40px;
  }
  
  .theme-icon {
    font-size: 1.3rem;
  }
  
  .theme-menu {
    min-width: 240px;
    right: -10px;
  }
  
  .theme-colors {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  
  .theme-color-btn {
    width: 45px;
    height: 45px;
  }
}
</style>

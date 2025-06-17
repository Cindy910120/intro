<template>
  <div v-if="isVisible" class="popup-overlay" @click="closeModal">
    <div class="popup-modal" :class="`theme-${theme}`" @click.stop>
      <!-- 關閉按鈕 -->
      <button class="close-button" @click="closeModal">
        <span>&times;</span>
      </button>
      
      <!-- 彈跳視窗內容 -->
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">{{ title || '提示訊息' }}</h2>
          <div class="title-decoration"></div>
        </div>        <div class="modal-body">
          <div class="custom-content">
            <slot>
              <div class="default-content">
                <div class="message-icon">💡</div>
                <p>{{ message || '這是一個彈跳視窗的預設內容' }}</p>
              </div>
            </slot>
          </div>
        </div>
        
        <div class="modal-footer" v-if="showFooter">
          <button class="action-button primary" @click="handleConfirm">
            {{ confirmText || '確認' }}
          </button>
          <button class="action-button secondary" @click="closeModal">
            {{ cancelText || '取消' }}
          </button>
        </div>
      </div>
      
      <!-- 裝飾性元素 -->
      <div class="modal-decoration">
        <div class="deco-circle circle-1"></div>
        <div class="deco-circle circle-2"></div>
        <div class="deco-circle circle-3"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// Props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  isVisible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '提示訊息'
  },
  message: {
    type: String,
    default: ''
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  confirmText: {
    type: String,
    default: '確認'
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  theme: {
    type: String,
    default: 'about',
    validator: (value) => ['about', 'project'].includes(value)
  }
})

// Emits
const emit = defineEmits(['update:modelValue', 'confirm', 'cancel', 'close'])

// Data - 支持兩種方式：v-model 和 isVisible prop
const isVisible = ref(props.modelValue || props.isVisible)

// Watch modelValue changes
watch(() => props.modelValue, (newValue) => {
  isVisible.value = newValue
})

// Watch isVisible prop changes
watch(() => props.isVisible, (newValue) => {
  isVisible.value = newValue
})

// Methods
const closeModal = () => {
  isVisible.value = false
  emit('update:modelValue', false)
  emit('close')
  emit('cancel')
}

const handleConfirm = () => {
  emit('confirm')
  closeModal()
}

// ESC鍵關閉
const handleKeydown = (e) => {
  if (e.key === 'Escape' && isVisible.value) {
    closeModal()
  }
}

// 監聽鍵盤事件
watch(isVisible, (newValue) => {
  if (newValue) {
    document.addEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'hidden' // 防止背景滾動
  } else {
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'auto'
  }
})
</script>

<style scoped>
/* 彈跳視窗遮罩 */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* 彈跳視窗主體 */
.popup-modal {
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: scale(0.7) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* 關閉按鈕 */
.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 35px;
  height: 35px;
  border: none;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.close-button:hover {
  background: rgba(255, 107, 107, 0.2);
  transform: rotate(90deg) scale(1.1);
}

.close-button span {
  font-size: 24px;
  color: #ff6b6b;
  font-weight: bold;
  line-height: 1;
}

/* 彈跳視窗內容 */
.modal-content {
  position: relative;
  z-index: 5;
}

.modal-body {
  padding: 2rem;
}

/* 標題區域 */
.modal-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  padding: 1.5rem 1rem;
  border-radius: 12px 12px 0 0;
}

/* About theme header background */
.theme-about .modal-header {
  background: linear-gradient(45deg, #ff6b9d, #ff8fab, #ffc1cc, #ffb3ba);
  background-size: 300% 300%;
  animation: loveGradient 3s ease-in-out infinite;
}

/* Project theme header background */
.theme-project .modal-header {
  background: linear-gradient(45deg, #4e54c8, #8f94fb, #4776e6, #8e54e9);
  background-size: 300% 300%;
  animation: spaceGradient 3s ease-in-out infinite;
}

.modal-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  position: relative;
}

/* About theme (love theme) */
.theme-about .modal-title {
  color: #ffffff; /* White text for better visibility on pink background */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); /* Add slight shadow for better readability */
  animation: titleBounce 2s ease-in-out infinite;
}

.theme-about .modal-title::before {
  content: '💕';
  position: absolute;
  left: -40px;
  top: 50%;
  transform: translateY(-50%);
  animation: heartFloat 2s ease-in-out infinite;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3)); /* Add shadow to emoji for visibility */
}

.theme-about .modal-title::after {
  content: '💕';
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  animation: heartFloat 2s ease-in-out infinite 1s;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3)); /* Add shadow to emoji for visibility */
}

/* Project theme (knowledge/learning theme) */
.theme-project .modal-title {
  color: #ffffff; /* White text for better visibility on blue background */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); /* Add slight shadow for better readability */
  animation: titleBounce 2s ease-in-out infinite;
}

.theme-project .modal-title::before {
  content: '📚';
  position: absolute;
  left: -40px;
  top: 50%;
  transform: translateY(-50%);
  animation: knowledgeFloat 2s ease-in-out infinite;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3)); /* Add shadow to emoji for visibility */
}

.theme-project .modal-title::after {
  content: '🧠';
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%);
  animation: knowledgeFloat 2s ease-in-out infinite 1s;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3)); /* Add shadow to emoji for visibility */
}

.title-decoration {
  width: 60px;
  height: 3px;
  margin: 0 auto;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.8); /* White decoration for both themes */
  animation: expandDecoration 0.8s ease-out 0.2s both;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

@keyframes expandDecoration {
  0% {
    width: 0;
  }
  100% {
    width: 60px;
  }
}

/* 內容區域 */
.modal-body {
  margin-bottom: 2rem;
  position: relative;
}

.default-content {
  text-align: center;
}

.message-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.modal-body p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
  animation: textFadeIn 1s ease-out 0.5s both;
}

.custom-content {
  color: #333;
  line-height: 1.6;
  animation: contentSlideIn 0.8s ease-out 0.3s both;
  padding: 0.5rem 0;
}

/* 為自定義內容添加活潑效果 */
/* About theme custom content */
.theme-about .custom-content h1,
.theme-about .custom-content h2,
.theme-about .custom-content h3 {
  background: linear-gradient(45deg, #ff6b9d, #ff8fab);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: loveGradient 3s ease-in-out infinite;
  margin-bottom: 0.8rem;
}

/* Project theme custom content */
.theme-project .custom-content h1,
.theme-project .custom-content h2,
.theme-project .custom-content h3 {
  background: linear-gradient(45deg, #4e54c8, #8f94fb);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: spaceGradient 3s ease-in-out infinite;
  margin-bottom: 0.8rem;
}

.custom-content p {
  color: #444;
  margin-bottom: 1rem;
  animation: textWave 2s ease-in-out infinite;
  animation-delay: calc(var(--line-index, 0) * 0.1s);
}

/* 底部按鈕區域 */
.modal-footer {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.action-button {
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.action-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.action-button:hover::before {
  left: 100%;
}

/* About theme buttons */
.theme-about .action-button.primary {
  background: linear-gradient(45deg, #ff6b9d, #ff8fab, #ffc1cc);
  background-size: 200% 200%;
  color: white;
  animation: loveGradient 3s ease-in-out infinite;
  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
}

.theme-about .action-button.primary:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.5);
  animation: buttonPulse 0.6s ease-in-out infinite;
}

.theme-about .action-button.secondary {
  background: linear-gradient(45deg, #f8f9fa, #e9ecef);
  color: #666;
  border: 2px solid #ff8fab;
  box-shadow: 0 2px 10px rgba(255, 139, 171, 0.2);
}

.theme-about .action-button.secondary:hover {
  background: linear-gradient(45deg, #ff9ff3, #ffc1cc);
  color: white;
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 5px 15px rgba(255, 159, 243, 0.4);
}

/* Project theme buttons */
.theme-project .action-button.primary {
  background: linear-gradient(45deg, #4e54c8, #8f94fb, #4776e6);
  background-size: 200% 200%;
  color: white;
  animation: spaceGradient 3s ease-in-out infinite;
  box-shadow: 0 4px 15px rgba(78, 84, 200, 0.3);
}

.theme-project .action-button.primary:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(78, 84, 200, 0.5);
  animation: buttonPulse 0.6s ease-in-out infinite;
}

.theme-project .action-button.secondary {
  background: linear-gradient(45deg, #f8f9fa, #e9ecef);
  color: #666;
  border: 2px solid #8f94fb;
  box-shadow: 0 2px 10px rgba(78, 84, 200, 0.2);
}

.theme-project .action-button.secondary:hover {
  background: linear-gradient(45deg, #8e54e9, #4776e6);
  color: white;
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 5px 15px rgba(78, 84, 200, 0.4);
}

/* 裝飾性元素 */
.modal-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  background-size: 200% 200%;
  filter: blur(1px);
}

/* About (love) theme circles */
.theme-about .deco-circle {
  background: linear-gradient(45deg, rgba(255, 107, 157, 0.2), rgba(255, 139, 171, 0.3), rgba(255, 193, 204, 0.2));
  animation: float 4s ease-in-out infinite, loveGradient 3s ease-in-out infinite;
}

.theme-about .circle-1 {
  width: 80px;
  height: 80px;
  top: 20px;
  right: 80px;
  animation-delay: 0s;
}

.theme-about .circle-1::before {
  content: '💖';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  animation: heartSpin 3s linear infinite;
}

.theme-about .circle-2 {
  width: 60px;
  height: 60px;
  bottom: 30px;
  left: 30px;
  animation-delay: 1s;
}

.theme-about .circle-2::before {
  content: '💕';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  animation: heartSpin 4s linear infinite reverse;
}

.theme-about .circle-3 {
  width: 40px;
  height: 40px;
  top: 50%;
  right: 20px;
  animation-delay: 2s;
}

.theme-about .circle-3::before {
  content: '💗';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  animation: heartSpin 2s linear infinite;
}

/* Project (learning) theme circles */
.theme-project .deco-circle {
  background: linear-gradient(45deg, rgba(78, 84, 200, 0.2), rgba(143, 148, 251, 0.3), rgba(71, 118, 230, 0.2));
  animation: float 4s ease-in-out infinite, spaceGradient 3s ease-in-out infinite;
}

.theme-project .circle-1 {
  width: 80px;
  height: 80px;
  top: 20px;
  right: 80px;
  animation-delay: 0s;
}

.theme-project .circle-1::before {
  content: '📚';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  animation: knowledgeSpin 3s linear infinite;
}

.theme-project .circle-2 {
  width: 60px;
  height: 60px;
  bottom: 30px;
  left: 30px;
  animation-delay: 1s;
}

.theme-project .circle-2::before {
  content: '🧠';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  animation: knowledgeSpin 4s linear infinite reverse;
}

.theme-project .circle-3 {
  width: 40px;
  height: 40px;
  top: 50%;
  right: 20px;
  animation-delay: 2s;
}

.theme-project .circle-3::before {
  content: '🔍';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  animation: knowledgeSpin 2s linear infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
    opacity: 0.6;
  }
}

/* ===== 活潑動畫關鍵幀 ===== */
@keyframes loveGradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes spaceGradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes titleBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes heartFloat {
  0%, 100% {
    transform: translateY(-50%) scale(1);
    opacity: 0.7;
  }
  25% {
    transform: translateY(-60%) scale(1.2);
    opacity: 1;
  }
  50% {
    transform: translateY(-40%) scale(0.8);
    opacity: 0.5;
  }
  75% {
    transform: translateY(-55%) scale(1.1);
    opacity: 0.9;
  }
}

@keyframes knowledgeFloat {
  0%, 100% {
    transform: translateY(-50%) scale(1) rotate(0deg);
    opacity: 0.7;
    filter: blur(0px);
  }
  25% {
    transform: translateY(-60%) scale(1.2) rotate(15deg);
    opacity: 1;
    filter: brightness(1.1);
  }
  50% {
    transform: translateY(-40%) scale(0.8) rotate(-15deg);
    opacity: 0.5;
    filter: brightness(0.9);
  }
  75% {
    transform: translateY(-55%) scale(1.1) rotate(5deg);
    opacity: 0.9;
    filter: brightness(1);
  }
}

@keyframes textFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes contentSlideIn {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes textWave {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

@keyframes buttonPulse {
  0%, 100% {
    transform: translateY(-3px) scale(1.05);
  }
  50% {
    transform: translateY(-5px) scale(1.08);
  }
}

@keyframes heartSpin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(-50%, -50%) rotate(90deg) scale(1.1);
  }
  50% {
    transform: translate(-50%, -50%) rotate(180deg) scale(0.9);
  }
  75% {
    transform: translate(-50%, -50%) rotate(270deg) scale(1.05);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) scale(1);
  }
}

@keyframes knowledgeSpin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    filter: brightness(1);
  }
  25% {
    transform: translate(-50%, -50%) rotate(90deg) scale(1.1);
    filter: brightness(1.2);
  }
  50% {
    transform: translate(-50%, -50%) rotate(180deg) scale(0.9);
    filter: brightness(0.9);
  }
  75% {
    transform: translate(-50%, -50%) rotate(270deg) scale(1.05);
    filter: brightness(1.1);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) scale(1);
    filter: brightness(1);
  }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .popup-modal {
    width: 95%;
    max-width: none;
    margin: 1rem;
    max-height: 90vh;
    overflow-y: auto;
  }
  
  .modal-content {
    padding: 1.5rem;
  }
  
  .modal-title {
    font-size: 1.5rem;
    text-align: center;
  }
  
  .modal-body {
    padding: 1rem 0;
  }
  
  .modal-footer {
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .action-button {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }
  
  .close-button {
    width: 35px;
    height: 35px;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 1.2rem;
  }
  
  .deco-circle {
    opacity: 0.3;
  }
  
  .circle-1 {
    width: 60px;
    height: 60px;
    top: 10px;
    right: 60px;
  }
  
  .circle-2 {
    width: 40px;
    height: 40px;
    bottom: 20px;
    left: 20px;
  }
  
  .circle-3 {
    width: 30px;
    height: 30px;
    top: 40%;
    right: 15px;
  }
}

@media (max-width: 480px) {
  .popup-modal {
    width: 98%;
    margin: 0.5rem;
    border-radius: 12px;
  }
  
  .modal-content {
    padding: 1rem;
  }
  
  .modal-title {
    font-size: 1.3rem;
  }
  
  .modal-body {
    padding: 0.8rem 0;
  }
  
  .action-button {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
  
  .close-button {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
  
  .title-decoration {
    scale: 0.8;
  }
  
  /* 簡化裝飾元素 */
  .circle-2,
  .circle-3 {
    display: none;
  }
  
  .circle-1 {
    width: 40px;
    height: 40px;
    opacity: 0.2;
  }
}

/* 橫屏手機優化 */
@media (max-width: 768px) and (orientation: landscape) {
  .popup-modal {
    max-height: 85vh;
    margin: 0.5rem;
  }
  
  .modal-content {
    padding: 1rem 1.5rem;
  }
  
  .modal-footer {
    flex-direction: row;
    gap: 1rem;
  }
  
  .action-button {
    width: auto;
    flex: 1;
  }
}

/* 滾動條美化 */
.popup-modal::-webkit-scrollbar {
  width: 6px;
}

.popup-modal::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

/* About theme scrollbar */
.theme-about::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #ff6b9d, #ff8fab);
  border-radius: 3px;
}

.theme-about::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #ff9ff3, #ffc1cc);
}

/* Project theme scrollbar */
.theme-project::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
  border-radius: 3px;
}

.theme-project::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #4776e6, #8e54e9);
}
</style>

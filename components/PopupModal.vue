<template>
  <div v-if="isVisible" class="popup-overlay" @click="closeModal">
    <div class="popup-modal" @click.stop>
      <!-- 關閉按鈕 -->
      <button class="close-button" @click="closeModal">
        <span>&times;</span>
      </button>
      
      <!-- 彈跳視窗內容 -->
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">{{ title || '提示訊息' }}</h2>
          <div class="title-decoration"></div>
        </div>
        
        <div class="modal-body">
          <div v-if="$slots.default" class="custom-content">
            <slot></slot>
          </div>
          <div v-else class="default-content">
            <div class="message-icon">💡</div>
            <p>{{ message || '這是一個彈跳視窗的預設內容' }}</p>
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
  }
})

// Emits
const emit = defineEmits(['update:modelValue', 'confirm', 'cancel'])

// Data
const isVisible = ref(props.modelValue)

// Watch modelValue changes
watch(() => props.modelValue, (newValue) => {
  isVisible.value = newValue
})

// Methods
const closeModal = () => {
  isVisible.value = false
  emit('update:modelValue', false)
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
  padding: 2rem;
  position: relative;
  z-index: 5;
}

/* 標題區域 */
.modal-header {
  text-align: center;
  margin-bottom: 2rem;
}

.modal-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title-decoration {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  margin: 0 auto;
  border-radius: 2px;
  animation: expandDecoration 0.8s ease-out 0.2s both;
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
}

.custom-content {
  color: #555;
  line-height: 1.6;
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

.action-button.primary {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
}

.action-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}

.action-button.secondary {
  background: #f8f9fa;
  color: #666;
  border: 2px solid #e9ecef;
}

.action-button.secondary:hover {
  background: #e9ecef;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  animation: float 4s ease-in-out infinite;
}

.circle-1 {
  width: 80px;
  height: 80px;
  top: 20px;
  right: 80px;
  animation-delay: 0s;
}

.circle-2 {
  width: 60px;
  height: 60px;
  bottom: 30px;
  left: 30px;
  animation-delay: 1s;
}

.circle-3 {
  width: 40px;
  height: 40px;
  top: 50%;
  right: 20px;
  animation-delay: 2s;
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

.popup-modal::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 3px;
}

.popup-modal::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #5a67d8, #6b46c1);
}
</style>

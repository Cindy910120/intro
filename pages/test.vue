<template>
  <div class="test-container">
    <h1>Firebase 連接測試</h1>
    <div class="status">
      <p>狀態: {{ status }}</p>
      <p v-if="error" class="error">錯誤: {{ error }}</p>
      <p v-if="config">配置已載入</p>
    </div>
    <button @click="testConnection">測試連接</button>
    <div v-if="testResult" class="result">
      <h3>測試結果:</h3>
      <pre>{{ testResult }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const status = ref('初始化中...')
const error = ref('')
const config = ref(null)
const testResult = ref('')

onMounted(async () => {
  try {
    const runtimeConfig = useRuntimeConfig()
    config.value = runtimeConfig.public
    
    if (!config.value.firebaseApiKey) {
      error.value = 'Firebase API Key 未設置'
      status.value = '配置錯誤'
      return
    }
    
    status.value = '配置已載入'
  } catch (err) {
    error.value = err.message
    status.value = '載入失敗'
  }
})

const testConnection = async () => {
  try {
    const { $firebase } = useNuxtApp()
    
    if (!$firebase) {
      testResult.value = 'Firebase 插件未載入'
      return
    }
    
    // 測試 Firestore 連接
    const { doc, setDoc, getDoc } = await import('firebase/firestore')
    const testDoc = doc($firebase.db, 'test_connection', 'test')
    
    await setDoc(testDoc, {
      timestamp: new Date().toISOString(),
      message: 'Hello from Vercel!'
    })
    
    const snapshot = await getDoc(testDoc)
    testResult.value = `連接成功！數據: ${JSON.stringify(snapshot.data(), null, 2)}`
  } catch (err) {
    testResult.value = `連接失敗: ${err.message}`
  }
}
</script>

<style scoped>
.test-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
}

.error {
  color: red;
}

.result {
  margin-top: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 4px;
}

pre {
  white-space: pre-wrap;
  word-break: break-all;
}

button {
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>

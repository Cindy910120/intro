import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics, isSupported } from 'firebase/analytics'

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()

  // 檢查必要的 Firebase 配置
  if (!config.public.firebaseApiKey) {
    console.error('Firebase API Key is missing')
    throw new Error('Firebase configuration is incomplete: API Key is missing')
  }

  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
    measurementId: config.public.firebaseMeasurementId as string
  }

  // 在開發環境中輸出配置以進行調試（生產環境請移除）
  if (process.env.NODE_ENV === 'development') {
    console.log('Firebase Config:', {
      ...firebaseConfig,
      apiKey: firebaseConfig.apiKey ? '***HIDDEN***' : 'MISSING'
    })
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  // Initialize Firebase services
  const auth = getAuth(app)
  const db = getFirestore(app)
  const storage = getStorage(app)
  
  // Initialize Analytics only if supported (client-side)
  let analytics = null
  if (process.client && await isSupported()) {
    analytics = getAnalytics(app)
  }

  return {
    provide: {
      firebase: {
        app,
        auth,
        db,
        storage,
        analytics
      }
    }
  }
})

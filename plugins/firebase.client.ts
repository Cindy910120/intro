import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics, isSupported } from 'firebase/analytics'

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
    measurementId: config.public.firebaseMeasurementId as string
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

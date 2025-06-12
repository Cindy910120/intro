import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User
} from 'firebase/auth'
import { 
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
  type WhereFilterOp,
  type DocumentData
} from 'firebase/firestore'

export const useFirebaseAuth = () => {
  const { $firebase } = useNuxtApp()
  const user = ref<User | null>(null)
  const isLoading = ref(true)

  const login = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword($firebase.auth, email, password)
      return result.user
    } catch (error) {
      throw error
    }
  }

  const register = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword($firebase.auth, email, password)
      return result.user
    } catch (error) {
      throw error
    }
  }

  const logout = async () => {
    try {
      await signOut($firebase.auth)
    } catch (error) {
      throw error
    }
  }

  const initUser = () => {
    return new Promise<void>((resolve) => {
      const unsubscribe = onAuthStateChanged($firebase.auth, (firebaseUser) => {
        user.value = firebaseUser
        isLoading.value = false
        unsubscribe()
        resolve()
      })
    })
  }

  return {
    user: readonly(user),
    isLoading: readonly(isLoading),
    login,
    register,
    logout,
    initUser
  }
}

export const useFirestore = () => {
  const { $firebase } = useNuxtApp()
  const createDocument = async (collectionName: string, data: DocumentData, id?: string) => {
    try {
      if (!$firebase?.db) {
        throw new Error('Firestore 實例不存在')
      }
      
      const docRef = id 
        ? doc($firebase.db, collectionName, id)
        : doc(collection($firebase.db, collectionName))
      
      const documentData = {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      await setDoc(docRef, documentData)      
      return docRef.id
    } catch (error) {
      console.error('Firestore createDocument 錯誤:', error)
      throw error
    }
  }

  const getDocument = async (collectionName: string, id: string) => {
    try {
      const docRef = doc($firebase.db, collectionName, id)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
      } else {
        return null
      }
    } catch (error) {
      throw error
    }
  }

  const updateDocument = async (collectionName: string, id: string, data: DocumentData) => {
    try {
      const docRef = doc($firebase.db, collectionName, id)
      await updateDoc(docRef, {
        ...data,
        updatedAt: new Date()
      })
    } catch (error) {
      throw error
    }
  }

  const deleteDocument = async (collectionName: string, id: string) => {
    try {
      const docRef = doc($firebase.db, collectionName, id)
      await deleteDoc(docRef)
    } catch (error) {
      throw error
    }
  }

  const listenToCollection = (
    collectionName: string,
    callback: (docs: DocumentData[]) => void,
    conditions: Array<{ field: string; operator: WhereFilterOp; value: any }> = [],
    orderByField?: string,
    orderDirection: 'asc' | 'desc' = 'asc'
  ) => {
    try {
      let q = query(collection($firebase.db, collectionName))

      // 添加 where 條件
      conditions.forEach(condition => {
        q = query(q, where(condition.field, condition.operator, condition.value))
      })

      // 添加排序
      if (orderByField) {
        q = query(q, orderBy(orderByField, orderDirection))
      }

      return onSnapshot(q, (querySnapshot) => {
        const docs = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        callback(docs)
      })
    } catch (error) {
      console.error('監聽集合錯誤:', error)
      throw error
    }
  }

  return {
    createDocument,
    getDocument,
    updateDocument,
    deleteDocument,
    listenToCollection
  }
}
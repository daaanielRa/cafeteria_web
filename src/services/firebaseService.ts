import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'

export class FirebaseService {
  static #firebaseConfig: object = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
    measurementId: import.meta.env.VITE_measurementId,
  }

  private constructor() {}

  public static get app(): FirebaseApp {
    return initializeApp(this.#firebaseConfig)
  }

  public static get db(): Firestore {
    return getFirestore(this.app)
  }

  public static get auth(): Auth {
    return getAuth(this.app)
  }
}

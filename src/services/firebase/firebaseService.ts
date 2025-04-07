import { initializeApp, type FirebaseApp } from 'firebase/app'
import { createUserWithEmailAndPassword, deleteUser, getAuth, type Auth } from 'firebase/auth'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
  type Firestore,
} from 'firebase/firestore'

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

  /**
   * Metodo para borrar un documento cullo nombre está especificado en los parametros
   * @param nombreColeccion el nombre de la colección donde está el documento
   * @param nombreDocumento el nombre dentro de los documentos a borrar
   */
  public static async eliminarDocumento(
    nombreColeccion: string,
    nombreDocumento: string,
  ): Promise<void> {
    try {
      const col = collection(this.db, nombreColeccion)
      const q = query(col, where('nombre', '==', nombreDocumento))
      const documento = await getDocs(q)

      for (const docSnap of documento.docs) {
        await deleteDoc(doc(this.db, nombreColeccion, docSnap.id))
      }
    } catch (error) {
      throw new Error(error as string)
    }
  }

  /**
   * TODO reparar esta funcion
   */
  public static async eliminarUsuario(
    nombreColeccion: string,
    nombreDocumento: string,
  ): Promise<void> {
    try {
      const col = collection(this.db, nombreColeccion)
      const q = query(col, where('nombre', '==', nombreDocumento))
      const documento = await getDocs(q)

      for (const docSnap of documento.docs) {
        await deleteDoc(doc(this.db, nombreColeccion, docSnap.id))

        if (docSnap.data().UID) {
          try {
            const user = this.auth.currentUser // Verificar usuario autenticado
            if (user && user.uid === docSnap.data().UID) {
              await deleteUser(user)
              console.log(`Usuario de Auth eliminado: ${docSnap.data().UID}`)
            } else {
              console.warn(`No tienes permisos para eliminar al usuario: ${docSnap.data().UID}`)
            }
          } catch (authError) {
            console.error(`Error al eliminar usuario de Auth: ${authError}`)
          }
        }
      }
    } catch (error) {
      throw new Error(error as string)
    }
  }

  /**
   * Metodo para crear un documento dentro de una colección
   * @param nombreColeccion el nombre de la colección donde se creará el documento
   * @param datos los datos que contendrá el documento
   */
  public static async crearDocumento(nombreColeccion: string, datos: object): Promise<void> {
    try {
      const col = collection(this.db, nombreColeccion)
      await addDoc(col, datos)
    } catch (error) {
      throw new Error(error as string)
    }
  }

  /**
   * Metodo para crear un usuario dentro de la aplicación
   * @param datos los datos del usuario que se almacenarán en firestore
   * @param correo el correo del usuario
   * @param contrasena la contraseña del usuario
   */
  public static async crearUsuario(
    datos: object,
    correo: string,
    contrasena: string,
  ): Promise<void> {
    try {
      const UID: string = await this._crearCredenciales(correo, contrasena)
      await setDoc(doc(this.db, 'usuarios', UID), datos)
    } catch (error) {
      throw new Error(error as string)
    }
  }

  /**
   * Metodo para crear las credenciales con el proovedor principal de la aplicación
   * @param correo el correo del usuario a crear
   * @param contrasena la contraseña del usuario a crear
   * @returns el UID de firebase.auth
   */
  private static async _crearCredenciales(correo: string, contrasena: string): Promise<string> {
    try {
      const credenciales = await createUserWithEmailAndPassword(this.auth, correo, contrasena)
      return credenciales.user.uid
    } catch (error) {
      throw new Error(error as string)
    }
  }
}

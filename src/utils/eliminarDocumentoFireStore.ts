import { FirebaseService } from '@/services/firebaseService'
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'

export async function eliminarDocumento(nombre: string, coleccion: string) {
  const col = collection(FirebaseService.db, coleccion)

  const q = query(col, where('nombre', '==', nombre))
  const documento = (await getDocs(q)).docs[0].id

  await deleteDoc(doc(FirebaseService.db, coleccion, documento))
}

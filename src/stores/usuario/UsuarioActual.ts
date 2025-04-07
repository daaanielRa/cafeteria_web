import { FirebaseService } from '@/services/firebase/firebaseService'
import { ErrorSesion } from '@/utils/errores'
import { doc, getDoc } from 'firebase/firestore'
import { defineStore } from 'pinia'

export const useUsuarioActualStore = defineStore('usuarioActual', {
  state: () => ({
    administrador: false,
    nombre: '',
    usuario: '',
  }),
  actions: {
    /**
     * Metodo para guardar la sesión actual dentro de la aplicación
     * @param usuario el usuario a guardar
     */
    async settearUsuario(usuario: string): Promise<void> {
      try {
        this.usuario = usuario

        const usuarioRef = doc(FirebaseService.db, 'usuarios', usuario)
        const snapshot = await getDoc(usuarioRef)

        this.administrador = snapshot.data()?.tipo == 'administrador' ? true : false
        this.nombre = snapshot.data()?.nombre
      } catch (error) {
        throw new ErrorSesion(error as string)
      }
    },

    /**
     * Metodo para eliminar los datos de la sesión actual
     */
    cerrarSesion(): void {
      this.$reset()
    },
  },
  persist: true,
})

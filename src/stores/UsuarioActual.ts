import { FirebaseService } from '@/services/firebaseService'
import { doc, getDoc } from 'firebase/firestore'
import { defineStore } from 'pinia'

export const useUsuarioActualStore = defineStore('usuarioActual', {
  state: () => ({
    administrador: false,
    usuario: '',
  }),
  actions: {
    async settearUsuario(usuario: string) {
      try {
        this.usuario = usuario

        const usuarioRef = doc(FirebaseService.db, 'usuarios', usuario)
        const snapshot = await getDoc(usuarioRef)

        this.administrador = snapshot.data()?.tipo == 'administrador' ? true : false
      } catch (error) {
        alert('Ocurrió un error al iniciar sesión' + error)
      }
    },

    cerrarSesion() {
      this.$reset()
    },
  },
  persist: true,
})

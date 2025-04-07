import { FirebaseService } from '@/services/firebase/firebaseService'
import { useUsuarioActualStore } from '@/stores/usuario/UsuarioActual'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { redireccionar } from './navegacion'

/**
 * Metodo para cerrar la sesión actual de la aplicación,
 */
async function cerrar(): Promise<void> {
  try {
    await signOut(FirebaseService.auth)
    useUsuarioActualStore().cerrarSesion()
    redireccionar('/')
  } catch (error) {
    alert('no se pudo cerrar sesión' + error)
  }
}

/**
 * Metodo para iniciar sesión dentro de la aplicación, setteandola en **pinia** y redireccionando a `/pedidos`
 *
 * @param email el correo del usuario
 * @param contrasena la contraseña del usuario
 */
async function iniciar(email: string, contrasena: string): Promise<void> {
  try {
    const inicioSesion = await signInWithEmailAndPassword(FirebaseService.auth, email, contrasena)

    await useUsuarioActualStore().settearUsuario(inicioSesion.user.uid)

    redireccionar('/pedidos')
  } catch (error) {
    alert('No se pudo iniciar sesión.\nComprueba el usuario y contraseña.')
    console.error(error)
  }
}

export default { iniciar, cerrar }

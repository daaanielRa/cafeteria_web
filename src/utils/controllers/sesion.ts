import { FirebaseService } from '@/services/firebase/firebaseService'
import { useUsuarioActualStore } from '@/stores/usuario/UsuarioActual'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { redireccionar } from './navegacion'
import { FirebaseError } from 'firebase/app'
import regex from '../regex'
import { ErrorSesion } from '../errores'

/**
 * Metodo para cerrar la sesión actual de la aplicación,
 */
async function cerrar(): Promise<void> {
  try {
    await signOut(FirebaseService.auth)
    useUsuarioActualStore().cerrarSesion()
    redireccionar('/')
  } catch (error) {
    alert('no se pudo cerrar sesión')
    console.error(error)
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
    if (!regex.correo.test(email)) throw new ErrorSesion('Correo electronico no valido')

    const inicioSesion = await signInWithEmailAndPassword(FirebaseService.auth, email, contrasena)

    await useUsuarioActualStore().settearUsuario(inicioSesion.user.uid)

    redireccionar('/pedidos')
  } catch (error) {
    let messageError = 'Error al iniciar sesión.\n'
    if (error instanceof FirebaseError) {
      if (error.code === 'auth/network-request-failed') {
        messageError = messageError.concat('Verifica la conexion a internet.')
      }

      messageError = messageError.concat('Por favor comprueba el correo y contraseña.')
    }

    alert(messageError)
  }
}

export default { iniciar, cerrar }

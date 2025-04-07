import { useUsuarioActualStore } from '@/stores/usuario/UsuarioActual'
import HistoriaventasView from '@/views/dashboard/historiaventasView.vue'
import InventarioView from '@/views/dashboard/inventarioView.vue'
import LoginView from '@/views/loginView.vue'
import NotFoundView from '@/views/notFoundView.vue'
import PedidosView from '@/views/dashboard/pedidosView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import EmpleadosView from '@/views/dashboard/empleadosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ? estas son las rutas de la aplicación
    {
      path: '/',
      component: LoginView,
      meta: { title: 'Inicio de sesión', requiereAdmin: false, requiereIniciarSesion: false },
    },
    {
      path: '/pedidos',
      component: PedidosView,
      meta: { title: 'gestion de pedidos', requiereAdmin: false, requiereIniciarSesion: true },
    },
    {
      path: '/inventario',
      component: InventarioView,
      meta: { title: 'gestion de inventario', requiereAdmin: true, requiereIniciarSesion: true },
    },
    {
      path: '/historiaventas',
      component: HistoriaventasView,
      meta: { title: 'historial de ventas', requiereAdmin: true, requiereIniciarSesion: true },
    },
    {
      path: '/empleados',
      component: EmpleadosView,
      meta: { title: 'gestion de empleados', requiereAdmin: true, requiereIniciarSesion: true },
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
      meta: { title: 'oops', requiereAdmin: false, requiereIniciarSesion: false },
    },
  ],
})

// ? esta funcion hace que el titulo del documento cambie dinamicamente
router.afterEach((to) => {
  document.title = (to.meta.title as string) + ' - YCoffee'
})

router.beforeEach((to, from, next) => {
  const usuarioStore = useUsuarioActualStore()

  if (to.meta.requiereIniciarSesion && !usuarioStore.usuario) {
    alert('debes iniciar sesión primero')
    return next('/')
  }

  if (to.meta.requiereAdmin && !usuarioStore.administrador) {
    alert('No tienes permisos para acceder')
    return next('/pedidos')
  }

  if (to.path == '/' && usuarioStore.usuario) {
    return next('/pedidos')
  }

  next()
})

export default router

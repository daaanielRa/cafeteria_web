import ClientesView from '@/views/clientesView.vue'
import EmpleadosView from '@/views/empleadosView.vue'
import LoginView from '@/views/loginView.vue'
import PedidosView from '@/views/pedidosView.vue'
import RegistroUsuarioView from '@/views/registroUsuarioView.vue'
import inventarioView from '@/views/inventarioView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HistoriaventasView from '@/views/historiaventasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ? estas son las rutas de la aplicación
    {
      path: '/',
      component: LoginView,
      meta: { title: 'Inicio de sesión' },
    },
    {
      path: '/registros',
      component: RegistroUsuarioView,
      meta: { title: 'Registrate' },
    },
    {
      path: '/clientes',
      component: ClientesView,
      meta: { title: 'gestion de clientes' },
    },
    {
      path: '/pedidos',
      component: PedidosView,
      meta: { title: 'gestion de pedidos' },
    },
    {
      path: '/inventario',
      component: inventarioView,
      meta: { title: 'gestion de inventario' },
    },
    {
      path: '/historiaventas',
      component: HistoriaventasView,
      meta: { title: 'historial de ventas' },
    },
    {
      path: '/empleados',
      component: EmpleadosView,
      meta: { title: 'gestion de empleados' },
    },
    {
      path: '/informes',
      component: ClientesView,
      meta: { title: 'informes' },
    },
  ],
})

// ? esta funcion hace que el titulo del documento cambie dinamicamente
router.afterEach((to) => {
  document.title = (to.meta.title as string) + ' - YCoffee'
})

export default router

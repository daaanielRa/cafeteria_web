import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FregistroComponent } from './pages/fregistro/fregistro.component';
import { InteradminComponent } from './pages/interadmin/interadmin.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { HistoriaventasComponent } from './pages/historiaventas/historiaventas.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "registros",
        component: FregistroComponent 
    },
    {
        path: "interadmin",
        component: InteradminComponent
    },
    {
        path: "pedidos",
        component: PedidosComponent
    },
    {
        path: "inventario",
        component: InventarioComponent
    },
    {
        path: "historiaventas",
        component: HistoriaventasComponent
    },
    {
        path: "empleados",
        component: EmpleadosComponent
    },
    {
        path: "clientes",
        component: ClientesComponent
    }
    

];

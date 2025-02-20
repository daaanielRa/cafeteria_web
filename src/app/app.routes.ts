import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FregistroComponent } from './pages/fregistro/fregistro.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "registros",
        component: FregistroComponent 
    }
];

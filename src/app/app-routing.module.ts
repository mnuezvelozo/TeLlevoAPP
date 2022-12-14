import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizarGuard } from './guards/autorizar.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'listadovehiculos',
    loadChildren: () => import('./pages/listadovehiculos/listadovehiculos.module').then( m => m.ListadovehiculosPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'registroauto',
    loadChildren: () => import('./pages/registroauto/registroauto.module').then( m => m.RegistroautoPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./pages/solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule),
    canActivate:[AutorizarGuard]
  },
  {
    path: 'registroauto2',
    loadChildren: () => import('./pages/registroauto2/registroauto2.module').then( m => m.Registroauto2PageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./pages/listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'recuperarpass',
    loadChildren: () => import('./pages/recuperarpass/recuperarpass.module').then( m => m.RecuperarpassPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

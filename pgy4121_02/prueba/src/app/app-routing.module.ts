import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ingreso-usuarios',
    loadChildren: () => import('./ingreso-usuarios/ingreso-usuarios.module').then( m => m.IngresoUsuariosPageModule)
  },
  {
    path: 'olvide-contrasena',
    loadChildren: () => import('./olvide-contrasena/olvide-contrasena.module').then( m => m.OlvideContrasenaPageModule)
  },
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

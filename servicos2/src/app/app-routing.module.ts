import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ModalController, NavParams} from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  
  { path: 'trofeu', loadChildren: './cliente/cliente.module#ClientePageModule' },
  { path: 'vou-tentar', loadChildren: './profissional/profissional.module#ProfissionalPageModule' },
  { path: 'sucesso', loadChildren: './sucesso/sucesso.module#SucessoPageModule' },
  { path: 'museu', loadChildren: './museu/museu.module#MuseuPageModule' },  { path: 'listar', loadChildren: './listar/listar.module#ListarPageModule' },


  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

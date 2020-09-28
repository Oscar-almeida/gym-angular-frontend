import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'aprendices',
    loadChildren: () => import('@feature/aprendices/aprendices.module')
      .then(module => module.AprendicesModule)
  },
  {
    path: 'ejercicios',
    loadChildren: () => import('@feature/ejercicios/ejercicios.module')
      .then(module => module.EjerciciosModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('@feature/inventario/inventario.module')
      .then(module => module.InventarioModule)
  },
  {
    path: 'musculos',
    loadChildren: () => import('@feature/musculos/musculos.module')
      .then(module => module.MusculosModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }

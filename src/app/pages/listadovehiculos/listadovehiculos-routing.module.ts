import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadovehiculosPage } from './listadovehiculos.page';

const routes: Routes = [
  {
    path: '',
    component: ListadovehiculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadovehiculosPageRoutingModule {}

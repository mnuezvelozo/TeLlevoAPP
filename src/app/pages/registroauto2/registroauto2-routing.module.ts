import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registroauto2Page } from './registroauto2.page';

const routes: Routes = [
  {
    path: '',
    component: Registroauto2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registroauto2PageRoutingModule {}

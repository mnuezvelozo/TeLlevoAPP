import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadovehiculosPageRoutingModule } from './listadovehiculos-routing.module';

import { ListadovehiculosPage } from './listadovehiculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadovehiculosPageRoutingModule
  ],
  declarations: [ListadovehiculosPage]
})
export class ListadovehiculosPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registroauto2PageRoutingModule } from './registroauto2-routing.module';

import { Registroauto2Page } from './registroauto2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registroauto2PageRoutingModule
  ],
  declarations: [Registroauto2Page]
})
export class Registroauto2PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Creditcard2PageRoutingModule } from './creditcard2-routing.module';

import { Creditcard2Page } from './creditcard2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Creditcard2PageRoutingModule
  ],
  declarations: [Creditcard2Page]
})
export class Creditcard2PageModule {}

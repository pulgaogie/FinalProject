import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Debitcard2PageRoutingModule } from './debitcard2-routing.module';

import { Debitcard2Page } from './debitcard2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Debitcard2PageRoutingModule
  ],
  declarations: [Debitcard2Page]
})
export class Debitcard2PageModule {}

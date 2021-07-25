import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Debitcard1PageRoutingModule } from './debitcard1-routing.module';

import { Debitcard1Page } from './debitcard1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Debitcard1PageRoutingModule
  ],
  declarations: [Debitcard1Page]
})
export class Debitcard1PageModule {}

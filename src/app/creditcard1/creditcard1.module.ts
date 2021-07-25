import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Creditcard1PageRoutingModule } from './creditcard1-routing.module';

import { Creditcard1Page } from './creditcard1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Creditcard1PageRoutingModule
  ],
  declarations: [Creditcard1Page]
})
export class Creditcard1PageModule {}

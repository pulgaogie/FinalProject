import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhilPageRoutingModule } from './phil-routing.module';

import { PhilPage } from './phil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhilPageRoutingModule
  ],
  declarations: [PhilPage]
})
export class PhilPageModule {}

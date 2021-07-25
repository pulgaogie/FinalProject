import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EaglestarPageRoutingModule } from './eaglestar-routing.module';

import { EaglestarPage } from './eaglestar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EaglestarPageRoutingModule
  ],
  declarations: [EaglestarPage]
})
export class EaglestarPageModule {}

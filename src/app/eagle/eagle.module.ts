import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EaglePageRoutingModule } from './eagle-routing.module';

import { EaglePage } from './eagle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EaglePageRoutingModule
  ],
  declarations: [EaglePage]
})
export class EaglePageModule {}

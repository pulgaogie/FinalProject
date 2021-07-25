import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DltbPageRoutingModule } from './dltb-routing.module';

import { DltbPage } from './dltb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DltbPageRoutingModule
  ],
  declarations: [DltbPage]
})
export class DltbPageModule {}

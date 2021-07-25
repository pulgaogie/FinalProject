import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhiltrancoPageRoutingModule } from './philtranco-routing.module';

import { PhiltrancoPage } from './philtranco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhiltrancoPageRoutingModule
  ],
  declarations: [PhiltrancoPage]
})
export class PhiltrancoPageModule {}

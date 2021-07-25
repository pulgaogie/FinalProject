import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BusSeatPageRoutingModule } from './bus-seat-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BusSeatPage } from './bus-seat.page';
import { CalendarModule } from 'ion2-calendar';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BusSeatPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: BusSeatPage
      }
    ]),
    CalendarModule
  ],
  declarations: [BusSeatPage]
})
export class BusSeatPageModule {}

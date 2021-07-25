import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusSeatPage } from './bus-seat.page';

const routes: Routes = [
  {
    path: '',
    component: BusSeatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusSeatPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Debitcard2Page } from './debitcard2.page';

const routes: Routes = [
  {
    path: '',
    component: Debitcard2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Debitcard2PageRoutingModule {}

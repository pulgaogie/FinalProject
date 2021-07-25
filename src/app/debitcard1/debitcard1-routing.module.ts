import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Debitcard1Page } from './debitcard1.page';

const routes: Routes = [
  {
    path: '',
    component: Debitcard1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Debitcard1PageRoutingModule {}

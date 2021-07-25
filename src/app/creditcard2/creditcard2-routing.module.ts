import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Creditcard2Page } from './creditcard2.page';

const routes: Routes = [
  {
    path: '',
    component: Creditcard2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Creditcard2PageRoutingModule {}

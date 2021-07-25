import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Creditcard1Page } from './creditcard1.page';

const routes: Routes = [
  {
    path: '',
    component: Creditcard1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Creditcard1PageRoutingModule {}

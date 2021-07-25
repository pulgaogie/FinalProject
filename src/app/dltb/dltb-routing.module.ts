import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DltbPage } from './dltb.page';

const routes: Routes = [
  {
    path: '',
    component: DltbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DltbPageRoutingModule {}

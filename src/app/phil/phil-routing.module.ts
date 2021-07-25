import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhilPage } from './phil.page';

const routes: Routes = [
  {
    path: '',
    component: PhilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhilPageRoutingModule {}

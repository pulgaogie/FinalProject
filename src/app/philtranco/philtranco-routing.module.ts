import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhiltrancoPage } from './philtranco.page';

const routes: Routes = [
  {
    path: '',
    component: PhiltrancoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhiltrancoPageRoutingModule {}

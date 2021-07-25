import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EaglePage } from './eagle.page';

const routes: Routes = [
  {
    path: '',
    component: EaglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EaglePageRoutingModule {}

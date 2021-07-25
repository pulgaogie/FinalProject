import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebitcardPage } from './debitcard.page';

const routes: Routes = [
  {
    path: '',
    component: DebitcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebitcardPageRoutingModule {}

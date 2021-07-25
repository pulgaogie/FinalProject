import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksuccessPage } from './booksuccess.page';

const routes: Routes = [
  {
    path: '',
    component: BooksuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksuccessPageRoutingModule {}

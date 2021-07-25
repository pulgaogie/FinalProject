import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Booksuccess1Page } from './booksuccess1.page';

const routes: Routes = [
  {
    path: '',
    component: Booksuccess1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Booksuccess1PageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Booksuccess1PageRoutingModule } from './booksuccess1-routing.module';

import { Booksuccess1Page } from './booksuccess1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Booksuccess1PageRoutingModule
  ],
  declarations: [Booksuccess1Page]
})
export class Booksuccess1PageModule {}

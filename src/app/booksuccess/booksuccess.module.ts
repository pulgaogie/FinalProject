import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksuccessPageRoutingModule } from './booksuccess-routing.module';

import { BooksuccessPage } from './booksuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksuccessPageRoutingModule
  ],
  declarations: [BooksuccessPage]
})
export class BooksuccessPageModule {}

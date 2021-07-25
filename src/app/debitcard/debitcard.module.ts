import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebitcardPageRoutingModule } from './debitcard-routing.module';

import { DebitcardPage } from './debitcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebitcardPageRoutingModule
  ],
  declarations: [DebitcardPage]
})
export class DebitcardPageModule {}

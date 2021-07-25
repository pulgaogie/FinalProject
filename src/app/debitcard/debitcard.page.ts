import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { async } from 'q';
@Component({
  selector: 'app-debitcard',
  templateUrl: './debitcard.page.html',
  styleUrls: ['./debitcard.page.scss'],
})
export class DebitcardPage implements OnInit {

  constructor(private loadingController:LoadingController) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Processing...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
}
  ngOnInit() {
   
  }
}

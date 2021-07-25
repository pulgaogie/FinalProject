import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-creditcard2',
  templateUrl: './creditcard2.page.html',
  styleUrls: ['./creditcard2.page.scss'],
})
export class Creditcard2Page implements OnInit {

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

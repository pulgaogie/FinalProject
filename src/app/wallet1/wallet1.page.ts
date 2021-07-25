import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-wallet1',
  templateUrl: './wallet1.page.html',
  styleUrls: ['./wallet1.page.scss'],
})
export class Wallet1Page implements OnInit {

  constructor(private loadingController:LoadingController) { }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Processing your payment...',
      duration: 5000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
}
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-debitcard2',
  templateUrl: './debitcard2.page.html',
  styleUrls: ['./debitcard2.page.scss'],
})
export class Debitcard2Page implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(private alertCtrl:AlertController) { }

async unavailable(){
  let prompt=await this.alertCtrl.create({
    header:'Unavailable payment option ',
    buttons:[
      {
        text:'Cancel',
        role:'cancel',
        handler:()=>{
          console.log('No');
        }
      },
     
    ]

  });
  prompt.present();
}

  ngOnInit() {
  }

}

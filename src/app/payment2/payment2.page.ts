import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-payment2',
  templateUrl: './payment2.page.html',
  styleUrls: ['./payment2.page.scss'],
})
export class Payment2Page implements OnInit {

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

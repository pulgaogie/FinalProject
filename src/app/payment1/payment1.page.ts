import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-payment1',
  templateUrl: './payment1.page.html',
  styleUrls: ['./payment1.page.scss'],
})
export class Payment1Page implements OnInit {

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

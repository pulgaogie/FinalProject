import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-bus',
  templateUrl: './bus.page.html',
  styleUrls: ['./bus.page.scss'],
})
export class BusPage implements OnInit {

  constructor(private alertCtrl:AlertController) { }

  async unavailable(){
    let prompt=await this.alertCtrl.create({
      header:'Unavailable bus option ',
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

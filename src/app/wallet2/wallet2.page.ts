import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-wallet2',
  templateUrl: './wallet2.page.html',
  styleUrls: ['./wallet2.page.scss'],
})
export class Wallet2Page implements OnInit {

  constructor() {

   }
   openUrl() {

    window.open('https://play.google.com/store/apps/details?id=com.globe.gcash.android&hl=en&gl=US', '_self')

    
}    
  ngOnInit() {
  }

}

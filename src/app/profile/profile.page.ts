import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ContactData {
  busname: string;
  busnumber: string;
  route: string;
  buscondition:string;
  price:string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  data=[];
  contactData: ContactData;

  constructor(private http:HttpClient) { 
    this.contactData = {} as ContactData;
    this.http.get('http://localhost:8000/api/Buses').subscribe(console.log);
  }
 /* 
getbusData():Promise<any> {
return new Promise((resolve,reject)=>{
  this.http.get('http://localhost:8000/api/Buses').subscribe(data=>{
    resolve(data);
},err=>{
  reject(err)
}
  );
});
}
  */

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
myform:FormGroup;

 constructor(private http:HttpClient) {}

 
  ngOnInit() {
    
    this.myform=new FormGroup({
firstname: new FormControl(null,[Validators.required]),
lastname: new FormControl(null,[Validators.required]),
username: new FormControl(null,[Validators.required]),
password: new FormControl(null,[Validators.required]),
    });
  }
  
  insertData(){
 /* this.http.post('http://localhost:8000/api/Registrations',(this.myform.value)).subscribe((this.myform.value));*/
  console.log((this.myform.value));
  
  }

}




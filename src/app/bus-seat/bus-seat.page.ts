import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { HttpClient } from '@angular/common/http';
import { Validators, FormGroup,FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bus-seat',
  templateUrl: './bus-seat.page.html',
  styleUrls: ['./bus-seat.page.scss'],
})
export class BusSeatPage implements OnInit {
  insertdata=[];
myform:FormGroup;
  dateMulti: string[];
  type: 'string';

  
  constructor(private http:HttpClient, private alertCtrl:AlertController) { }




  ngOnInit() {

    this.myform=new FormGroup({
      from_des: new FormControl(null,[Validators.required]),
      to_des: new FormControl(null,[Validators.required]),
      des_date: new FormControl(null,[Validators.required]),
      des_time: new FormControl(null,[Validators.required]),
          });
        }
        
        insertData(){
          
       /*  this.http.post('http://localhost:8000/api/registrations',(this.myform.value)).subscribe((this.myform.value));*/
        this.insertdata.push((this.myform.value));
        console.log((this.myform.value));
        }

        async payment() {
    
          let prompt=await this.alertCtrl.create({
            header:'Choose payment method',
            inputs: [
              {
                name: 'Code',
                placeholder: 'Enter code'
              },
            ],
            buttons:[
              {
                text:'SAVE',
                handler:data=>{
                  console.log();
                }
              },
            ],
          });
          prompt.present();
      }
      
    
    
    }

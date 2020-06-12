import { Component, OnInit } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private fcm: FCM) {}

ngOnInit(){
  this.fcm.getToken().then(token => {
    console.log(token);
  });

}

}

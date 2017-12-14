import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let body= {
      message: "Do you here me?"
    };






    console.log('ionViewDidLoad LoginPage');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private iab: InAppBrowser,public platform:Platform) {
    this.platform=platform;
  }
  museum(){
    this.platform.ready().then(()=>{
      this.iab.create("assets/museum/index.html",'_self','location=true');
    });

  }
  haunted(){
    this.platform.ready().then(()=>{
      this.iab.create("assets/hauntedHouse/index.html",'_self','location=true');
    });
  }

}

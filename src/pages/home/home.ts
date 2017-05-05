import { Component } from '@angular/core';
import { NavController, ViewController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, viewCtrl: ViewController, private menu: MenuController ) {
    this.menu.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

}

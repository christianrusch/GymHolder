import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  pages: Array<{title: string, component: any}>;

  constructor(public nav: NavController, public navParams: NavParams, private menu: MenuController) {
    this.menu.enable(false);

    this.pages = [
      { title: 'BYPASS', component: TabsPage }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  openPage(page) {
    this.menu.close();
  // Reset the content nav to have just this page
  // we wouldn't want the back button to show in this scenario
  // let nav = this.app.getComponent('nav');
    this.nav.setRoot(page.component);
  }

}

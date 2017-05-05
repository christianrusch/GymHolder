import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { FriendsPage } from '../pages/friends/friends';
import { GroupsPage } from '../pages/groups/groups';
import { SettingsPage } from '../pages/settings/settings';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

/*
  ngAfterViewInit() {
    // Let's navigate from TabsPage to Page1
    this.nav.push(LoginPage);
  }
*/

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private menu: MenuController) {
    this.initializeApp();

    this.pages = [
      { title: 'Hem', component: TabsPage },
      { title: 'Profil', component: ProfilePage },
      { title: 'Vänner', component: FriendsPage },
      { title: 'Grupper', component: GroupsPage },
      { title: 'Inställningar', component: SettingsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
  // Reset the content nav to have just this page
  // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

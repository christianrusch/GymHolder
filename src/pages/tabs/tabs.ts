import { Component } from '@angular/core';
import { NavController, ViewController, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LeaderboardPage } from '../leaderboard/leaderboard';
import { NotificationsPage } from '../notifications/notifications';
import { MessagesPage } from '../messages/messages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  constructor() {

    this.tab1 = HomePage;
    this.tab2 = LeaderboardPage;
    this.tab3 = NotificationsPage;
    this.tab4 = MessagesPage;

  }

}

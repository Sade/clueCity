import {Component} from '@angular/core';

import {NavController, LoadingController} from 'ionic-angular';

import {AuthProvider} from '../../providers/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private auth: AuthProvider, private loadingCtrl: LoadingController) {

  }

  logout() {
    this.auth.logout();
  }

}

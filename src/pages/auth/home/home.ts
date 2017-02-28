import {NavController, LoadingController} from 'ionic-angular';
import {Component} from '@angular/core';

import {AuthProvider} from '../../../providers/auth';

import {SignUpPage} from "../sign-up/sign-up";

@Component({
  templateUrl: 'home.html',
  selector: 'auth-home',
})

export class AuthPage {
  error: any;
  form: any;

  constructor(private navCtrl: NavController, private auth: AuthProvider, private loadingCtrl: LoadingController) {
    this.form = {
      email: '',
      password: ''
    }
  }

  openSignUpPage() {
    this.navCtrl.push(SignUpPage);
  }

  login() {
    let loading = this.loadingCtrl.create({
      content: 'Patience...'
    });
    loading.present();

    this.auth.loginWithEmail(this.form).subscribe(data => {
      setTimeout(() => {
        loading.dismiss();
        // The auth subscribe method inside the app.ts will handle the page switch to home
      }, 1000);
    }, err => {
      setTimeout(() => {
        loading.dismiss();
        this.error = err;
      }, 1000);
    });
  }
}

import { NavController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AuthProvider } from '../../../providers/auth';

import { HomePage } from '../../home/home';
import { AuthPage } from '../home/home';

@Component({
  templateUrl: 'sign-up.html',
  selector: 'sign-up',
})

export class SignUpPage {
  error: any;
  form: any;

  constructor(private navCtrl: NavController,
              private auth: AuthProvider,
              private loadingCtrl: LoadingController,
  ) {
    this.form = {
      email: '',
      password: ''
    }
  }

  openLoginPage(): void {
    this.navCtrl.push(AuthPage);
  }

  register() {
    let loading = this.loadingCtrl.create({
      content: 'Patience...'
    });
    loading.present();

    this.auth.registerUser(this.form).subscribe(registerData => {
      this.auth.loginWithEmail(registerData).subscribe(loginData => {
        setTimeout(() => {
          loading.dismiss();
          this.navCtrl.setRoot(HomePage);
        }, 1000);
      }, loginError => {
        setTimeout(() => {
          loading.dismiss();
          this.error = loginError;
        }, 1000);
      });
    }, registerError => {
      setTimeout(() => {
        loading.dismiss();
        this.error = registerError;
      }, 1000);
    });
  }
}

import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';

import {AngularFireModule} from 'angularfire2';

import {MyApp} from './app.component';

// Pages
import {HomePage} from '../pages/home/home';
import {AuthPage} from '../pages/auth/home/home';
import {SignUpPage} from "../pages/auth/sign-up/sign-up";

// Providers
import {DataProvider} from '../providers/data';
import {AuthProvider} from '../providers/auth';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCHG--b0RJixiUNmV3EYly5zWH3yQDhlrE",
  authDomain: "clue-city.firebaseapp.com",
  databaseURL: "https://clue-city.firebaseio.com",
  storageBucket: "clue-city.appspot.com",
  messagingSenderId: "620116733950"
};

@NgModule({
  declarations: [
    MyApp,
    AuthPage,
    HomePage,
    SignUpPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthPage,
    HomePage,
    SignUpPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataProvider, AuthProvider]
})


export class AppModule {
}

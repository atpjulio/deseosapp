import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PendingsPage} from "../pages/pendings/pendings";
import {FinishedPage} from "../pages/finished/finished";
import { WishListProvider } from '../providers/wish-list/wish-list';
import {AddPage} from "../pages/add/add";
import {PlaceholderPipe} from "../pipes/placeholder/placeholder";
import {DetailPage} from "../pages/detail/detail";
import {PendientesPipe} from "../pipes/pendientes/pendientes";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PendingsPage,
    FinishedPage,
    AddPage,
    DetailPage,
    PlaceholderPipe,
    PendientesPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PendingsPage,
    FinishedPage,
    AddPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WishListProvider
  ]
})
export class AppModule {}

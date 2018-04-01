import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { IonicStorageModule } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginPageModule } from '../pages/login/login.module';
import { GuideMePageModule } from '../pages/guide-me/guide-me.module';
import { StatsPageModule } from '../pages/stats/stats.module';
import { NotificationsPageModule } from '../pages/notifications/notifications.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ContainerPageModule } from '../pages/container/container.module';
import { SignupPageModule } from '../pages/signup/signup.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { GlobalDataService } from '../providers/global-data-service/global-data-service';
import {
  apiEndPoint,
  UserAuthService
} from '../providers/user-auth-service/user-auth-service';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { HttpClientModule } from '@angular/common/http';
import { AlertServiceProvider } from '../providers/alert-service/alert-service';
import { ComponentsModule } from '../components/components.module';

const config: SocketIoConfig = { url: apiEndPoint, options: {} };

@NgModule({
  bootstrap: [IonicApp],
  declarations: [MyApp, HomePage],
  entryComponents: [MyApp, HomePage],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    StatsPageModule,
    GuideMePageModule,
    NotificationsPageModule,
    ProfilePageModule,
    ContainerPageModule,
    SocketIoModule.forRoot(config),
    SignupPageModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GlobalDataService,
    NativeStorage,
    UserAuthService,
    Facebook,
    GooglePlus,
    AlertServiceProvider
  ]
})
export class AppModule { }

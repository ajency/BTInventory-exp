import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { InventoryApp } from './app.component';
import { SkuDetailsServiceProvider } from '../providers/sku-details-service/sku-details-service';


@NgModule({
  declarations: [
    InventoryApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(InventoryApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    InventoryApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SkuDetailsServiceProvider
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TransferProvider } from './../pages/providers/transfers/transfer'
import { HttpModule } from '@angular/http'
import { HomePage } from '../pages/home/home';
import { ListaTransferenciaPage } from './../pages/lista-transferencia/lista-transferencia'
import { DetalheTransferenciaPage } from './../pages/detalhe-transferencia/detalhe-transferencia'
import { PesquisarPipe } from './../pipes/pesquisar/pesquisar'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaTransferenciaPage,
    DetalheTransferenciaPage,
    PesquisarPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaTransferenciaPage,
    DetalheTransferenciaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TransferProvider
  ]
})
export class AppModule {}

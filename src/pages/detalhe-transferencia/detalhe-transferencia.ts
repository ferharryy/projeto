import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhe-transferencia',
  templateUrl: 'detalhe-transferencia.html',
})
export class DetalheTransferenciaPage {
  transferencia: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transferencia = this.navParams.data.transferencia;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheTransferenciaPage');
  }

}

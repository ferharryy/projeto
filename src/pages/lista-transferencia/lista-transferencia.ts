import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import { TransferProvider } from './../providers/transfers/transfer'
import { ViewChild } from '@angular/core'
import { DetalheTransferenciaPage } from './../detalhe-transferencia/detalhe-transferencia'


@IonicPage()
@Component({
  selector: 'page-lista-transferencia',
  templateUrl: 'lista-transferencia.html',
})
export class ListaTransferenciaPage {
  transferencias: any[];
  pagina: number;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private transferProvider: TransferProvider) {
  }

  ionViewDidEnter(){
    this.transferencias = [];
    this.pagina = 1;
    this.infiniteScroll.enable(true);
    this.getTransferencias(this.pagina)
  }

  getTransferencias(pagina: number){
    this.transferProvider.transfer()
    .then((result : any) => {
      for (var i = 0; i < result.data.length; i++){
        var transferencia = result.data[i];
        this.transferencias.push(transferencia);
      }

      if(this.infiniteScroll){
        this.infiniteScroll.complete();
        if(this.transferencias.length == result.total){
          this.infiniteScroll.enable(false);
        }
      }
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Falha ao carregar lista. Erro: ' + error, position: 'bottom', duration: 3000 }).present();
    });
  }

  getTransferencia(){
    setTimeout(() => {
      this.pagina += 1;
      this.getTransferencias(this.pagina);
    }, 500);
  }
  
  detalheTransferencia(transferencia: any){
    this.navCtrl.push(DetalheTransferenciaPage, { transferencia });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaTransferenciaPage');
  }

}

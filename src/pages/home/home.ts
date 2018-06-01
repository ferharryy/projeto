import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListaTransferenciaPage } from '../lista-transferencia/lista-transferencia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {

  }

  listaTransferencia(){
    this.nav.push(ListaTransferenciaPage);
  }
}

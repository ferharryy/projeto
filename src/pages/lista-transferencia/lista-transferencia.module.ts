import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaTransferenciaPage } from './lista-transferencia';

@NgModule({
  declarations: [
    ListaTransferenciaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaTransferenciaPage),
  ],
})
export class ListaTransferenciaPageModule {}

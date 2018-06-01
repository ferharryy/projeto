import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheTransferenciaPage } from './detalhe-transferencia';

@NgModule({
  declarations: [
    DetalheTransferenciaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheTransferenciaPage),
  ],
})
export class DetalheTransferenciaPageModule {}

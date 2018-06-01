import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pesquisar',
})
export class PesquisarPipe implements PipeTransform {

  transform(itens: any[], termos: string): any[] {
    if(!itens) return [];
    if(!termos) return itens;
    termos = termos.toLowerCase();
    return itens.filter( it => {
      var retorno = it.beneficiario.nome.toLowerCase().includes(termos);
      retorno += it.pagador.nome.toLowerCase().includes(termos);
      retorno += it.status.toLowerCase().includes(termos);
      retorno += it.tipo.toLowerCase().includes(termos);
      return retorno;
    });
  }
}

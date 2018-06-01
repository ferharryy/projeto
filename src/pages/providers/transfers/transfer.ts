import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class TransferProvider {
    private API_URL = 'https://nix-bank-qa.cloudint.nexxera.com/v1/transactions'

    constructor(public http: Http) {}

    transfer(){
        return new Promise((resolve, reject) => {
            this.http.get(this.API_URL)
            .subscribe((result: any) => {
                resolve(result.json());
        })
        }); 
    }

}
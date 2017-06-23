import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the SkuDetailsServiceProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class SkuDetailsServiceProvider {

  constructor(public http: Http) {
    console.log('Hello SkuDetailsServiceProvider Provider');
  }


  /*
   abvPrice:
   abvQty:
   blwPrice:
   blwQty:
   limit:10
   page:1
   pfFilter:
   sku:
   skuFilter:sku
   sortField:sellable
   sortType:DESC
   type:to_ship
   whsFilter:
   */

  getSKUDetails(params: object) {
    console.log("getSKUDetails API func entered");

    //Has no filters
    let url = 'http://app.browntape.com/skus/getSkuDetails';
    return new Promise(resolve => {
      this.http.request(url).subscribe(data => {
        console.log(data);
        resolve(data);
      });
    });
  }
}

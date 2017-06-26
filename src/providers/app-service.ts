import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppService {
  jQuery: any;
  constructor(
    public http: Http
  ) {

  }

  public request(url: string,type: string, body: object, optionalHeaders: object = {},overrideheaders: boolean = false, returntype: string = 'promise'): any{



    let headers = new Headers({'Content-Type': 'application/json','Accept': 'application/json'});

    let opHeaderKeys = Object.keys(optionalHeaders);
    if(opHeaderKeys.length){
      if(overrideheaders){
        headers = new Headers(optionalHeaders);
      }
      else{
        for(let key of opHeaderKeys){
          headers.append(key,optionalHeaders[key]);
        }
      }

    }

    let httpEvent;
    if(type === 'get'){
      //TBD construct query params
      let params = this.encodeQueryData(body);
      if (params.length > 0) {
        url = url + '?' + params;
      }
      console.log("url" + url);
      httpEvent = this.http.get(url,{headers: headers})
    }
    else if(type === 'post'){
      httpEvent = this.http.post(url,body,{headers: headers})
    }

    if(returntype === 'promise'){
      return httpEvent
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }
    else{
      return httpEvent
        .map(response => response.json())
        .catch(this.handleError);
    }


  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  public parseRejectedError(error: any): any{
    if(error._body){
      return JSON.parse(error._body);
    }
    else{
      return error;
    }
  }

  encodeQueryData(data) {
  let ret = [];
  for (let d in data)
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  return ret.join('&');
}

}

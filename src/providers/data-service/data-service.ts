import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor(public http: Http) {
    console.log('Hello DataServiceProvider Provider');
    
  }
  getListDetails(){
   return this.http.get('assets/data/products.json').map(res => res.json());
  
  }
  load() {

   return this.http.get('http://thkjr.emr-life.com/taig/Api/get_database').map(res => res.json());

  }
  

}

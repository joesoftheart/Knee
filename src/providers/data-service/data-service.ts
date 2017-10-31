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
   return this.http.get('http://thkjr.emr-life.com/taig/Api/get_database').map(res => res.json().implant_profile);
  
  }
  load() {

   return this.http.get('http://thkjr.emr-life.com/taig/Api/get_database').map(res => res.json().implant_profile);

  }

  LoadHospitalName() {
    
       return this.http.get('http://thkjr.emr-life.com/taig/Api/get_database').map(res => res.json().hospital);
    
      }
  
  searchData(value) {
        var url = 'http://emr-life.com/thkjr/taig/Api/query?hospital=55c4e3ed790f9b223e000002&hn='+value;
        var response = this.http.get(url).map(res => res.json().data);
        return response;
  } 
  
  addCaseData(value){
       var url = 'http://emr-life.com/thkjr/taig/Api/submit_case?update=result'
  }

  
}

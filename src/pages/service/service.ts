import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})

export class ServicePage {
  implant_profile: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService: DataServiceProvider) {
    this.dataService.load()
    .subscribe((response)=> {
      this.implant_profile = response
      console.log(this.implant_profile);
     
      this.selectedProduct = {};
      
        this.selectedProduct = this.implant_profile
        if(this.selectedProduct !== undefined) {
          this.productFound = true;
        } else {
          this.productFound = false;

        }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }

  load(){
   
  }

}

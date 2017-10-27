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
  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService: DataServiceProvider) {
    this.dataService.load()
    .subscribe((response)=> {
      this.products = response
      console.log(this.products);
     
      this.selectedProduct = {};
      
        this.selectedProduct = this.products
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

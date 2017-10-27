import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { ServicePage } from '../service/service';

/**
 * Generated class for the NewCasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-case',
  templateUrl: 'new-case.html',
})
export class NewCasePage {
  scanData : {};
  encodeData : string ;
  encodedData : {} ;
  options :BarcodeScannerOptions;
  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavController,private barcodeScanner: BarcodeScanner,public dataService: DataServiceProvider) {
    this.dataService.getListDetails()
    .subscribe((response)=> {
        this.products = response
        console.log(this.products);
    });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCasePage');
  }

  scan() {
    var scanOption = {
      "preferFrontCamera" : true, // ใช้กล้องหน้าเป็นหลัก false คือกล้องหลัง
      "showFlipCameraButton" : true, // แสดงปุ่ม icon สลับกล้องหน้า กล้องหลัง
      "showTorchButton" : true, // แสดงปุ่ม icon ไฟแฟลส
      "prompt" : "ให้ตำแหน่งของ barcode อยู่ภายในพื้นที่ scan", // ข้อความกำหนดเอง
  };
    this.selectedProduct = {};
    this.barcodeScanner.scan(scanOption).then((barcodeData) => {
      this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
      if(this.selectedProduct !== undefined) {
        this.productFound = true;
      } else {
        this.productFound = false;
        
        
      }
    }, (err) => {
     
      
    });
  }
  
  encodeText(){
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,this.encodeData).then((encodedData) => {
  
        console.log(encodedData);
        this.encodedData = encodedData;
  
    }, (err) => {
        console.log("Error occured : " + err);
    });                 
  }

  service(){
    this.navCtrl.push(ServicePage)
  }

}

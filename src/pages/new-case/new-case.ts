import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { ServicePage } from '../service/service';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormBuilder , Validators, FormGroup ,AbstractControl ,ValidatorFn} from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';



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
  implant_profile: any[] = [];
  selectedImpant: any;
   arr = [];
  dataArray:any;
  productFound:boolean = false;


  hospital : any[] = [];
  selectedHospital : any;
  hospitalFound:boolean = false;

  formCase: FormGroup;
  date : AbstractControl;
  hos : AbstractControl;
  name : AbstractControl;
  hn : AbstractControl;
  sex : AbstractControl;
  age : AbstractControl;
  casetype : AbstractControl;
  
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavController,private barcodeScanner: BarcodeScanner,public dataService: DataServiceProvider,public loadingCtrl: LoadingController,public formbuild:FormBuilder,private toast: Toast,private sqlite: SQLite) {
    this.presentLoadingDefault()
    this.dataService.getListDetails()
    .subscribe((response)=> {
        this.implant_profile = response
        console.log(this.implant_profile);
        // var myJSONText = JSON.stringify(response);
        // console.log(myJSONText);
    });


    this.dataService.LoadHospitalName()
    .subscribe((response)=> {
      this.hospital = response
      console.log(this.hospital);
     
      this.selectedHospital = {};
      
        this.selectedHospital = this.hospital
        if(this.selectedHospital !== undefined) {
          this.hospitalFound = true;
        } else {
          this.hospitalFound = false;

        }
      });


      this.formCase = formbuild.group({
        date :['',Validators.required],
        hos:['',Validators.required],
        name : ['',Validators.required],
        hn :['',Validators.required],
        sex:['' , Validators.required],
        age:['',Validators.required],
        casetype:['',Validators.required]
       });

          this.date = this.formCase.controls['date'];
          this.hos = this.formCase.controls['hos'];
          this.name = this.formCase.controls['name'];
          this.hn = this.formCase.controls['hn'];
          this.sex = this.formCase.controls['sex'];
          this.age = this.formCase.controls['aage'];
          this.casetype = this.formCase.controls['casetype'];
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCasePage');
  }


  onAddCase(value : any ):void{
    console.log(this.formCase.value);
    console.log("SaveDataCase");
    this.saveData();
 }

 saveData() {
   this.sqlite.create({
     name: 'ionicdb.db',
     location: 'default'
   }).then((db: SQLiteObject) => {
     db.executeSql('INSERT INTO casetype VALUES(NULL,?,?,?,?,?,?,?)',[this.date.value,this.hos.value,this.name.value,this.hn.value,this.sex.value,this.age.value,this.casetype.value])
       .then(res => {
         console.log(res);
         this.toast.show('Data saved', '5000', 'center').subscribe(
           toast => {
             
           }
         );
       })
       .catch(e => {
         console.log(e);
         this.toast.show(e, '5000', 'center').subscribe(
           toast => {
             console.log(toast);
           }
         );
       });
   }).catch(e => {
     console.log(e);
     this.toast.show(e, '5000', 'center').subscribe(
       toast => {
         console.log(toast);
       }
     );
   });
 }




  presentLoadingDefault() {
    const loading = this.loadingCtrl.create({
      content: 'Please wait Loading ...'
              
      
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 10000);
  }


  scan() {
    var scanOption = {
      "preferFrontCamera" : false, // ใช้กล้องหน้าเป็นหลัก false คือกล้องหลัง
      "showFlipCameraButton" : false, // แสดงปุ่ม icon สลับกล้องหน้า กล้องหลัง
      "showTorchButton" : false, // แสดงปุ่ม icon ไฟแฟลส
      "prompt" : "ให้ตำแหน่งของ barcode อยู่ภายในพื้นที่ scan", // ข้อความกำหนดเอง
  };
    this.selectedImpant = {};
    this.barcodeScanner.scan(scanOption).then((barcodeData) => {


      this.selectedImpant = this.implant_profile.find(implant => implant.barcode === barcodeData.text);
      if(this.selectedImpant !== undefined) {
        console.log('have text');
        this.presentConfirm(this.selectedImpant)
      } else {
        this.productFound = false;
        console.log('have text');
        
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


  Alert(){
    const alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
      
  }

  presentConfirm(selectedImpant) {
    const alert = this.alertCtrl.create({
      title: 'Confirm Implant',
      message: "Brand :" + "xxxx" + 
      "Model :" + selectedImpant.component_description + 
      "Site :" + "xxxx" +
      "Size : " + selectedImpant.size,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.productFound = false;
          
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Ok');
            this.productFound = true;
        

            
            this.arr.push(this.selectedImpant);
            
             

          this.dataArray = this.arr
            console.log(this.arr)
          }
        }
      ]
    });
    alert.present();
  }


  OpenScan(){
  
  }
   
  

}

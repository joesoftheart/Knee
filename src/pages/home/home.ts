import { Component } from '@angular/core';
import { NavController , App } from 'ionic-angular';
import { NewCasePage } from '../new-case/new-case';
import { Platform } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { LoadingController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public platform: Platform; //Platform controller
 
  username: string;
  datacase: any = [];
  myDataArray = ['1', '2', '3','1', '2', '3','1', '2', '3','1', '2', '3','1', '2', '3','1', '2', '3'];

    public event = {
        month: '1990-02-19',
        timeStarts: '07:43',
        timeEnds: '1990-02-20'
      }
      hospital : any[] = [];
      selectedHospital : any;
      hospitalFound:boolean = false;
      constructor(public navCtrl: NavController,private toast:Toast, public navParams: NavController, public app :App,public dataService: DataServiceProvider,public loadingCtrl: LoadingController,private sqlite:SQLite) {
          this.presentLoadingDefault()
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
        
       this.myDataArray
        this.username = window.localStorage.getItem('username');
        
        
      }

      ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
        this.getData();
      }
    

      presentLoadingDefault() {
        const loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
      
        loading.present();
      
        setTimeout(() => {
          loading.dismiss();
        }, 5000);
      }

  logout(){
    // Remove API token 
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');
    const root = this.app.getRootNav();
    root.popToRoot();
}


newcase(){
this.navCtrl.push(NewCasePage)
}

hospitalCheck:boolean = false;
hospitalName:any[] = [];
selectedHospitalName:any;
onSelectChange(selectedValue: any) {
  console.log('Selected', selectedValue);

    this.selectedHospitalName = {};
    
      this.selectedHospitalName = this.hospital
      if(this.selectedHospitalName !== undefined) {
        this.hospitalCheck = true;
      } else {
        this.hospitalCheck = false;

      }
    console.log('Out :',this.selectedHospitalName);
    return this.selectedHospitalName;
}

getData() {
  this.sqlite.create({
    name: 'ionicdb.db',
    location: 'default' }).then((db: SQLiteObject) => {
          db.executeSql('SELECT * FROM casetype ORDER BY caseid DESC', {}).then(res => {
          this.datacase = [];
            for(var i=0; i<res.rows.length; i++) {
            this.datacase.push({caseid:res.rows.item(i).caseid,date:res.rows.item(i).date,hn:res.rows.item(i).hn,sex:res.rows.item(i).sex,age:res.rows.item(i).age,case:res.rows.item(i).case})
            }
            this.toast.show('getCaseType', '5000', 'center').subscribe(
              toast => {
                  
              }
            );
          }).catch(e => console.log(e));  
  }).catch(e => console.log(e));
}




}


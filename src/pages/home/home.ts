import { Component } from '@angular/core';
import { NavController , App } from 'ionic-angular';
import { NewCasePage } from '../new-case/new-case';
import { Platform } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import {} from '';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public platform: Platform; //Platform controller
 
  email: string;

  myDataArray = ['1', '2', '3','1', '2', '3','1', '2', '3','1', '2', '3','1', '2', '3','1', '2', '3'];

    public event = {
        month: '1990-02-19',
        timeStarts: '07:43',
        timeEnds: '1990-02-20'
      }
      hospital : any[] = [];
      selectedHospital : any;
      productFound:boolean = false;
      constructor(public navCtrl: NavController,private toast:Toast, public navParams: NavController, public app :App,public dataService: DataServiceProvider) {
        this.dataService.LoadHospitalName()
        .subscribe((response)=> {
          this.hospital = response
          console.log(this.hospital);
         
          this.selectedHospital = {};
          
            this.selectedHospital = this.hospital
            if(this.selectedHospital !== undefined) {
              this.productFound = true;
            } else {
              this.productFound = false;
    
            }
        });
        
       this.myDataArray
        this.email = window.localStorage.getItem('email');
        
      }

  logout(){
    // Remove API token 
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('password');
    const root = this.app.getRootNav();
    root.popToRoot();
}


newcase(){
this.navCtrl.push(NewCasePage)
}


onSelectChange(selectedValue: any) {
  console.log('Selected', selectedValue);

}


}

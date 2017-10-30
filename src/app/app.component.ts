import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/home/home';
import { NewCasePage } from '../pages/new-case/new-case';
import { ServicePage } from '../pages/service/service';
import { Toast } from '@ionic-native/toast';
import { Config, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../providers/data-service/data-service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;
  public platform: Platform; //Platform controller
  showedAlert: boolean;
  hospital : any[] = [];
  selectedHospital : any;
  hospitalFound:boolean = false;
  constructor(platform: Platform,private toast: Toast, public toastCtrl: ToastController, statusBar: StatusBar, splashScreen: SplashScreen,public dataService: DataServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      

    });
    
    

   function onExit(){
    platform.registerBackButtonAction(() => {
      
      var lastTimeBackPress = 0;
      var timePeriodToExit  = 2000;
      // get current active page
          if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
         
      
            this.platform.exitApp();//Exit from app
          } else {
              let toast = this.toastCtrl.create({
                  message:  'Press back again to exit App?',
                  duration: 3000,
                  position: 'bottom'
              });
              toast.present();
              lastTimeBackPress = new Date().getTime();
          }
       }); 
   }


    function onLoad() {
      document.addEventListener("deviceready", onDeviceReady, false);
  }
  
  // device APIs are available
  //
  function onDeviceReady() {
      document.addEventListener("pause", onPause, false);
      document.addEventListener("resume", onResume, false);
      document.addEventListener("menubutton", onMenuKeyDown, false);
      // Add similar listeners for other events
  }
  
  function onPause() {
      // Handle the pause event
  }
  
  function onResume() {
      // Handle the resume event
  }
  
  function onMenuKeyDown() {
      // Handle the menubutton event
  }

  function showToast() {
    let toast = this.Toast.create({
      message: 'Press Again to exit',
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  
    




    
  }
}


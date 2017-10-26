import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import {Validators ,FormBuilder ,FormGroup , AbstractControl ,ValidatorFn} from '@angular/forms';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { TabspagePage  } from '../tabspage/tabspage';
import { HomePage  } from '../home/home';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  loginform : FormGroup;
  email : AbstractControl;
  password : AbstractControl;


  constructor(public navCtrl: NavController, public navParams: NavParams ,public formbuilder:FormBuilder,public alertCtrl:AlertController) {
    let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      
    this.loginform = formbuilder.group({
          email:['',Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
          password:['',Validators.required]
       });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  
  onlogin(value: any):void{

     if(value.email == "admin@admin.com" && value.password == "admin"){
         window.localStorage.setItem('email',value.email);
         window.localStorage.setItem('password',value.password);
         this.suscessfull(value.email);
     }else{
          this.nosuscess();
     }
  
  }

 
  signup(){
    this.navCtrl.push(SignupPage);
    }


    suscessfull(name) {
      const alert = this.alertCtrl.create({
        title: 'Login Suscess',
        message: 'Welcome '+name,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.navCtrl.push(HomePage);
            }
          }
        ]
      });
      alert.present();
    }
  
   nosuscess() {
      const alert = this.alertCtrl.create({
        title: 'Login faile',
        message: 'username or password isincorrect',
        buttons: [
          {
            text: 'OK',
            handler: () => {
             
            }
          }
        ]
      });
      alert.present();
    }
}

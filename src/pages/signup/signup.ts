import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController, App} from 'ionic-angular';
import {Validators ,FormBuilder ,FormGroup , AbstractControl ,ValidatorFn} from '@angular/forms';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

 formregister: FormGroup;
 email : AbstractControl;
 password : AbstractControl;
 password_confirm: AbstractControl;
 brand : AbstractControl;


  constructor(public navCtrl: NavController, public navParams: NavParams , public formbuilder: FormBuilder,public alertCtrl:AlertController,public app :App) {

    let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    
      this.formregister = formbuilder.group({
          email:['',Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
          password:['',Validators.required],
          password_confirm:['',Validators.compose([Validators.required,this.equalto('password')])],
          brand:['',Validators.required]

     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        let input = control.value;
        let isValid=control.root.value[field_name]==input
          if(!isValid) 
             return { 'equalTo': {isValid} }
          else 
            return null;
         };
    }


    onRegister(value : any):void{
       this.suscessfull();
    }

    suscessfull() {
      const alert = this.alertCtrl.create({
        title: 'Register successfully',
        message: 'Go to login',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              const root = this.app.getRootNav();
              root.popToRoot();
            }
          }
        ]
      });
      alert.present();
    }
  

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController, App} from 'ionic-angular';
import {Validators ,FormBuilder ,FormGroup , AbstractControl ,ValidatorFn} from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
/**
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


  constructor(public navCtrl: NavController, public navParams: NavParams , public formbuilder: FormBuilder,public alertCtrl:AlertController,public app :App,private toast: Toast,private sqlite: SQLite) {

    let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    
      this.formregister = formbuilder.group({
          email:['',Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
          password:['',Validators.required],
          password_confirm:['',Validators.compose([Validators.required,this.equalto('password')])],
          brand:['',Validators.required]
     });

     this.email    = this.formregister.controls['email'];
     this.password = this.formregister.controls['password'];
     this.password_confirm = this.formregister.controls['password_confirm'];
     this.brand = this.formregister.controls['brand'];
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
       this.saveData();
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

    saveData() {
      this.sqlite.create({
        name: 'ionicdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO datauser  VALUES(NULL,?,?,?)',[this.email.value,this.password.value,this.brand.value])
          .then(res => {
            console.log(res);
            this.toast.show('Data saved', '5000', 'center').subscribe(
              toast => {
                this.suscessfull();
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
  

}

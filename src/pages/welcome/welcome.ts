import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import {Validators ,FormBuilder ,FormGroup , AbstractControl ,ValidatorFn} from '@angular/forms';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { TabspagePage  } from '../tabspage/tabspage';
import { HomePage  } from '../home/home';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite , SQLiteObject } from '@ionic-native/sqlite'

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
  username : AbstractControl;
  password : AbstractControl;


  constructor(public navCtrl: NavController, public navParams: NavParams ,public formbuilder:FormBuilder,public alertCtrl:AlertController,private splashScreen: SplashScreen,private sqlite: SQLite) {

    this.splashScreen.show()
    //let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      
    this.loginform = formbuilder.group({
          username:['',Validators.required],
          password:['',Validators.required]
       });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    this.createDB();
  }
  
  onlogin(value: any):void{

    //  if(value.email == "admin@admin.com" && value.password == "admin"){
    //      window.localStorage.setItem('email',value.email);
    //      window.localStorage.setItem('password',value.password);
    //      this.suscessfull(value.email);
    //  }else{
    //       this.nosuscess();
    //  }

    this.getData(value.username,value.password);
    
  
  }

 
   signup(){
    this.navCtrl.push(SignupPage);
    }

    go(){
      this.navCtrl.push(HomePage);
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

    
    createDB() {
      this.sqlite.create({
        name: 'ionicdb.db',
        location: 'default' }).then((db: SQLiteObject) => {
             
          db.executeSql('CREATE TABLE IF NOT EXISTS datauser(userid INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT, password TEXT)', {})
             .then(res => console.log('Executed SQL'))
             .catch(e => console.log(e)); 
             
          db.executeSql('CREATE TABLE IF NOT EXISTS casetype(caseid INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, hospital TEXT, name TEXT,hn TEXT, sex TEXT, age TEXT, case TEXT)', {})
             .then(res => console.log('Executed SQL casetype'))
             .catch(e => console.log(e));  
             
      }).catch(e => console.log(e));
    }

    getData(username,password) {
      this.sqlite.create({
        name: 'ionicdb.db',
        location: 'default' }).then((db: SQLiteObject) => {
              db.executeSql('SELECT * FROM datauser WHERE username=? AND password =?',[username,password]).then(res => {
              
              if(res.rows.length > 0){
                window.localStorage.setItem('username',username);
                window.localStorage.setItem('password',password);
                this.suscessfull(username);
              }else{
                this. nosuscess();
              }
              
              }).catch(e => console.log(e));  
      }).catch(e => console.log(e));
    }
}

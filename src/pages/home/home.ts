import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewCasePage } from '../new-case/new-case';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public event = {
        month: '1990-02-19',
        timeStarts: '07:43',
        timeEnds: '1990-02-20'
      }
      constructor(public navCtrl: NavController, public navParams: NavController) {
    }

  logout(){
    // Remove API token 
    const root = this.navCtrl;
    root.popToRoot();
}


newcase(){
this.navCtrl.push(NewCasePage)
}

}

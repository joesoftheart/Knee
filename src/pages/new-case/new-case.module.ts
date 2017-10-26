import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCasePage } from './new-case';

@NgModule({
  declarations: [
    NewCasePage,
  ],
  imports: [
    IonicPageModule.forChild(NewCasePage),
  ],
})
export class NewCasePageModule {}

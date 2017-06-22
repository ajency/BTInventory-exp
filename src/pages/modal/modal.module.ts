import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPage } from './modal';
import {IonTagsInputModule} from "ionic-tags-input";

@NgModule({
  declarations: [
    ModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPage),
    IonTagsInputModule
  ],
  exports: [
    ModalPage
  ]
})
export class ModalPageModule {}

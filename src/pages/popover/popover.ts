import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  private data: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('data');
    console.log("popover navParams data" + this.data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

}

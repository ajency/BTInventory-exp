import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Location } from '@angular/common';
import {EnvVariables} from "../../app/ev/ev.token";
/**
 * Generated class for the StockPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html',
})
export class StockPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private location: Location, public modalCtrl: ModalController, @Inject(EnvVariables) public envVariables) {
  }

  private productList: any = [];

  private dummyProducts = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockPage');
  }

  private itemtMouseOver(item: any): void{
    item.open = true;
    // item.selectedDetail = item.selectedDetail ? item.selectedDetail : 'seller';
  }

  private itemMouseOut(item: any): void{
    if(!item.selectedDetail){
          item.open = false
    }
    // item.selectedDetail = null;
  }

  private goBack(): void{
    this.location.back();
  }

  private paginationConfig: any = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0
  };

  private pagChanged(page): void{
    this.paginationConfig.currentPage = page;
  }

  showModal() {
      const modal = this.modalCtrl.create('ModalPage');
      modal.present();
  }

}

import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Location } from '@angular/common';
import {EnvVariables} from "../../app/ev/ev.token";
import { SkuDetailsServiceProvider } from '../../providers/sku-details-service/sku-details-service';

@IonicPage()
@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html',
})
export class StockPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private location: Location,
              public modalCtrl: ModalController,
              @Inject(EnvVariables) public envVariables,
              public skuDetails: SkuDetailsServiceProvider
  ) {
  }

  private priceSlider: any = { lower: 1050, upper: 2000 };

  private hideFilter: boolean = true;
  private hideHSN: boolean = true;
  private productList: any = [];

  private dummyProducts = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockPage');
    let params: {};
    console.log(this.skuDetails.getSKUDetailsDummy());
    this.productList = this.skuDetails.getSKUDetailsDummy();
    this.productList = this.productList.data.data;
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

  private filterOptions: any = {
  	search: {
  	},
  	quantity: {
  	},
  	sort: {
  	},
  	price: {
  	},
  	warehouse: {
  	}
  }

  private toggleDrop(filtertype: string): void{
    this.filterOptions[filtertype].open = !this.filterOptions[filtertype].open;
  }

  public toggleFilterDisplay(): void{
    this.hideFilter = !this.hideFilter;
  }
  public toggleHSNDisplay(): void{
    this.hideHSN = !this.hideHSN;
  }

  showModal() {
      const modal = this.modalCtrl.create('ModalPage');
      modal.present();
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Location } from '@angular/common';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private location: Location, public modalCtrl: ModalController) {
  }

  private priceSlider: any = { lower: 1050, upper: 2000 };

  private hideFilter: boolean = true;
  private hideHSN: boolean = true;
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

  private filterOptions: any = {
  	search: {
  	},
  	direction: {
  	},
  	sort: {
  	},
  	price: {
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

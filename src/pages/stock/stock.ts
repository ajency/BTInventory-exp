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
              public skuDetailsAPI: SkuDetailsServiceProvider
  ) {
  	for(let x = 0; x < this.defaultFilters.limit; x++){
  	  this.dummyProducts.push({});
  	}
  }

  private priceSlider: any = { lower: 1050, upper: 2000 };
  private hideFilter: boolean = true;
  private hideHSN: boolean = true;
  private productList: any = [];
  private companyActiveChannels: any = [];
  private showListLoading: boolean = false;
  private defaultFilters = {
    limit: 20,
    page: 1
  }
  private dummyProducts = [];

/*  private skuSubscribe: any = null;*/
  private filters = this.skuDetailsAPI.getDefaultFilters();

  ionViewDidEnter() {
    console.log('ionViewDidLoad StockPage');
    this.getSkuList();
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
    totalItems: 10
  };

  private pageChanged(page): void{
    this.showListLoading = true;
    this.paginationConfig.currentPage = page;
    this.showListLoading = false;
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
  	},
  	selected: {
  	},
  	add: {
  	},
  	bulk: {
  	},
  	upload: {
  	},
  	download: {
  	}
  }

  private statusTab: any = {
    active: {
      active : true,
    },
    to_ship: {
      active : false,
    },
    low_stock: {
      active : false,
    },
    stock_outs: {
      active : false,
    },
    warehouse: {
      active : false,
    },
    bundles: {
      active : false,
    },
    all: {
      active : false,
    },
    unlisted: {
      active : false,
    },
    archived: {
      active : false,
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

  private getSkuList(): any {
    this.showListLoading = true;

    return new Promise((resolve,reject) => {
      console.log(this.filters);


      this.skuDetailsAPI.getCompanyActiveChannels({})
        .then((res) => {
          console.log("response", res);
          this.productList = res.data.data;
          resolve(res.data)

          this.companyActiveChannels = res.data;
          this.skuDetailsAPI.getSKUDetails(this.filters)
            .then((res) => {
              console.log("response", res);
              this.productList = res.data.data;
              for(let i = 0; i < this.productList.length; i++){
                if( this.productList[i]['listings'] === undefined ){
                  this.productList[i]['listings'] = {};
                }
              }
              this.showListLoading = false;
              resolve(res.data)
            })
            .catch((err) => {
              console.warn("err", err);
              reject(err)
            });

        })
        .catch((err) => {
          console.warn("err", err);

          //For localhosts
          this.companyActiveChannels = this.skuDetailsAPI.getCompanyActiveChannelsDummy();
          this.companyActiveChannels = this.companyActiveChannels.data;

          this.productList = this.skuDetailsAPI.getSKUDetailsDummy();
          this.productList = this.productList.data.data;

          for(let i = 0; i < this.productList.length; i++){
            if( this.productList[i]['listings'] === undefined ){
              this.productList[i]['listings'] = {};
            }
          }
          console.log(this.companyActiveChannels);
          console.log(this.productList);
          this.showListLoading = false;

          resolve(err)
        });
    });
  }

  public changeStockStatusTab(status: string){
    this.showListLoading = true;
    if(status == 'all') {
      delete this.filters['type'];
    } else {
      this.filters['type'] = status;
    }
    for(let status in this.statusTab){
      this.statusTab[status]['active'] = false;
    }
    this.statusTab[status]['active'] = true;
    this.getSkuList();
  }

}

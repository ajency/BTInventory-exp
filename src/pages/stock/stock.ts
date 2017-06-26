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
  private priceListLoading: boolean = false;
  private defaultFilters = {
    limit: 20,
    page: 1
  }
  private dummyProducts = [];

/*  private skuSubscribe: any = null;*/
  private filters = this.skuDetailsAPI.getDefaultFilters();

  ionViewDidEnter() {
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
    totalItems: 0
  };

  private pageChanged(page): void{
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
  	},
  	selected: {
  	},
  	add: {
  	},
  	bulk: {
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

  private getCompanyActiveChannels(): any{
 /*   this.companyActiveChannels = this.skuDetailsAPI.getCompanyActiveChannelsDummy();
    this.companyActiveChannels = this.companyActiveChannels.data.data;*/
/*    return new Promise((resolve,reject) => {
      console.log(this.filters);
      this.skuDetailsAPI.getCompanyActiveChannels(this.filters)
        .then((res) => {
          console.log("response", res);
          this.companyActiveChannels = res.data.data;
          resolve(res.data)
        })
        .catch((err) => {
          console.warn("err", err);
          this.companyActiveChannels = this.skuDetailsAPI.getCompanyActiveChannelsDummy();
          this.companyActiveChannels = this.companyActiveChannels.data.data;
          resolve(err)
        });
    });*/
  }

  private getSkuList(): any{
    this.priceListLoading = true

    return new Promise((resolve,reject) => {
      console.log(this.filters);


      this.skuDetailsAPI.getSKUDetails(this.filters)
        .then((res) => {

          this.companyActiveChannels = res.data;
          this.skuDetailsAPI.getSKUDetails(this.filters)
            .then((res) => {
              console.log("response", res);
              this.productList = res.data.data;
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

          resolve(err)
        });


    });

   /* this.skuSubscribe = this.skuDetailsAPI.getSKUDetails(this.filters,'observable')
      .subscribe((res) => {
          console.log('skus', res);

        },
        (err) => {
          console.warn(err)
        },
        () => {
          this.skuSubscribe.unsubscribe();
          this.skuSubscribe = null;
        })*/
  }

  public changeStockStatusTab(status: string){

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

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
  }

  private priceSlider: any = { lower: 1050, upper: 2000 };

  private hideFilter: boolean = true;
  private hideHSN: boolean = true;
  private productList: any = [];

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

  private getSkuList(): any{
    return new Promise((resolve,reject) => {
      console.log(this.filters);
      this.skuDetailsAPI.getSKUDetails(this.filters)
        .then((res) => {
          console.log("response", res);
          this.productList = res.data.data;
          resolve(res.data)
        })
        .catch((err) => {
          console.warn("err", err);
          this.productList = this.skuDetailsAPI.getSKUDetailsDummy();
          this.productList = this.productList.data.data;
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

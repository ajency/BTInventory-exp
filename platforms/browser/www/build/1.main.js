webpackJsonp([1],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__ = __webpack_require__(275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageModule", function() { return StockPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StockPageModule = (function () {
    function StockPageModule() {
    }
    return StockPageModule;
}());
StockPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__stock__["a" /* StockPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stock__["a" /* StockPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__stock__["a" /* StockPage */]
        ]
    })
], StockPageModule);

//# sourceMappingURL=stock.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_ev_ev_token__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sku_details_service_sku_details_service__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var StockPage = (function () {
    function StockPage(navCtrl, navParams, location, modalCtrl, envVariables, skuDetails) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.location = location;
        this.modalCtrl = modalCtrl;
        this.envVariables = envVariables;
        this.skuDetails = skuDetails;
        this.priceSlider = { lower: 1050, upper: 2000 };
        this.hideFilter = true;
        this.hideHSN = true;
        this.productList = [];
        this.dummyProducts = [];
        this.paginationConfig = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: 0
        };
        this.filterOptions = {
            search: {},
            quantity: {},
            sort: {},
            price: {},
            warehouse: {}
        };
    }
    StockPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StockPage');
        var params;
        console.log(this.skuDetails.getSKUDetailsDummy());
        console.log(this.skuDetails.getSKUDetails(params));
        this.productList = this.skuDetails.getSKUDetailsDummy();
        this.productList = this.productList.data.data;
    };
    StockPage.prototype.itemtMouseOver = function (item) {
        item.open = true;
        // item.selectedDetail = item.selectedDetail ? item.selectedDetail : 'seller';
    };
    StockPage.prototype.itemMouseOut = function (item) {
        if (!item.selectedDetail) {
            item.open = false;
        }
        // item.selectedDetail = null;
    };
    StockPage.prototype.goBack = function () {
        this.location.back();
    };
    StockPage.prototype.pagChanged = function (page) {
        this.paginationConfig.currentPage = page;
    };
    StockPage.prototype.toggleDrop = function (filtertype) {
        this.filterOptions[filtertype].open = !this.filterOptions[filtertype].open;
    };
    StockPage.prototype.toggleFilterDisplay = function () {
        this.hideFilter = !this.hideFilter;
    };
    StockPage.prototype.toggleHSNDisplay = function () {
        this.hideHSN = !this.hideHSN;
    };
    StockPage.prototype.showModal = function () {
        var modal = this.modalCtrl.create('ModalPage');
        modal.present();
    };
    return StockPage;
}());
StockPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-stock',template:/*ion-inline-start:"/home/ajantoniof/.bin/bt/Inventory/src/pages/stock/stock.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Stock</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-content padding>\n\n	<div class="container-fluid" padding-horizontal>\n\n		<div class="header-main" padding-horizontal>\n			<!-- Main Nav tabs -->\n			<ul class="nav sku-menu sku-to-nav">\n				<li class="visible-xs sku-menu__hb"> <ion-icon name="menu"></ion-icon></li>\n				<li class="sku-menu__title hasub"><h1>Inventory</h1></li>\n				<li class="sku-menu__wrap hidden-xs-inline-block">\n					<ul class="sku-menu__full">\n						<li><a>Stock</a></li>\n						<li><a>Manage Stock</a></li>\n						<li><a>Listing Watch</a></li>\n					</ul>\n				</li>\n				<li class="sku-menu__logout">\n				<button color="dark" ion-button icon-right small clear>\n					  <ion-icon name="print"></ion-icon> Print SKU Barcodes\n					</button>\n				</li>\n			</ul>\n		</div>\n\n		<div class="header-secondary replace-header">\n			<ul class="nav sku-menu">\n				<li (click)="goBack()" class="visible-xs sku-menu__hb"> <ion-icon name="ios-arrow-back"></ion-icon></li>\n				<!-- <li class="pri-menu__title"><h2>Import product details from a CSV</h2></li> -->\n				<li class="sku-menu__wrap inventory-tabs show-white">\n					<ul class="sku-menu__full">\n						<li class="active" [class.active]=""><a >Active (1,066)</a></li>\n						<li [class.active]=""><a  class="">To Ship (250)</a></li>\n						<li [class.active]=""><a  class="">Low Stock (15)</a></li>\n						<li [class.active]=""><a  class="">Stock-outs (783)</a></li>\n						<li [class.active]=""><a  class="">Bundles (0)</a></li>\n						<li [class.active]=""><a  class="">All (1,066)</a></li>\n						<li [class.active]=""><a  class="">Unlisted (5)</a></li>\n						<li [class.active]=""><a  class="">Archived (0)</a></li>\n					</ul>\n				</li>\n				<li class="buttons-right hidden-xs">\n					<ul class="sku-menu__full">\n						<li><a>Update Channel - Sku Mapping</a></li>\n					</ul>\n				</li>\n			</ul>\n		</div>\n\n		<div class="filters flex">\n			<div class="filters__multi">\n				<ion-checkbox color="dark" no-padding></ion-checkbox>\n			</div>\n			<!-- .... On click of this button  ... -->\n			<a (click)="toggleFilterDisplay()" class="filters__toggle"><ion-icon name="funnel" color="primary"></ion-icon></a>\n		</div>\n\n		<div class="filters flex bottom">\n			<!-- .... toggle class "open" here ... -->\n			<!-- .... toggle this one -->\n			<div [ngClass]="{\'collapsed\': hideFilter}" class="filters__wrap flex">\n				<div class="filters__search flex">\n					<div class="bt-dropdown" [class.open]="filterOptions.search.open" [class.filtered]="filterOptions.search.filtered">\n						<!-- .... On click of this button, add class "open" to the parent div "bt-dropdown" .... -->\n						<!-- .... just adding the class will show the dropdown .... -->\n						<!-- .... if any of the elements are selected then add class "filtered" to parent div "bt-dropdown" .... -->\n						<button ion-button color="dark" outline no-margin class="bt-dropdown__btn button-drop btn-search" (click)="toggleDrop(\'search\')">\n							<ion-icon name="ios-search"></ion-icon> SKU/Alias <ion-icon name="ios-arrow-down"></ion-icon>\n						</button>\n						<div class="bt-dropdown__dd">\n							<button ion-button color="dark" (click)="changeSearchField(field.slug)"  clear no-margin block class="bt-dropdown__btn button-drop">SKU</button>\n							<button ion-button color="dark" (click)="changeSearchField(field.slug)"  clear no-margin block class="bt-dropdown__btn button-drop">Product Name</button>\n						</div>\n					</div>\n					<input [(ngModel)]="filterOptions.search.value" (keyup)="searchItem($event)" type="text" class="form-control" placeholder="Search (Min 3 chars)" padding-left>\n				</div>\n\n				<div class="bt-dropdown" [class.open]="filterOptions.warehouse.open">\n					<!-- .... On click of this button, add class "open" to the parent div "bt-dropdown" .... -->\n					<!-- .... just adding the class will show the dropdown .... -->\n					<button (click)="toggleDrop(\'warehouse\')" ion-button color="dark" outline no-margin class="bt-dropdown__btn button-drop">\n						<span class="plusicon visible-xs-inline-block"></span> Warehouses <ion-icon name="ios-arrow-down" class="hidden-xs icon-small"></ion-icon>\n					</button>\n					<div class="bt-dropdown__dd">\n						<button ion-button color="dark"  clear no-margin block class="bt-dropdown__btn button-drop">All Warehouses</button>\n					</div>\n				</div>\n\n				<div class="bt-dropdown" [class.open]="filterOptions.sort.open" [class.filtered]="filterOptions.sort.filtered">\n					<!-- .... On click of this button, add class "open" to the parent div "bt-dropdown" .... -->\n					<!-- .... just adding the class will show the dropdown .... -->\n					<button (click)="toggleDrop(\'sort\')" ion-button color="dark" outline no-margin class="bt-dropdown__btn button-drop">\n						<span class="plusicon visible-xs-inline-block"></span> Sort by <span [hidden]="!filterOptions.sort.selectedname">({{filterOptions.sort.selectedname}})</span><ion-icon name="ios-arrow-down" class="hidden-xs icon-small"></ion-icon>\n					</button>\n					<div class="bt-dropdown__dd">\n						<ion-list radio-group [(ngModel)]="filterOptions.sort.selected" >\n							<ion-item *ngFor="let item of filterOptions.sort.options">\n								<ion-label no-padding>{{item.name}}</ion-label>\n								<ion-radio color="green" no-padding value="{{item.slug}}"></ion-radio>\n							</ion-item>\n						</ion-list>\n					</div>\n				</div>\n\n				<div class="bt-dropdown" [class.open]="filterOptions.quantity.open" [class.filtered]="filterOptions.quantity.filtered">\n					<!-- .... On click of this button, add class "open" to the parent div "bt-dropdown" .... -->\n					<!-- .... just adding the class will show the dropdown .... -->\n					<button (click)="toggleDrop(\'quantity\')" ion-button color="dark" outline no-margin class="bt-dropdown__btn button-drop">\n						<span class="plusicon visible-xs-inline-block"></span> Sellable Qty <ion-icon name="ios-arrow-down" class="hidden-xs icon-small"></ion-icon>\n					</button>\n					<div class="bt-dropdown__dd">\n						<ion-list radio-group [(ngModel)]="filterOptions.quantity.selected" >\n							<ion-item *ngFor="let item of filterOptions.quantity.options">\n								<ion-label no-padding>{{item.name}}</ion-label>\n								<ion-radio color="green" no-padding value="{{item.slug}}"></ion-radio>\n							</ion-item>\n						</ion-list>\n					</div>\n				</div>\n\n				<div class="bt-dropdown" [class.open]="filterOptions.price.open">\n					<button (click)="toggleDrop(\'price\')" ion-button color="dark" outline no-margin class="bt-dropdown__btn button-drop">\n						<span class="plusicon visible-xs-inline-block"></span> Price <ion-icon name="ios-arrow-down" class="hidden-xs icon-small"></ion-icon>\n					</button>\n					<div class="bt-dropdown__dd range-dd">\n						<ion-item>\n							<!-- .... this range slider stops working when this is added -> dualKnobs="true" .... -->\n							<!-- .... please check as it needs to have dual knobs - for max and min .... -->\n							<ion-range dualKnobs="true" [(ngModel)]="priceSlider" min="1000" max="2000" pin="true">\n								<!-- <ion-label range-left>1000</ion-label>\n								<ion-label range-right>2000</ion-label> -->\n							</ion-range>\n						</ion-item>\n\n						<!-- <div> -->\n							<ion-list class="flex filter-boxes inline" padding-horizontal>\n								<ion-item class="has-rupee-symbol">\n									<ion-label stacked>Min</ion-label>\n									<ion-input type="number" min="0"></ion-input>\n								</ion-item>\n								<ion-item class="has-rupee-symbol">\n									<ion-label stacked>Max</ion-label>\n									<ion-input type="number"></ion-input>\n								</ion-item>\n							</ion-list>\n						<!-- </div> -->\n					</div>\n				</div>\n\n				<button ion-button class="btn-apply" clear no-margin>Apply</button>\n				<button (click)="resetFilters()" ion-button color="secondary" no-margin class="btn-reset" clear><ion-icon name="md-refresh" class="hidden-xs"></ion-icon><span class="visible-xs">Reset</span></button>\n			</div>\n		</div>\n\n		<div class="tabular">\n			<div class="tabular__header flex hidden-xs">\n				<div class="tabular__cell cell-1 t-check">\n					<!-- <ion-item no-padding>\n						<ion-checkbox color="dark" no-padding></ion-checkbox>\n					</ion-item> -->\n				</div>\n				<div class="tabular__cell cell-9 t-product">SKU/Product Title/Family</div>\n				<div class="tabular__cell cell-6 t-alias">Alias(es)</div>\n				<div class="tabular__cell cell-5 t-sell">Sellable</div>\n				<div class="tabular__cell cell-2 t-ship">To Ship</div>\n				<div class="tabular__cell cell-4 t-channel">Channels</div>\n				<div class="tabular__cell cell-3 t-hsn">HSN Code</div>\n			</div>\n\n			<!-- .... the loader .... -->\n			<div class="tabular__row flex has-anim-loader" [hidden]="productList.length || priceListLoading == false" *ngFor="let dummy of dummyProducts">\n				<div class="masked masked--prices">\n					<div class="masked__bg">\n						<div class="masked__elements">\n							<div class="masked__elem masked--1"></div>\n							<div class="masked__elem masked--2"></div>\n							<div class="masked__elem masked--3"></div>\n							<div class="masked__elem masked--4"></div>\n							<div class="masked__elem masked--5"></div>\n							<div class="masked__elem masked--6"></div>\n							<div class="masked__elem masked--7"></div>\n							<div class="masked__elem masked--8"></div>\n							<div class="masked__elem masked--9"></div>\n							<div class="masked__elem masked--10"></div>\n							<div class="masked__elem masked--11"></div>\n							<div class="masked__elem masked--12"></div>\n							<div class="masked__elem masked--13"></div>\n							<div class="masked__elem masked--14"></div>\n							<div class="masked__elem masked--15"></div>\n							<div class="masked__elem masked--16"></div>\n						</div>\n					</div>\n				</div>\n			</div>\n\n			<!-- .... add class "violated" to this tabular__row if there\'s a violation here .... -->\n			<!-- .... add class "open" when tapped or clicked .... -->\n			<div class="tabular__row flex" *ngIf="!priceListLoading && !productList.length"  style="justify-content: center;">\n				<strong>No records found</strong>\n			</div>\n\n\n      		<div class="tabular__row flex" (mouseleave)="itemMouseOut(item)" (mouseover)="itemtMouseOver(item)" [class.open]="item.open" *ngFor="let item of productList | paginate: paginationConfig">\n\n				<div class="tabular-mob-header">\n					<div class="header-secondary replace-header">\n						<ul class="nav sku-menu">\n							<li  class="visible-xs sku-menu__hb"> <ion-icon name="ios-arrow-back"></ion-icon></li>\n							<li class="sku-menu__title"><h2>Product Details</h2></li>\n						</ul>\n					</div>\n				</div>\n				<div class="tabular__cell cell-1 hidden-xs t-check">\n					<ion-item no-padding>\n						<ion-checkbox color="dark" no-padding></ion-checkbox>\n					</ion-item>\n				</div>\n				<div class="tabular__cell cell-9 flex t-product">\n					<div class="img-wrap" margin-right style="background-image: url()">\n						<img src="{{ item.image_path }}" width="110" alt="">\n					</div>\n					<div class="text-wrap">\n						<span class="sku"><a href="#">{{ item.sku_code }}</a></span>\n						<p><a target="blank" href="#" class="prod-title">{{ item.readable_name }}e</a></p>\n						<p class="prod-family">Family: <span>{{ item.product_family }}</span></p>\n						<a (click)="showModal()" class="prod-action">+ Add to a Product Family</a>\n						<a (click)="showModal()" class="prod-action">+ Map a Listing (add Alias)</a>\n					</div>\n				</div>\n				<div class="tabular__cell cell-6 t-alias">\n					<!-- .... show this span only if there\'s a violation .... -->\n					<!-- .... also add a class to the parent \'tabular__row\' instructions at the div .... -->\n					<!--<span class="violation-icon">\n						<img src="../assets/img/viol.png" alt="">\n					</span>-->\n					<div class="visible-xs">\n						<strong class="mobile-title">Alias(es)</strong>\n					</div>\n					<ul class="sku-code" *ngFor="let alias of item.sku_aliases">\n						<li>\n                <ion-badge color="success" text-uppercase>{{ alias[1] }}</ion-badge> {{ alias[0] }}\n						</li>\n					</ul>\n				</div>\n				<div class="tabular__cell cell-5 t-sellable">\n					<div class="visible-xs">\n						<strong class="mobile-title">Sellable</strong>\n					</div>\n					<p>\n						<strong class="big text-success">{{ item.in_stock }}</strong> <ion-icon name="information-circle" class="text-warning"></ion-icon>\n					</p>\n					<p class="text-info">Seller Stocked : {{ item.seller_in_stock }}</p>\n					<p class="text-grey">MP Stocked : {{ item.marketplace_in_stock }}</p>\n				</div>\n				<div class="tabular__cell cell-2 t-ship">\n					<div class="visible-xs">\n						<strong class="mobile-title">To Ship</strong>\n					</div>\n					<strong class="big">{{ item.to_ship }}</strong>\n				</div>\n				<div class="tabular__cell cell-4 t-channel">\n					<div class="visible-xs">\n						<strong class="mobile-title">Channels</strong>\n					</div>\n					<ul *ngFor="let channel of item.channels">\n			            <li>\n			              <a href="#">\n			                <img src="{{ envVariables.assetsFolder }}{{ channel.favicon_path }}" [ngClass]="(channel.status_on_channel==0)?\'disabled\':(channel.quantity_on_channel <= 0) ? \'channelFaviconImageRed\':\'channelFaviconImageGreen\'">\n			                </a>\n			            </li>\n					</ul>\n				</div>\n				<div class="tabular__cell cell-3 t-hsn">\n					<div class="visible-xs">\n						<strong class="mobile-title">HSN code</strong>\n					</div>\n\n					<button ion-button color="" icon-only small outline (click)="toggleHSNDisplay()">\n						<ion-icon name="create"></ion-icon>\n					</button>\n\n					<div class="flex" [ngClass]="{\'hidden\': hideHSN}">\n						<ion-item>\n							<ion-input type="text" value="" placeholder="Edit HSN"></ion-input>\n						</ion-item>\n						<button ion-button color="danger" icon-only small clear>\n							<ion-icon name="checkmark"></ion-icon>\n						</button>\n					</div>\n				</div>\n\n				<div class="tabbed tabular__moreinfo" padding-horizontal>\n					<ion-segment [(ngModel)]="selectedDetail">\n						<ion-segment-button value="wstock">\n							Warehouse Stock\n						</ion-segment-button>\n						<ion-segment-button value="cstock">\n							Channel Stock\n						</ion-segment-button>\n						<ion-segment-button value="price">\n							Channel Price\n						</ion-segment-button>\n					</ion-segment>\n\n					<div [ngSwitch]="selectedDetail" class="tabbed__panels">\n						<ion-list *ngSwitchCase="\'wstock\'" padding no-margin>\n							Warehouse Stock Details\n						</ion-list>\n						<ion-list *ngSwitchCase="\'cstock\'" padding no-margin>\n							Channel Stock Details\n						</ion-list>\n						<ion-list *ngSwitchCase="\'price\'" padding no-margin>\n							Channel Price Details\n						</ion-list>\n					</div>\n				</div>\n			</div>\n\n			<!--add pagination here-->\n			<pagination-controls (pageChange)="pagChanged($event)" autoHide="true"></pagination-controls>\n		</div>\n\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/ajantoniof/.bin/bt/Inventory/src/pages/stock/stock.html"*/,
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__app_ev_ev_token__["a" /* EnvVariables */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* Location */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], Object, __WEBPACK_IMPORTED_MODULE_4__providers_sku_details_service_sku_details_service__["a" /* SkuDetailsServiceProvider */]])
], StockPage);

//# sourceMappingURL=stock.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPaginationModule; });
/* unused harmony export PaginationService */
/* unused harmony export PaginationControlsComponent */
/* unused harmony export PaginationControlsDirective */
/* unused harmony export PaginatePipe */



var PaginationService = (function () {
    function PaginationService() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: config.itemsPerPage || 0,
            currentPage: config.currentPage || 1,
            totalItems: config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    return PaginatePipe;
}());
PaginatePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */], args: [{
                name: 'paginate',
                pure: false
            },] },
];
/** @nocollapse */
PaginatePipe.ctorParameters = function () { return [
    { type: PaginationService, },
]; };

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */ var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a *ngIf=\"1 < p.getCurrent()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            <a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <div *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </div>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a *ngIf=\"!p.isLastPage()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    return PaginationControlsComponent;
}());
PaginationControlsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */], args: [{
                selector: 'pagination-controls',
                template: DEFAULT_TEMPLATE,
                styles: [DEFAULT_STYLES],
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ChangeDetectionStrategy */].OnPush,
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None
            },] },
];
/** @nocollapse */
PaginationControlsComponent.ctorParameters = function () { return []; };
PaginationControlsComponent.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'autoHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'previousLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'nextLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'screenReaderPaginationLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'screenReaderPageLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'screenReaderCurrentLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */] },],
};

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    return PaginationControlsDirective;
}());
PaginationControlsDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Directive */], args: [{
                selector: 'pagination-template,[pagination-template]',
                exportAs: 'paginationApi'
            },] },
];
/** @nocollapse */
PaginationControlsDirective.ctorParameters = function () { return [
    { type: PaginationService, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ChangeDetectorRef */], },
]; };
PaginationControlsDirective.propDecorators = {
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
    'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */] },],
};

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    return NgxPaginationModule;
}());
NgxPaginationModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]],
                declarations: [
                    PaginatePipe,
                    PaginationControlsComponent,
                    PaginationControlsDirective
                ],
                providers: [PaginationService],
                exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
            },] },
];
/** @nocollapse */
NgxPaginationModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

});
//# sourceMappingURL=1.main.js.map
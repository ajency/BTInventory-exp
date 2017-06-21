import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockPage } from './stock';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    StockPage,
  ],
  imports: [
  	NgxPaginationModule,
    IonicPageModule.forChild(StockPage),
  ],
  exports: [
    StockPage
  ]
})
export class StockPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product/card-product.component';
import { FormControlsModule } from '../form-controls/form-controls.module';
import { CurrencyModule } from '@shared/pipes/currency/currency.module';
import { SliderProductsComponent } from './slider-products/slider-products.component';
import { SwiperModule } from 'swiper/angular';
import { CardProductPlaceholdersComponent } from './card-product-placeholders/card-product-placeholders.component';

@NgModule({
  declarations: [
    CardProductComponent,
    SliderProductsComponent,
    CardProductPlaceholdersComponent
  ],
  imports: [
    CommonModule,
    FormControlsModule,
    CurrencyModule,
    SwiperModule
  ],
  exports: [
    CardProductComponent,
    SliderProductsComponent, 
    CardProductPlaceholdersComponent
  ]
})
export class ProductsModule { }

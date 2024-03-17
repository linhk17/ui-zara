import { Component, HostListener, ViewEncapsulation, Input } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Product } from '../card-product/card-product.component';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-slider-products',
  templateUrl: './slider-products.component.html',
  styleUrls: ['./slider-products.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderProductsComponent {
  @Input() products!: Product[];
  @Input() slidesPerView: number = 4;
  screenWidth!: number;
}

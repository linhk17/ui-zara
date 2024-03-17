import { Component, Input } from '@angular/core';

export interface Product{
  name: string;
  type: string;
  price: number;
  isSale: boolean;
  isHot: boolean;
  priceAfter?: number;
  image: string;
}
@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() product!: Product;
}

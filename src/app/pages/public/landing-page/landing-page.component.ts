import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { products, typeProduct } from '@utils/data/products';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent {
  slidesPerViewBrand: number = 5;
  slidesPerViewBestSeller: number = 6;
  slidesPerViewCardBestSeller: number = 4;
  screenWidth!: number;
  itemTypeActiveBestSeller: number = -1;
  itemTypeActiveProduct: number = -1;
  itemCardPlaceholderBestSeller: number = 4;

  isLoadingProductList: boolean = false;
  isLoadingProductBestSeller: boolean = false;

  //marker for section best seller
  idElementBestSeller!: string;
  markerBestSeller!: any;
  activeItemTypeBestSeller!: any;
  //marker for section list product
  idElementListProduct!: string;
  markerListProduct!: any;
  activeItemTypeListProduct!: any;

  products = products;
  productsBestSeller = products;
  typeProduct = typeProduct;
  @HostListener('window:resize')

  getScreenWidth(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth >= 320 && this.screenWidth <= 480){
      this.slidesPerViewBrand = 1;
      this.slidesPerViewBestSeller = 4;
      this.itemCardPlaceholderBestSeller = 1;
      this.slidesPerViewCardBestSeller = 1
      
    }
    else if(this.screenWidth >= 480 && this.screenWidth <= 992){
      this.slidesPerViewBrand = 2;
      // this.slidesPerViewBestSeller = 6;
      this.itemCardPlaceholderBestSeller = 2;
      this.slidesPerViewCardBestSeller = 2;
    }

    else if(this.screenWidth >= 992 && this.screenWidth <= 1200){
      this.slidesPerViewBrand = 4;
      // this.slidesPerViewBestSeller = 3;
      this.itemCardPlaceholderBestSeller = 3;
      this.slidesPerViewCardBestSeller = 3;
    }

  }
  ngAfterViewInit(){
    window.addEventListener('scroll', this.reveal);
    this.reveal();
  }

  filterProductList(e: any, index: number, typeId: string){
    this.slidingMenuListProduct(e, index);
    this.itemTypeActiveProduct = index;
    this.isLoadingProductList = true;
    if(index == -1){
      setTimeout(() => {
        this.products = products;
        this.isLoadingProductList = false;
      }, 1000)
      return;
    }
    setTimeout(() => {
      const arrProducts = products.filter((product) => product.type == typeId)
      this.products = arrProducts;
      this.isLoadingProductList = false;
    }, 1000)
  }

  filterProductBestSeller(e: any, index: number, typeId: string){
    this.slidingMenuBestSeller(e, index);
    this.itemTypeActiveBestSeller = index;
    this.isLoadingProductBestSeller = true;
    if(index == -1){
      setTimeout(() => {
        this.productsBestSeller = products;
        this.isLoadingProductBestSeller = false;
      }, 1000)
      return;
    }
    setTimeout(() => {
      const arrProducts = products.filter((product) => product.type == typeId)
      this.productsBestSeller = arrProducts;
      this.isLoadingProductBestSeller = false;
    }, 1000)
  }

  slidingMenuBestSeller(e: any, index: number){
    this.idElementBestSeller = 'slideBestSeller-'+ index;
    this.markerBestSeller = document.querySelector('#markerBestSeller');
    this.markerBestSeller.style.left = e.target.parentElement.offsetLeft + "px";
    this.markerBestSeller.style.width = e.target.offsetWidth + "px";
  }

  onSlideChangeBestSeller(e: any){
    this.activeItemTypeBestSeller = document.getElementById(this.idElementBestSeller);
    this.markerBestSeller.style.translate=`${e[0].translate}px`;
  }

  slidingMenuListProduct(e: any, index: number){
    this.idElementListProduct = 'slideListProduct-'+ index;
    this.markerListProduct = document.querySelector('#markerListProduct');
    this.markerListProduct.style.left = e.target.parentElement.offsetLeft + "px";
    this.markerListProduct.style.width = e.target.offsetWidth + "px";
  }

  onSlideChangeListProduct(e: any){
    this.activeItemTypeListProduct = document.getElementById(this.idElementListProduct);
    this.markerListProduct.style.translate=`${e[0].translate}px`;
  }

  reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
}

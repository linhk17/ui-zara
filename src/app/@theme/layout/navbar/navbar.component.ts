import { Component, EventEmitter, HostListener, Output, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  slidesPerView: number = 7;
  screenWidth!: number;
  isSlider: boolean = false;
	constructor() { }
  
  @HostListener('window:resize')
  getScreenWidth(){
    this.screenWidth = window.innerWidth;
    
    if(this.screenWidth < 586){
      this.isSlider = true;
      this.slidesPerView = 2;
    }

    if(this.screenWidth >= 586 && this.screenWidth <= 768){
      this.isSlider = true;
      this.slidesPerView = 3;
    }

  }
}

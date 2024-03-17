import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormControlsModule } from '@shared/components/form-controls/form-controls.module';
import { ProductsModule } from '@shared/components/products/products.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SwiperModule } from 'swiper/angular';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  }
];

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormControlsModule,
    ProductsModule,
    CarouselModule,
    SwiperModule
  ]
})
export class LandingPageModule { }

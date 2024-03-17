import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlsModule } from '@shared/components/form-controls/form-controls.module';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { ProductsModule } from '@shared/components/products/products.module';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent
  }
];

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormControlsModule,
    ProductsModule
    // LandingPageModule
  ]
})
export class DemoModule { }

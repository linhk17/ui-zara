import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: PublicComponent,
		children: [
			{
				path: '',
				redirectTo: 'home-page',
				pathMatch: 'full'
			},
			{
				path: 'home-page',
				loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
			},
      {
				path: 'demo',
				loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
			},
			
		]
	}
];

@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PublicModule { }

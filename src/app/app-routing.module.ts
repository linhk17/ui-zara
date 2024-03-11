import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './@theme/layout/base/base.component';
import { AuthGuard } from '@guard/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		// canActivate: [AuthGuard],
		children: [
			{
				path: '',
				loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule)
			},
		]
	},
	{
		path: 'auth',
		loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

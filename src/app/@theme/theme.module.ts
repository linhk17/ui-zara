import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './layout/base/base.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DigiAvatarModule } from '@shared/components/avatar/avatar.module';
import { BreadcrumbsModule } from '@shared/components/breadcrumbs/breadcrumbs.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormControlsModule } from '@shared/components/form-controls/form-controls.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IsGrantedModule } from '@shared/directives/is-granted/is-granted.module';
import { DatetimeModule } from '@shared/pipes/datetime/datetime.module';
import { HeaderComponent } from './layout/header/header.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
	declarations: [
		BaseComponent,
		NavbarComponent,
		SidebarComponent,
		FooterComponent,
    HeaderComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		DigiAvatarModule,
		RouterModule,
		BreadcrumbsModule,
		BsDropdownModule,
		ModalModule.forChild(),
		ReactiveFormsModule,
		FormControlsModule,
		IsGrantedModule,
		DatetimeModule,
    SwiperModule
	]
})
export class ThemeModule { }

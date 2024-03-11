import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchBoxComponent } from './table-controls/search-box/search-box.component';
import { PageSizeSelectionComponent } from './table-controls/page-size-selection/page-size-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableButtonEditComponent } from './table-controls/table-button/table-button-edit/table-button-edit.component';
import { TableButtonDeleteComponent } from './table-controls/table-button/table-button-delete/table-button-delete.component';
import { TableButtonViewComponent } from './table-controls/table-button/table-button-view/table-button-view.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TableButtonGroupComponent } from './table-controls/table-button/table-button-group.component';
import { AvatarNameColumnComponent } from './table-controls/avatar-name-column/avatar-name-column.component';
import { AvatarModule } from 'ngx-avatar';
import { MediaLinkModule } from '@shared/pipes/media-link/media-link.module';



@NgModule({
	declarations: [
		GenericTableComponent,
		SearchBoxComponent,
		PageSizeSelectionComponent,
		TableButtonEditComponent,
		TableButtonDeleteComponent,
		TableButtonViewComponent,
		TableButtonGroupComponent,
  	AvatarNameColumnComponent
	],
	imports: [
		CommonModule,
		NgxPaginationModule,
		FormsModule,
		NgScrollbarModule,
		ReactiveFormsModule,
		AvatarModule,
		MediaLinkModule
	],
	exports: [
		GenericTableComponent,
		SearchBoxComponent,
		PageSizeSelectionComponent,
		TableButtonEditComponent,
		TableButtonDeleteComponent,
		TableButtonViewComponent,
		TableButtonGroupComponent,
		AvatarNameColumnComponent
	]
})
export class GenericTableModule { }

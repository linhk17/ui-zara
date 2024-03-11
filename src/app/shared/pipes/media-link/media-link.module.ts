import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaLinkPipe } from './media-link.pipe';



@NgModule({
	declarations: [MediaLinkPipe],
	imports: [
		CommonModule
	],
	exports: [MediaLinkPipe]
})
export class MediaLinkModule { }

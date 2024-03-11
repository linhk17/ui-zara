import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EqualValidator } from './equal-validator.directive';



@NgModule({
	declarations: [EqualValidator],
	imports: [
		CommonModule
	],
	exports: [EqualValidator]
})
export class EqualValidatorModule { }

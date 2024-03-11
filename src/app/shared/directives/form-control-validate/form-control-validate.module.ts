import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlValidateDirective } from './form-control-validate.directive';



@NgModule({
	declarations: [
		FormControlValidateDirective
	],
	imports: [
		CommonModule
	],
	exports: [
		FormControlValidateDirective
	]
})
export class FormControlValidateModule { }

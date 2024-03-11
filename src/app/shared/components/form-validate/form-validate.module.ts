import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormControlValidateComponent } from './form-control-validate/form-control-validate.component';


@NgModule({
	declarations: [FormControlValidateComponent],
	imports: [
		CommonModule,
		FormsModule,
	],
	exports: [
		FormControlValidateComponent
	]
})
export class FormValidateModule { }



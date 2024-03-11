import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { SelectComponent } from './select/select.component';
import { ButtonComponent } from './button/button.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { GoogleAutocompleteComponent } from './google-autocomplete/google-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidateModule } from '../form-validate/form-validate.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { EqualValidatorModule } from '@shared/directives/equal-validator/equal-validator.module';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { NgSelectComponent } from './ng-select/ng-select.component';
import { FormControlLabelComponent } from './form-control-label/form-control-label.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { IntlTelInputComponent } from './tel-input/intl-tel-input/intl-tel-input.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { CountryCodeInputComponent } from './tel-input/custom-tel-input/country-code-input/country-code-input.component';
import { PhoneInputComponent } from './tel-input/custom-tel-input/phone-input/phone-input.component';
import { OwlDateTimeModule, OWL_DATE_TIME_FORMATS } from '@danielmoncada/angular-datetime-picker';
import { OwlMomentDateTimeModule } from '@danielmoncada/angular-datetime-picker-moment-adapter';
import { CUSTOM_DATETIME_FORMATS } from '@constant/date-time-format.constant';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxGpAutocompleteModule } from "@angular-magic/ngx-gp-autocomplete";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
	declarations: [
		TextInputComponent,
		TextAreaComponent,
		SelectComponent,
		ButtonComponent,
		DatetimeComponent,
		GoogleAutocompleteComponent,
		RadioButtonComponent,
		CheckboxComponent,
		NgSelectComponent,
		CkeditorComponent,
		FormControlLabelComponent,
		FormGroupComponent,
		IntlTelInputComponent,
		CountryCodeInputComponent,
		PhoneInputComponent,
  	RangeSliderComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		FormValidateModule,
		EqualValidatorModule,
		NgSelectModule,
		NgxIntlTelInputModule,
		OwlDateTimeModule,
		OwlMomentDateTimeModule,
		CKEditorModule,
		NgxGpAutocompleteModule,
		NgxMaskDirective,
		NgxMaskPipe,
		NgxSliderModule
	],
	exports: [
		ButtonComponent,
		GoogleAutocompleteComponent,
		TextInputComponent,
		TextAreaComponent,
		NgSelectComponent,
		SelectComponent,
		RadioButtonComponent,
		CheckboxComponent,
		DatetimeComponent,
		CkeditorComponent,
		FormControlLabelComponent,
		FormGroupComponent,
		IntlTelInputComponent,
		CountryCodeInputComponent,
		PhoneInputComponent,
		RangeSliderComponent
	],
	providers: [
		{ provide: OWL_DATE_TIME_FORMATS, useValue: CUSTOM_DATETIME_FORMATS },
		provideNgxMask()
	]
})
export class FormControlsModule { }

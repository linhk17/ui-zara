import { Component, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ErrorMessage } from '@interfaces/general/error-message.interface';
import { ControlValueAccessorConnector } from '@utils/control-value-accessor-connector';

@Component({
	selector: 'app-text-input',
	templateUrl: './text-input.component.html',
	styleUrls: ['./text-input.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TextInputComponent),
			multi: true,
		},
	],
})
export class TextInputComponent extends ControlValueAccessorConnector {

	@Input() className: string = '';
	@Input() errorLabel!: string;
	@Input() inputId!: string;
	@Input() name!: string;
	@Input() placeHolder: string = '';
	@Input() submitted!: boolean;
	@Input() isDisabled: boolean = false;
	@Input() inputType: 'email' | 'text' | 'number' | 'password' | 'url' = 'text';
	@Input() customError?: ErrorMessage[];
	@Input() hideErrorLabel: boolean = false;
	@Input() isInputGroup: boolean = false;
	@Input() wrapperClass: string = '';
	@Input() isSmall: boolean = false;
	@Input() configMaskValue!: any;
	isShowPassword: boolean = false;
	isFocus: boolean = false;

	constructor(injector: Injector) {
		super(injector);
	}

	clearInput() {
		this.control.setValue('');
	}

	togglePassword() {

	}

}

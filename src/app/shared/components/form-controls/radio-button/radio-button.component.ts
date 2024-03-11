import { Component, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ErrorMessage } from '@interfaces/general/error-message.interface';
import { ControlValueAccessorConnector } from '@utils/control-value-accessor-connector';

@Component({
	selector: 'app-radio-button',
	templateUrl: './radio-button.component.html',
	styleUrls: ['./radio-button.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RadioButtonComponent),
			multi: true,
		},
	],
})
export class RadioButtonComponent extends ControlValueAccessorConnector {

	@Input() submitted!: boolean;
	@Input() placeHolder: string = '';
	@Input() controlClassName?: string;
	@Input() wrapperClassName?: string;
	@Input() name!: string;
	@Input() errorLabel!: string;
	@Input() options!: { [key: string]: string };
	@Input() isDisabled: boolean = false;
	@Input() customError?: ErrorMessage[];
	objectKeys = Object.keys;

	constructor(injector: Injector) {
		super(injector);
	}

}

import { Component, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ErrorMessage } from '@interfaces/general/error-message.interface';
import { ControlValueAccessorConnector } from '@utils/control-value-accessor-connector';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SelectComponent),
			multi: true,
		},
	],
})
export class SelectComponent extends ControlValueAccessorConnector {

	@Input() submitted!: boolean;
	@Input() placeHolder: string = '';
	@Input() className: string = '';
	@Input() name!: string;
	@Input() errorLabel!: string;
	@Input() options?: { [key: string]: string }; // select
	@Input() isDisabled: boolean = false;
	@Input() customError?: ErrorMessage[];
	objectKeys = Object.keys;

	constructor(injector: Injector) {
		super(injector);
	}

}

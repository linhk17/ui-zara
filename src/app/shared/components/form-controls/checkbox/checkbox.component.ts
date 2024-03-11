import { Component, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ErrorMessage } from '@interfaces/general/error-message.interface';
import { ControlValueAccessorConnector } from '@utils/control-value-accessor-connector';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CheckboxComponent),
			multi: true,
		},
	],
})
export class CheckboxComponent extends ControlValueAccessorConnector {

	@Input() submitted!: boolean;
	@Input() placeHolder: string = '';
	@Input() className: string = '';
	@Input() name!: string;
	@Input() label!: string;
	@Input() errorLabel!: string;
	@Input() inputId!: string;
	@Input() isDisabled: boolean = false;
	@Input() customError?: ErrorMessage[];
	@Input() isSwitch: boolean = false;
	@Input() classNameLabel!: string;

	constructor(injector: Injector) {
		super(injector);
	}
}

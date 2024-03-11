import { Component, EventEmitter, forwardRef, Injector, Input, Output } from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { DateTimePicker } from '@interfaces/general/datetime-picker.interface';
import { ErrorMessage } from '@interfaces/general/error-message.interface';
import { ControlValueAccessorConnector } from '@utils/control-value-accessor-connector';

@Component({
	selector: 'app-datetime',
	templateUrl: './datetime.component.html',
	styleUrls: ['./datetime.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => DatetimeComponent),
			multi: true,
		},
	]
})
export class DatetimeComponent extends ControlValueAccessorConnector {

	@Input() submitted!: boolean;
	@Input() placeHolder: string = '';
	@Input() className: string = '';
	@Input() name!: string;
	@Input() errorLabel!: string;
	@Input() configDateTimePicker?: DateTimePicker;
	@Input() isDisabled: boolean = false;
	@Input() customError?: ErrorMessage[];
	@Output() byChange: EventEmitter<any> = new EventEmitter<any>();
	@Output() byClear: EventEmitter<any> = new EventEmitter<any>();
	isChangeValue: boolean = false;
	constructor(injector: Injector) {
		super(injector);
	}

	get validator() {
		if (!this.configDateTimePicker) {
			return Validators.nullValidator;
		}
		const validators: any = [];
		if (this.configDateTimePicker.minDate) {
			validators.push(Validators.min(this.configDateTimePicker.minDate));
		}
		if (this.configDateTimePicker.maxDate) {
			validators.push(Validators.max(this.configDateTimePicker.maxDate));
		}
		return validators.length > 0 ? Validators.compose(validators) : Validators.nullValidator;
	}

	validate(ctrl: AbstractControl) {
		return this.validator?.(ctrl);
	}

	onChange(event: any) {
		this.isChangeValue = true;
		this.byChange.next(event);
	}

	clear(){
		this.isChangeValue = false;
		this.byClear.next(true);
	}
}

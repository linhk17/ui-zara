import { Component, EventEmitter, forwardRef, Injector, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '@utils/control-value-accessor-connector';
import { Subscription } from 'rxjs';
import { PhoneNumberUtil } from 'google-libphonenumber';

@Component({
	selector: 'app-phone-input',
	templateUrl: './phone-input.component.html',
	styleUrls: ['./phone-input.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PhoneInputComponent),
			multi: true,
		},
	],
})
export class PhoneInputComponent extends ControlValueAccessorConnector implements OnInit, OnDestroy {

	@Input() className: string = '';
	@Input() errorLabel!: string;
	@Input() inputId!: string;
	@Input() name!: string;
	@Input() placeHolder: string = '';
	@Input() override formControlName!: string;
	@Input() submitted!: boolean;
	@Input() isDisabled: boolean = false;
	@Output() byChangeCode: EventEmitter<string> = new EventEmitter<string>();
	subscriber!: Subscription;

	constructor(injector: Injector) {
		super(injector);
	}

	ngOnInit(): void {
		this.subscriber = this.control.valueChanges.subscribe((data: string) => {
			if (data && data.startsWith('+', 0)) {
				const phoneUtil = PhoneNumberUtil.getInstance();
				try {
					const number = phoneUtil.parse(data, null);
					const nationalNumber = number.getNationalNumber().toString();
					const countryCode = number.getCountryCode();
					if (countryCode) {
						this.byChangeCode.next('+' + countryCode);
					}
					if (nationalNumber) {
						this.control.setValue(nationalNumber);
					}
				} catch (error) {

				}
			}
		});
	}

	ngOnDestroy(): void {
		if (this.subscriber) {
			this.subscriber.unsubscribe();
		}
	}
}

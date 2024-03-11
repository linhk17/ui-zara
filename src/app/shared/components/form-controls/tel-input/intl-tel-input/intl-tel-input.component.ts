import { Component, forwardRef, Injector, Input, OnChanges, SimpleChanges, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '@utils/control-value-accessor-connector';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
	selector: 'app-intl-tel-input',
	templateUrl: './intl-tel-input.component.html',
	styleUrls: ['./intl-tel-input.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => IntlTelInputComponent),
			multi: true,
		},
	],
	// tslint:disable-next-line:use-component-view-encapsulation
	encapsulation: ViewEncapsulation.None
})
export class IntlTelInputComponent extends ControlValueAccessorConnector implements OnChanges {

	@Input() className: string = '';
	@Input() errorLabel!: string;
	@Input() inputId!: string;
	@Input() name!: string;
	@Input() placeHolder: string = '';
	@Input() override formControlName!: string;
	@Input() submitted!: boolean;
	@Input() isDisabled: boolean = false;
	@Input() selectedCountryISO: CountryISO = CountryISO.Australia;
	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;

	constructor(injector: Injector, private _cdr: ChangeDetectorRef) {
		super(injector);
	}

	ngOnChanges(changes: SimpleChanges): void {
		this._cdr.detectChanges();
	}

}

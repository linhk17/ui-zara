import { Component, EventEmitter, forwardRef, Injector, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ErrorMessage } from '@interfaces/general/error-message.interface';
import { ControlValueAccessorConnector } from '@utils/control-value-accessor-connector';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

export interface AddressResult {
	originValue: google.maps.places.PlaceResult;
	formattedValue: any;
}

@Component({
	selector: 'app-google-autocomplete',
	templateUrl: './google-autocomplete.component.html',
	styleUrls: ['./google-autocomplete.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => GoogleAutocompleteComponent),
			multi: true,
		},
	],
})
export class GoogleAutocompleteComponent extends ControlValueAccessorConnector {

	@Input() submitted!: boolean;
	@Input() placeHolder: string = '';
	@Input() className: string = '';
	@Input() name!: string;
	@Input() errorLabel!: string;
	@Input() configGooglePlaces?: any = {
		componentRestrictions: { country: 'au' },
		types: ['address']
	};
	@Input() isDisabled: boolean = false;
	@Input() customError?: ErrorMessage[];
	@Input() isPreventPOBox: boolean = false;
	@Output() byAddress: EventEmitter<AddressResult> = new EventEmitter<AddressResult>();
	@Output() byChangeAddress: EventEmitter<string> = new EventEmitter<string>();

	constructor(injector: Injector) {
		super(injector);
	}

	handleAddressChange(originValue: google.maps.places.PlaceResult) {
		if (originValue) {
			console.log(originValue);
			this.byAddress.next({ originValue, formattedValue: this.formatValue(originValue) });
		}
	}

	formatValue(address: google.maps.places.PlaceResult) {
		const result: any = {};
		const location = address?.geometry?.location;
		result.lat = location?.lat();
		result.lng = location?.lng();
		// result.address_line = address.formatted_address;
		const streetNumb = this.findType(address, 'street_number');
		const route = this.findType(address, 'route');
		const subpremise = this.findType(address, 'subpremise');
		result.city = this.findType(address, 'locality');
		result.state = this.findType(address, 'administrative_area_level_1');
		result.postalCode = this.findType(address, 'postal_code');
		result.country = this.findType(address, 'country');
		if ((subpremise || route || streetNumb) && address.name) {
			result.address = address.name;
		} else {
			result.address = '';
		}
		// result.address_line = `${streetNumb}${streetNumb ? (' ' + route) : (route)}`;
		return result;
	}

	getEmptyAddress(): any {
		return {
			lat: undefined,
			lng: undefined,
			city: '',
			state: '',
			postalCode: '',
			country: ''
		};
	}

	findType(addr: google.maps.places.PlaceResult, type: string): string {
		const comp: any = addr.address_components?.find(
			(item) => item.types.indexOf(type) >= 0
		);
		return comp ? comp.short_name : '';
	}

	resetAddress(value: any) {
		// console.log(value);
		// this.control.setValue(!value ? null : value);
		// this.byChangeAddress.emit(value);
	}
}

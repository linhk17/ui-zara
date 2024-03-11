import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorMessage } from '@interfaces/general/error-message.interface';

@Component({
	selector: 'app-form-control-validate',
	templateUrl: './form-control-validate.component.html',
	styleUrls: ['./form-control-validate.component.scss']
})
export class FormControlValidateComponent {

	@Input() control!: FormControl;
	@Input() submitted?: boolean;
	@Input() name: string = 'This field';
	@Input() customError?: ErrorMessage[];
	errorClassName: string = 'invalid-feedback d-block';

	constructor() { }

	checkKey(key: string) {
		return this.customError?.find(item => item.error === key) ? true : false;
	}

}

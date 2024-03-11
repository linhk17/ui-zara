import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';
import * as EmailValidator from 'email-validator';

export function mustMatch(controlName: string, matchingControlName: string, controlLabel: string) {
	return (formGroup: FormGroup) => {
		const control = formGroup.get(controlName);
		const matchingControl = formGroup.get(matchingControlName);
		if (!control || !matchingControl) {
			return;
		}
		if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
			return;
		}
		if (control.value !== matchingControl.value) {
			matchingControl.setErrors({ mustMatch: { controlLabel } });
			return;
		}
		matchingControl.setErrors(null);
	};
}


// export function PhoneNumberValidator(regionCode: string | null): ValidatorFn {
// const phoneNumberUtil = PhoneNumberUtil.getInstance();
// 	return (control: AbstractControl): { [key: string]: any } | null => {
// 		let validNumber = false;
// 		try {
// 			const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(
// 				control.value, regionCode
// 			);
// 			validNumber = phoneNumberUtil.isValidNumber(phoneNumber);
// 		} catch (e) { }

// 		return validNumber ? null : { wrongNumber: { value: control.value } };
// 	};
// }

export function phoneNumberValidator(countryCodeName: string, phoneNumberName: string) {
	return (formGroup: FormGroup) => {
		const countryCodeControl = formGroup.get(countryCodeName);
		const phoneNumberControl = formGroup.get(phoneNumberName);
		if (phoneNumberControl?.value) {
			const phoneNumberUtil = PhoneNumberUtil.getInstance();
			const phoneNumberInput: string = phoneNumberControl.value;
			if ((phoneNumberInput || '').trim().length !== 0) {
				try {
					const phoneNumber = phoneNumberUtil.parse(countryCodeControl?.value + phoneNumberInput);
					if (!phoneNumberUtil.isValidNumber(phoneNumber)) {
						phoneNumberControl?.setErrors({ validatePhoneNumber: { valid: false } });
						return;
					}
				} catch (error) {
					phoneNumberControl?.setErrors({ validatePhoneNumber: { valid: false } });
					return;
				}
			}
		}
		if (phoneNumberControl?.getError('validatePhoneNumber')) {
			phoneNumberControl?.setErrors({ validatePhoneNumber: null });
		}
	};
}

export function emailValidator(controlName: string) {
	return (formGroup: FormGroup) => {
		const emailControl = formGroup.get(controlName);
		const value = emailControl?.value;
		if (value) {
			const isValid = EmailValidator.validate(value);
			if (!isValid) {
				emailControl?.setErrors({ email: true });
				return;
			}
			emailControl?.setErrors({ email: null });
			removeFormControlError(emailControl, 'email');
			return;
		}
	};
}

function removeFormControlError(control: AbstractControl, errorName: string) {
	if (control?.errors && control?.errors[errorName] !== undefined) {
		delete control.errors[errorName];
		if (Object.keys(control.errors).length === 0) {
			control.setErrors(null);
		}
	}
}

export function whitespacesValid(control: AbstractControl): ValidationErrors | null {
	const isWhitespace = control.value && (control.value || '').trim().length === 0;
	const isValid = !isWhitespace;
	return isValid ? null : { whitespace: true };
}

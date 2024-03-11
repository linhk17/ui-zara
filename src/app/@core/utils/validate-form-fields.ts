import { FormGroup, FormControl, NgForm } from '@angular/forms';
/**
 * validateAllFormFields - Check validate Form when click submit button
 * @param formGroup Form that you want to check validate
 */
export function validateAllFormFields(formGroup: FormGroup) {
	Object.keys(formGroup.controls).forEach(field => {
		const control = formGroup.get(field);
		if (control instanceof FormControl) {
			control.markAsTouched({ onlySelf: true });
		} else if (control instanceof FormGroup) {
			validateAllFormFields(control);
		}
	});
}

/**
 * validateAllFormFields - Check validate ngForm when click submit button
 * @param ngForm Form that you want to check validate
 */
export function validateAllNgFormFields(ngForm: NgForm) {
	if (!ngForm) {
		return;
	}
	Object.keys(ngForm.controls).forEach(field => {
		const control = ngForm.controls[field];
		if (control instanceof FormControl) {
			control.markAsDirty({ onlySelf: true });
		} else if (control instanceof NgForm) {
			validateAllNgFormFields(control);
		}
	});
}

/**
 * removevalidateAllFormFields - uncheck validate FormGroup
 * @param formGroup Form that you want to check validate
 */
export function removevalidateAllFormFields(formGroup: FormGroup) {
	Object.keys(formGroup.controls).forEach(field => {
		const control = formGroup.get(field);
		if (control instanceof FormControl) {
			control.markAsPristine();
		}
	});
}

/**
 * removevalidateAllFormFields - uncheck validate NgForm
 * @param ngForm Form that you want to check validate
 */
export function removevalidateAllNgFormFields(ngForm: NgForm) {
	if (!ngForm) {
		return;
	}
	Object.keys(ngForm.controls).forEach(field => {
		const control = ngForm.controls[field];
		if (control instanceof FormControl) {
			control.markAsUntouched();
			control.markAsPristine();
		}
	});
}


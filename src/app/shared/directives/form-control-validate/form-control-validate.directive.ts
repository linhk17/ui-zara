import { ChangeDetectorRef, Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { ErrorMessage } from '@interfaces/general/error-message.interface';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { convertToLocal } from '@utils/time';

@Directive({
	selector: '[appFormControlValidate]'
})
export class FormControlValidateDirective implements OnInit, OnDestroy {

	private _control!: FormControl | AbstractControl;
	private _submitted: boolean = false;
	private _touched: boolean = false;
	private _dirty: boolean = false;
	@Input() set control(value: FormControl | AbstractControl) {
		this._control = value;
		this.checkValidate();
	}
	@Input() set submitted(value: boolean) {
		this._submitted = value;
		this.checkValidate();
	}
	@Input() set touched(value: boolean) {
		this._touched = value;
		console.log('touched: ' + this._touched);
		this.checkValidate();
	}
	@Input() set dirty(value: boolean) {
		this._dirty = value;
		this.checkValidate();
	}
	@Input() name: string = 'This field';
	@Input() customError?: ErrorMessage[];
	subscription = new Subscription();

	constructor(
		private el: ElementRef,
		private _cdr: ChangeDetectorRef
	) { }

	ngOnInit() {
		this._control.valueChanges
			.pipe(debounceTime(500))
			.subscribe(() => {
				this.checkValidate();
			});
	}

	invalidControl(key: string): boolean {
		return this._control?.errors?.[key] && (this._control?.touched ||
			this._control?.dirty || this._submitted);
	}

	checkKey(key: string) {
		return this.customError?.find(item => item.error === key) ? true : false;
	}

	checkValidate() {
		if (!this._control) {
			return;
		}
		if (this.customError) {
			this.customError.map(item => {
				this.el.nativeElement.innerHTML = this.invalidControl(item?.error || '') && item.message ? `<p>$${item.message}</p>` : '';
				return;
			});
		}
		if (this._control.errors && (this._dirty || this._touched || this._submitted)) {
			if (this._control.getError('required') && !this.checkKey('required')) {
				this.el.nativeElement.innerHTML = `${this.name} is required`;
			}
			if (this._control.getError('email') && !this.checkKey('email')) {
				this.el.nativeElement.innerHTML = `${this.name} is invalid`;
			}
			if (this._control.getError('pattern') && !this.checkKey('pattern')) {
				this.el.nativeElement.innerHTML = `Please enter a valid ${this.name}`;
			}
			if (this._control.getError('minlength') && !this.checkKey('minlength')) {
				this.el.nativeElement.innerHTML = `${this.name} must be at least ${this._control.errors?.['maxlength'].requiredLength}`;
			}
			if (this._control.getError('maxlength') && !this.checkKey('maxlength')) {
				this.el.nativeElement.innerHTML = `${this.name} must be less than ${this._control.errors?.['minlength'].requiredLength}`;
			}
			if (this._control.getError('min') && !this.checkKey('min')) {
				this.el.nativeElement.innerHTML = `${this.name} must be equal or greater than ${this._control.errors?.['min'].min}`;
			}
			if (this._control.getError('max') && !this.checkKey('max')) {
				this.el.nativeElement.innerHTML = `${this.name} must be equal or less than ${this._control.errors?.['max'].max}`;
			}
			if (this._control.getError('mustMatch') && !this.checkKey('mustMatch')) {
				this.el.nativeElement.innerHTML = `${this._control['errors']?.['mustMatch'].controlLabel} and ${this.name} does not match`;
			}
			if (this._control.getError('validateAge') && !this._control['errors']?.['validateAge'].valid) {
				this.el.nativeElement.innerHTML = this._control['errors']?.['validateAge'].errorMessage;
			}
			if (this._control.getError('matDatepickerParse')) {
				this.el.nativeElement.innerHTML = `${this.name} is invalid`;
			}
			if (this._control.getError('matStartDateInvalid')) {
				this.el.nativeElement.innerHTML = `${this.name} is invalid`;
			}
			if (this._control.getError('matEndDateInvalid')) {
				this.el.nativeElement.innerHTML = `${this.name} is invalid`;
			}
			if (this._control.getError('matDatepickerMin')) {
				this.el.nativeElement.innerHTML = `${this.name} must be equal or greater than ${convertToLocal(this._control.errors?.['matDatepickerMin'].min)}`;
			}
			if (this._control.getError('matDatepickerMax')) {
				this.el.nativeElement.innerHTML = `${this.name} must be equal or less than ${convertToLocal(this._control.errors?.['matDatepickerMax'].max)}`;
			}
			if (this._control.getError('validatePhoneNumber') && !this._control['errors']?.['validatePhoneNumber'].valid) {
				this.el.nativeElement.innerHTML = `${this.name} is invalid`;
			}
		}
	}

	ngOnDestroy() {
		this.subscription?.unsubscribe();
	}
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlValidateComponent } from './app-form-control-validate.component';

describe('FormControlValidateComponent', () => {
	let component: FormControlValidateComponent;
	let fixture: ComponentFixture<FormControlValidateComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FormControlValidateComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FormControlValidateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

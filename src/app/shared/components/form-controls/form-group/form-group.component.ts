import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-form-group',
	templateUrl: './form-group.component.html',
	styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent {

	@Input() labelClassName: string = '';
	@Input() groupClassName: string = '';
	@Input() isRequired: boolean = false;
	@Input() title: string = '';

}

import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-form-control-label',
	templateUrl: './form-control-label.component.html',
	styleUrls: ['./form-control-label.component.scss']
})
export class FormControlLabelComponent {

	@Input() className: string = '';
	@Input() isRequired?: boolean;
	@Input() title: string = '';

}

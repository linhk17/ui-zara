import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

	@Input() type = 'button';
	@Input() isLoading: boolean | null = false;
	@Input() isDisabled: boolean | null = false;
	@Input() className: string = '';
	@Input() icon: string = '';
	@Input() isIconOnly: boolean = false;
	@Output() byClick: EventEmitter<Event> = new EventEmitter();

	constructor() { }

	handlerClick(e: Event) {
		console.log(this.isDisabled);
		
		this.byClick.emit(e);
	}

}

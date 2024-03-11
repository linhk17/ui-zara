import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-page-size-selection',
	templateUrl: './page-size-selection.component.html',
	styleUrls: ['./page-size-selection.component.scss']
})
export class PageSizeSelectionComponent {

	pageSize: number = 25;
	@Input() isDisabled: boolean = false;
	@Output() byChanges: EventEmitter<number> = new EventEmitter<number>();
	options: number[] = [5, 10, 25, 50, 100];

	changePageSize() {
		this.byChanges.next(+this.pageSize);
	}
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-table-button-edit',
	templateUrl: './table-button-edit.component.html',
	styleUrls: ['./table-button-edit.component.scss'],
	host: {
		'[class.btn-table-item]': 'true',
	}
})
export class TableButtonEditComponent implements OnInit {
	@Output() onClick = new EventEmitter<boolean>();
	constructor() { }

	ngOnInit(): void {
	}

}

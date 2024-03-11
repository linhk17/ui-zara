import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-table-button-group',
	templateUrl: './table-button-group.component.html',
	styleUrls: ['./table-button-group.component.scss'],
	host: {
		'[class.btn-table]': 'true',
		'[class.justify-content-end]': 'isEnd',
		'[class.justify-content-start]': 'isStart'
	}
})
export class TableButtonGroupComponent implements OnInit {

	@Input() isStart: boolean = false;
	@Input() isEnd: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

}

import {
	Component,
	Input,
	Output,
	EventEmitter
} from '@angular/core';
import { ColumnHeader, Sort } from '@interfaces/general/table.interface';

@Component({
	selector: 'app-generic-table',
	templateUrl: './generic-table.component.html',
	styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent {

	@Input() id!: string;
	@Input() className: string = 'table';
	@Input() totalItems: number = 0;
	@Input() pageSize: number = 0;
	@Input() tableData: any;
	@Input() columnHeader: ColumnHeader = {};
	@Input() hideColumnHeader: boolean = false;
	@Input() hidePaginate: boolean = false;
	@Output() changeSort: EventEmitter<Sort> = new EventEmitter<Sort>();
	@Output() changePage: EventEmitter<number> = new EventEmitter<number>();
	isLoadingResults: boolean = false;
	sort: Sort = {};
	sortClick = 0;
	page: number = 1;
	objectKeys = Object.keys;

	constructor() { }

	sortBy(field: any) {
		if (this.columnHeader[field]?.sort) {
			const sortField = Object.keys(this.sort || [])[0];
			if (field === sortField) {
				if (this.sortClick === 2) {
					this.resetSort();
					this.emitSort();
					return;
				}
				// sortClick is 1
				this.sort[field] = 'asc';
				this.emitSort();
				this.sortClick++;
				return;
			}
			if (!sortField || (field !== sortField)) {
				this.resetSort();
				this.sort[field] = 'desc';
				this.sortClick++;
				this.emitSort();
				return;
			}
		}

	}

	emitSort() {
		this.changeSort.next(this.sort);
	}

	resetSort() {
		this.sort = {};
		this.sortClick = 0;
	}

	emitPage() {
		this.changePage.next(this.page);
	}
}

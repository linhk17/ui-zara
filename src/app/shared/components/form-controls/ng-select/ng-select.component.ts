import { Component, ContentChild, EventEmitter, forwardRef, Injector, Input, Output, TemplateRef } from '@angular/core';
import { FormGroup, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ErrorMessage } from '@interfaces/general/error-message.interface';
import { MultiSelect } from '@interfaces/general/multi-select.interface';
import { ControlValueAccessorConnector } from '@utils/control-value-accessor-connector';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
	selector: 'app-ng-select',
	templateUrl: './ng-select.component.html',
	styleUrls: ['./ng-select.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => NgSelectComponent),
			multi: true,
		},
	],
})
export class NgSelectComponent extends ControlValueAccessorConnector {

	@Input() submitted!: boolean;
	@Input() placeHolder: string = '';
	@Input() className: string = '';
	@Input() name!: string;
	@Input() errorLabel!: string;
	@Input() configMultiSelect?: MultiSelect;
	@Input() isDisabled: boolean = false;
	@Input() customError?: ErrorMessage[];
	@Input() loading: boolean = false;
	@Input() isCloseOnSelect: boolean = true;
	@ContentChild('templateLabel') templateLabel?: TemplateRef<any>;
	@ContentChild('templateOption') templateOption?: TemplateRef<any>;
	@ContentChild('templateHeader') templateHeader?: TemplateRef<any>;
	@ContentChild('templateFooter') templateFooter?: TemplateRef<any>;
	@ContentChild('templateMultipleLabel') templateMultipleLabel?: TemplateRef<any>;
	@Output() byOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() byClose: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() byChange: EventEmitter<any> = new EventEmitter<any>();
	@Output() byScrollToEnd: EventEmitter<any> = new EventEmitter<any>();
	@Output() byClear: EventEmitter<any> = new EventEmitter<any>();
	@Output() bySearch: EventEmitter<any> = new EventEmitter<any>();
	@Output() byBlur: EventEmitter<any> = new EventEmitter<any>();

	form!: FormGroup;
	onSearch = new Subject();
	searchValue!: any;
	constructor(injector: Injector,
		private rootFormGroup: FormGroupDirective) {
		super(injector);
		// this.form = this.rootFormGroup.control;
		this.onSearch.pipe(debounceTime(700), distinctUntilChanged()).subscribe(data => {
			this.searchValue = data;
			this.bySearch.emit(data);
		});
	}

	onOpen() {
		this.byOpen.next(true);
	}

	onClose() {
		this.byClose.next(true);
		this.search('');
	}

	onChange(value: any) {
		this.byChange.next(value);
	}

	change(value: any) {
		this.byChange.next(value);
	}

	search(value: any) {
		this.onSearch.next(value);
	}

	clear() {
		this.byClear.next(true);
	}

	blur(value: any) {
		this.byBlur.next(value);
		this.search('');
	}

	scrollToEnd(value: any) {
		this.byScrollToEnd.next(value);
	}
}

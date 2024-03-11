import { Component, EventEmitter, forwardRef, Injector, Input, Output, OnDestroy, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '@utils/control-value-accessor-connector';
import { makeid } from '@utils/makeid';
import { Subscription, debounceTime } from 'rxjs';

@Component({
	selector: 'app-search-box',
	templateUrl: './search-box.component.html',
	styleUrls: ['./search-box.component.scss'],
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => SearchBoxComponent),
		multi: true
	}
	]
})
export class SearchBoxComponent extends ControlValueAccessorConnector implements OnInit, OnDestroy {

	val: string = ''; // this is the updated value that the class accesses
	name: string = makeid(10);
	@Input() placeHolder: string = 'Search...';
	@Input() boxClassName!: string;
	@Input() controlClassName!: string;
	@Output() bySearch: EventEmitter<boolean> = new EventEmitter<any>();
	@Output() byReset: EventEmitter<boolean> = new EventEmitter<any>();
	subscriber = new Subscription();

	constructor(injector: Injector) {
		super(injector);
	}

	ngOnInit() {
		this.subscriber = this.control.valueChanges.pipe(debounceTime(300)).subscribe(data => {
			if (!data) {
				this.reset();
			}
		});
	}

	search() {
		this.bySearch.next(true);
	}

	reset() {
		this.byReset.next(true);
	}

	ngOnDestroy() {
		this.subscriber.unsubscribe();
	}
}

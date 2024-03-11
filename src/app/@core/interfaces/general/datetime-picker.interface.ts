export interface DateTimePicker {
	selectMode?: 'single' | 'range' | 'rangeFrom' | 'rangeTo';
	pickerType?: 'both' | 'calendar' | 'timer';
	startAt?: any;
	startView?: 'month' | 'year' | 'multi-year';
	minDate?: any;
	maxDate?: any;
	placeHolderMin?: string;
	placeHolderMax?: string;
}

export interface PaginationResponseInterface<T> {
	count: number;
	next: any;
	previous: any;
	results: T[];
}

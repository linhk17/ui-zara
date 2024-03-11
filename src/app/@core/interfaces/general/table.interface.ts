export interface Sort {
	[key: string]: string;
}

export interface ColumnHeader {
	[key: string]: {
		title: string;
		align?: string;
		sort?: boolean;
		headerClass?: string;
		width?: string;
	};
}

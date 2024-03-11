export interface MultiSelect {
	items: { [key: string]: any }[];
	bindLabel: string;
	bindValue?: string;
	clearable?: boolean;
	searchable?: boolean;
	multiple?: boolean;
	loading?: boolean;
	appendTo?: string;
	isCustomLabel?: boolean;
	isCustomOption?: boolean;
	isCustomHeader?: boolean;
	isCustomFooter?: boolean;
	isCustomMultipleLabel?: boolean;
	addTag?: boolean;
	isHideSelected?: boolean;
}

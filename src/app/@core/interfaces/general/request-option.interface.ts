export interface RequestOption {
	resource: string;
	body?: any;
	params?: any;
	subs?: string[];
	reportProgress?: boolean;
	skipToken?: string;
	noEndpoint?: boolean;
}

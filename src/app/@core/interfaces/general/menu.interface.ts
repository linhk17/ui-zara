export interface MenuItem {
	title: string;
	icon?: string;
	activeIcon?: string;
	link: string;
	permission?: {
		isAdmin?: boolean;
		isEmployee?: boolean;
	};
}

export type Menu = MenuItem[];

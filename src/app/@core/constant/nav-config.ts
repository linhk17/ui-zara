import { Menu } from '@interfaces/general/menu.interface';

export const navConfiguration: Menu = [
	{
		icon: 'shop',
		title: 'Dashboard',
		link: '/dashboard',
		permission: {
			isAdmin: true,
			isEmployee: true
		}
	},
	{
		icon: 'users',
		title: 'Customer',
		link: '/customers',
		permission: {
			isAdmin: true
		}
	},
	{
		icon: 'contact',
		title: 'Employees',
		link: '/employees',
		permission: {
			isAdmin: true
		}
	},
	{
		icon: 'screen',
		title: 'Device',
		link: '/devices',
		permission: {
			isAdmin: true
		}
	},
	{
		icon: 'server',
		title: 'Services',
		link: '/services',
		permission: {
			isAdmin: true
		}
	},
	{
		icon: 'tags',
		title: 'Promotions',
		link: '/promotions',
		permission: {
			isAdmin: true
		}
	},
	{
		icon: 'briefcase',
		title: 'Jobs',
		link: '/jobs',
		permission: {
			isAdmin: true,
			isEmployee: true
		}
	},
	{
		icon: 'money-bill-tranfer',
		title: 'Transactions',
		link: '/transactions',
		permission: {
			isAdmin: true
		}
	},
	{
		icon: 'location',
		title: 'Location',
		link: '/locations',
		permission: {
			isAdmin: true
		}
	}
]

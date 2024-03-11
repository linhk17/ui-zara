import { environment } from '@env/environment';


export function getScreen() {
	// return screen.width < 576 ? true : false;
	return screen.width < 576 ? 'xs' : screen.width < 992 ? 'sm' : screen.width < 1200 ? 'lg' : 'xl';
}

export function getDomainUrl() {
	return window.location.protocol + '//' + window.location.hostname + (location.port ? ':' + location.port : '');
}

export function scrollToElement(id: string, block: 'center' | 'end' | 'start' | 'nearest' = 'start') {
	const element = document.getElementById(id);
	element?.scrollIntoView({ behavior: 'smooth', block });
}

export function getPortalLink(type: 'interviewee' | 'interviewer') {
	const portal = type === 'interviewer' ? 'hr' : 'candidate';
	return `https://${portal}-dev.${environment.DOMAIN}`;
	return type === 'interviewee' ? 'http://fd-can.website-ap-south-1.linodeobjects.com' : 'http://fd-hr.website-ap-south-1.linodeobjects.com';
	// return type === 'interviewee' ? 'http://localhost:4201' : 'http://localhost:4000';
}

export function openLink(url: string = '') {
	const windowReference = window.open('_blank');
	if (windowReference) {
		windowReference.location = url;
	}
}

import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
	providedIn: 'root'
})
export class CookiesService {

	constructor(
		private cookieService: CookieService,
	) { }

	getLocalStorage(name: string) {
		return localStorage.getItem(name);
	}

	setLocalStorage(name: string, value: string) {
		localStorage.setItem(name, value);
	}

	removeLocalStorage(name: string) {
		localStorage.removeItem(name);
	}

	clearLocalStorage() {
		localStorage.clear();
	}

	getSessionStorage(name: string) {
		return sessionStorage.getItem(name);
	}

	setSessionStorage(name: string, value: string) {
		sessionStorage.setItem(name, value);
	}

	removeSessionStorage(name: string) {
		sessionStorage.removeItem(name);
	}

	clearSessionStorage() {
		sessionStorage.clear();
	}

	setCookies(name: string, value: string, expires: number) {
		this.cookieService.set(name, value, expires, '/', window.location.hostname, false);
	}

	getCookies(name: string) {
		return this.cookieService.get(name);
	}

	checkCookie(name: string) {
		return this.cookieService.check(name);
	}

	removeCookies(name: string) {
		this.cookieService.delete(name, '/', window.location.hostname, false);
	}

	clearAllCookies() {
		this.cookieService.deleteAll('/', window.location.hostname, false);
	}

}

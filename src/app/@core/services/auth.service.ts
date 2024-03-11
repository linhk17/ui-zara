import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CookiesService } from './cookies.service';
import { ENDPOINT, REMEMBER_ME } from '@constant/index';
import { EndpointService } from '@services/index';
import { map } from 'rxjs/operators';
import { User } from '@interfaces/user.interface';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { ENDPOINT_ADMIN, ENDPOINT_EMPLOYEE } from '@constant/endpoint.constant';
import { Role } from '@enum/role.enum';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private tokenVerifyAccountSubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>('');
	private emailVerifyAccountSubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>('');
	private userSubject: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
	get user$(): Observable<User | undefined> {
		return this.userSubject.asObservable();
	}

	get tokenVerifyAccount$(): Observable<string | undefined> {
		return this.tokenVerifyAccountSubject.asObservable();
	}
	
	get emailVerifyAccount$(): Observable<string | undefined> {
		return this.emailVerifyAccountSubject.asObservable();
	}
	
	isLoggedIn: boolean = false;

	constructor(
		private _cookieService: CookiesService,
		private _service: EndpointService
	) {
		// mock data
		// this.userSubject.next({
		// 	// mock data
		// 	permissions: [{
		// 		id: '1',
		// 		title: 'Category',
		// 		code: 'category',
		// 		isGranted: false
		// 	}, {
		// 		id: '2',
		// 		title: 'User',
		// 		code: 'user',
		// 		isGranted: true
		// 	}, {
		// 		id: '3',
		// 		title: 'Merchant',
		// 		code: 'merchant',
		// 		isGranted: false
		// 	}]
		// });
	}

	get token() {
		if (this._cookieService.getLocalStorage(REMEMBER_ME)) {
			return this._cookieService.getLocalStorage(environment.TOKEN) || '';
		}
		return this._cookieService.getSessionStorage(environment.TOKEN) || '';
	}

	set token(token: string) {
		if (this._cookieService.getLocalStorage(REMEMBER_ME)) {
			this._cookieService.setLocalStorage(environment.TOKEN, token);
			return;
		}
		this._cookieService.setSessionStorage(environment.TOKEN, token);
	}

	get refreshToken() {
		if (this._cookieService.getLocalStorage(REMEMBER_ME)) {
			return this._cookieService.getLocalStorage(environment.REFRESH_TOKEN) || '';
		}
		return this._cookieService.getSessionStorage(environment.REFRESH_TOKEN) || '';
	}

	set refreshToken(token: string) {
		if (this._cookieService.getLocalStorage(REMEMBER_ME)) {
			this._cookieService.setLocalStorage(environment.REFRESH_TOKEN, token);
			return;
		}
		this._cookieService.setSessionStorage(environment.REFRESH_TOKEN, token);
	}

	get currentTokenVerifyAccount(): string | undefined {
		return this.tokenVerifyAccountSubject.value;
	}

	get currentEmailVerifyAccount(): string | undefined {
		return this.emailVerifyAccountSubject.value;
	}

	get permission(){
		try{
			return JSON.parse(this._cookieService.getLocalStorage('permission')!);
		}
		catch(err) {
			return err;
		}
	}
	set permission(permission: any){
		this._cookieService.setLocalStorage('permission', JSON.stringify(permission));
	}

	checkAuthentication() {
		const isAuthen = this.token || this.refreshToken;
		this.isLoggedIn = !!isAuthen;
		return isAuthen;
	}

	getStarted(email: string) {
		return this._service.sendGet({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['get-started'],
			params: { email },
			skipToken: 'true'
		});
	}

	checkEmail(email: string) {
		return this._service.sendPost({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['check-email'],
			body: { email },
			skipToken: 'true'
		})
	}

	login(body: any) {
		return this._service.sendPost({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['login'],
			body,
			skipToken: 'true'
		}).pipe(
			map((res: any) => {
				if (body.remember_me) {
					this._cookieService.setLocalStorage(REMEMBER_ME, '1');
				} else {
					this._cookieService.removeLocalStorage(REMEMBER_ME);
				}
				this.token = res.token;
				this.refreshToken = res.refresh;
				this.permission = {isAdmin: res.isAdmin, isEmployee: res.isEmployee}
				return res;
			})
		);
	}

	sendRefreshToken(body: any) {
		return this._service.sendPost({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['refresh'],
			body
		}).pipe(
			map((res: any) => {
				this.token = res.token;
				this.refreshToken = res.refresh;
				return res;
			})
		);
	}

	// resendCode(body: any) {
	// 	return this._service.sendPost({
	// 		resource: ENDPOINT.AUTHENTICATION,
	// 		subs: ['resend-code'],
	// 		body,
	// 		skipToken: 'true'
	// 	});
	// }

	// completeSignUp(body: any) {
	// 	return this._service.sendPost({
	// 		resource: ENDPOINT.AUTHENTICATION,
	// 		subs: ['complete-signup'],
	// 		body,
	// 		skipToken: 'true'
	// 	});
	// }

	// Verify Account employee (Setup Account Employee)
	verifyAccount(typeVerify: 'set-password' | 'reset-password', body: any) {
		return this._service.sendPost({
			resource: ENDPOINT_EMPLOYEE.AUTHENTICATION,
			subs: [typeVerify, 'verify'],
			body,
			skipToken: 'true'
		})
		.pipe(
			map(res => {
				this.tokenVerifyAccountSubject.next(body.token);
				this.emailVerifyAccountSubject.next(body.email);
				return res;
			})
		);
	}
	
	// Set Password employee account (Setup Account Employee)
	setPassword(body: any){
		return this._service.sendPost({
			resource: ENDPOINT_EMPLOYEE.AUTHENTICATION,
			subs: ['set-password'],
			body,
			skipToken: 'true'
		});
	}

	// resendPassword(body: any) {
	// 	return this._service.sendPost({
	// 		resource: ENDPOINT.AUTHENTICATION,
	// 		subs: ['resend-password'],
	// 		body,
	// 		skipToken: 'true'
	// 	});
	// }

	//Forgot password
	
	// 1. Get token from email forgot password

	forgotPassword(body: any){
		return this._service.sendPost({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['forgot-password'],
			body
		})
	}

	resetPassword(body: any) {
		return this._service.sendPost({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['reset-password'],
			body,
			skipToken: 'true'
		});
	}

	updatePassword(body: any) {
		return this._service.sendPut({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['update-password'],
			body
		});
	}

	getPermissionUser(){
		this.userSubject.next(this.permission);
	}

	getProfile(typeEndpoint: Role.admin | Role.employee) {
		return this._service.sendGet({
			resource: typeEndpoint == Role.admin ? ENDPOINT_ADMIN.PROFILE : ENDPOINT_EMPLOYEE.PROFILE,
		}).pipe(
			map((res: User) => {
				this.userSubject.next(res);
			}));
	}

	updateProfile(body: any) {
		return this._service.sendPut({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['profile'],
			body
		});
	}


	logout() {
		this._cookieService.clearAllCookies();
		this._cookieService.clearLocalStorage();
		this._cookieService.clearSessionStorage();
		window.location.reload();
	}
}

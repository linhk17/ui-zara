import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@services/index';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(private _authService: AuthService, private _router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.checkLogin(state.url);
	}

	// #docregion, canLoad
	canLoad(route: Route, state: RouterStateSnapshot): boolean {
		return this.checkLogin(state.url);
	}

	// #enddocregion canLoad
	checkLogin(url: string): boolean {
		if (this._authService.checkAuthentication()) {
			return true;
		}
		this._router.navigate(['/auth', 'login']);
		return false;
	}
	
}

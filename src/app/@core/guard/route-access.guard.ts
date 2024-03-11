import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Role } from '@enum/role.enum';
import { AuthService } from '@services/auth.service';
import { CookiesService } from '@services/cookies.service';
import { ToastConfirm } from '@utils/toast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteAccessGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _cookieService: CookiesService,
    private _router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkPermissionAccessRoute(route);
  }

  checkPermissionAccessRoute(route: ActivatedRouteSnapshot){
		if(this._authService.permission.isAdmin && route.data['expectedRole'].includes(Role.admin)){
      return true;
    }
    if(this._authService.permission.isEmployee && route.data['expectedRole'].includes(Role.employee)){
      return true;
    }
    ToastConfirm.fire({
      title: 'Permission denied',
      text: 'You are not authorized to perform this action',
      confirmButtonText: 'Close',
      showCancelButton: false,
      icon: 'error',
    }).then((result) => {
      if (result.isConfirmed || result.isDismissed) {
        this._cookieService.clearAllCookies();
        this._cookieService.clearLocalStorage();
        this._cookieService.clearSessionStorage();
        this._router.navigate(['/auth', 'login']);
      }
    });
    return false;
	}
}

import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { CookiesService } from '@services/cookies.service';
import { Toast, ToastConfirm, ToastHTML } from '@utils/toast';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

	constructor(
		private _toast: HotToastService,
		private _cookieService: CookiesService) { }

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError((requestError) => {
				if (requestError.status !== 401) {
					switch (requestError.status) {
						case 404:
							Toast.fire({
								html: ToastHTML('error', 'Error', 'Not found!')
							})
							break;
						case 403:
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
                  window.location.href = '/auth';
                }
              });
							break;
						case 400:
							Toast.fire({
								html: ToastHTML('error', 'Error', requestError.error.name?.[0] || requestError.error.message || requestError.error.message?.[0])
							})
							break;
						default:
							Toast.fire({
								html: ToastHTML('error', 'Error', requestError.error.name?.[0] || requestError.error.message || requestError.error.message?.[0] || 'Server Error')
							})
							break;
					}
				}
				return throwError(requestError);
			})
		);
	}
}

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@services/index';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { switchMap, filter, take, catchError } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

	private isRefreshing = false;
	private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

	constructor(private _authService: AuthService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (request.headers.has('skip')) {
			const headers = request.headers.delete('skip');
			return next.handle(request.clone({ headers }));
		}
		return next
			.handle(this._authService.token ? this.addAuthToken(request, this._authService.token) : request)
			.pipe(
				catchError((error) => {
					if (error instanceof HttpErrorResponse && error.status === 401) {
						return this.handle401Error(request, next);
					} else {
						return throwError(error);
					}
				})
			);
	}

	addAuthToken(request: HttpRequest<any>, token: string) {
		return request.clone({
			setHeaders: {
				Authorization: `Bearer ${token}`
			}
		});
	}

	handle401Error(request: HttpRequest<any>, next: HttpHandler) {
		if (!this.isRefreshing) {
			this.isRefreshing = true;
			this.refreshTokenSubject.next(null);
			const body = { refresh: this._authService.refreshToken };
			return this._authService.sendRefreshToken(body).pipe(
				switchMap((token: any) => {
					this.isRefreshing = false;
					this.refreshTokenSubject.next(this._authService.token);
					return next.handle(this.addAuthToken(request, this._authService.token));
				}));

		} else {
			return this.refreshTokenSubject.pipe(
				filter(token => token != null),
				take(1),
				switchMap(jwt => {
					return next.handle(this.addAuthToken(request, jwt));
				}));
		}
	}
}

import { HttpInterceptor, HttpParameterCodec, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EncodeUrlParamsSafelyInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const newParams = new HttpParams({
			fromString: req.params.toString(),
			encoder: new WebHttpUrlEncodingCodec(),
		});
		return next.handle(req.clone({
			params: newParams
		}));
	}
}

export class WebHttpUrlEncodingCodec implements HttpParameterCodec {
	encodeKey(k: string): string { return encodeURIComponent(k); }

	encodeValue(v: string): string { return encodeURIComponent(v); }

	decodeKey(k: string): string { return decodeURIComponent(k); }

	decodeValue(v: string) { return decodeURIComponent(v); }
}

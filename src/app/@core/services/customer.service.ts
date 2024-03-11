import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';
import { ENDPOINT_ADMIN, ENDPOINT_EMPLOYEE } from '@constant/endpoint.constant';
import { map } from 'rxjs';
import { CookiesService } from './cookies.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  endpoint: string;
  constructor(
    private _service: EndpointService,
    private _authService: AuthService
    ) {
      this.endpoint = _authService.permission.isEmployee
      ? ENDPOINT_EMPLOYEE.CUSTOMER : ENDPOINT_ADMIN.CUSTOMER
  }
  getListCustomer(params: any) {
    return this._service.sendGet({
      resource: this.endpoint,
      params
    }).pipe(map((result) => {
      return {
        ...result,
        results: result.results.map((res: any) => {
          return {
            ...res,
            fullName: res.firstName + ' ' + (res.lastName ? res.lastName : '')
          }
        })
      }
    }));
  }

  getCustomerDetails(id: string){
    return this._service.sendGet({
      resource: this.endpoint,
      subs: [id]
    });
  }

  updateStatus(id: string, body: any){
    return this._service.sendPut({
			resource: this.endpoint,
			subs: [id],
			body
		});
  }
}

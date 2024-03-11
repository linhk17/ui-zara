import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Toast } from '@utils/toast';
import { concatMap, of } from 'rxjs';

@Component({
  selector: 'app-accept-invite',
  templateUrl: './accept-invite.component.html',
  styleUrls: ['./accept-invite.component.scss']
})
export class AcceptInviteComponent {
  constructor(
    private _activatedEoute: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService
  ){}
  ngOnInit(){
    this._activatedEoute.queryParamMap
    .pipe(
      concatMap((params) => {
        if(!params.get('email') || !params.get('token')){
          return of({
            success: false
          });
        }
        return this._authService.verifyAccount('set-password', {
          email: params.get('email'),
          token: params.get('token')
        })
       }
      )
    )
    .subscribe((res: any) => {
      if(res.success){
        this._router.navigate(['/auth', 'set-password']);
      }
      else {
        Toast.fire({
          title: `You have an error while verified email`,
          icon: 'error',
        });
        this._router.navigate(['/auth', 'login'])
      }
    })
  }
}

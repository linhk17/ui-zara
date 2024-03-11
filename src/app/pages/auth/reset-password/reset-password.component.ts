import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { mustMatch } from '@utils/custom-validation';
import { Toast } from '@utils/toast';
import { concatMap, finalize, of } from 'rxjs';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  isLoading: boolean = false;
  isVerifySuccess: boolean = false;
  formResetPassword!: FormGroup;
  currentEmailVerifyAccount?: string;
  currentTokenVerifyAccount?: string;
  constructor(
    private _fb: FormBuilder,
    private _activatedEoute: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService
  ) {
    this.formResetPassword = this._fb.group({
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required])
    },
    {
      validator:  mustMatch('password', 'confirmPassword', 'Password')
    })
  }

  ngOnInit(){
    this.verifyAccount();
  }

  verifyAccount(){
    this._activatedEoute.queryParamMap
    .pipe(
      concatMap((params) => {
        if(!params.get('email') || !params.get('token')){
          return of({
            success: false
          });
        }
        return this._authService.verifyAccount('reset-password', {
          email: params.get('email'),
          token: params.get('token')
        })
       }
      )
    )
    .subscribe((res: any) => {
      if(res.success){
        this.isVerifySuccess = true;
        this.currentEmailVerifyAccount = this._authService.currentEmailVerifyAccount;
        this.currentTokenVerifyAccount = this._authService.currentTokenVerifyAccount;
      }
      else {
        Toast.fire({
          title: `You have an error while verified email. Please submit again your email`,
          icon: 'error',
        });
        this._router.navigate(['/auth', 'forgot-password'])
      }
    })
  }

  onSubmit(){
    this.isLoading = true;
    this._authService.resetPassword({
      ...this.formResetPassword.value,
      email: this.currentEmailVerifyAccount,
      token: this.currentTokenVerifyAccount
    })
    .pipe(finalize(() => this.isLoading = false))
    .subscribe(res => {
      Toast.fire({
        title: `You have completed update password`,
        icon: 'success',
      });
      this._router.navigate(['/auth', 'login'])
    })
  }
}

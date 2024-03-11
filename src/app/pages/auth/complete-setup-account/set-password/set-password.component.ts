import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { mustMatch } from '@utils/custom-validation';
import { Toast } from '@utils/toast';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent {
  isLoading: boolean = false;
  formSetPassword!: FormGroup;
  currentEmailVerifyAccount?: string;
  currentTokenVerifyAccount?: string;
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.formSetPassword = this._fb.group({
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required])
    },
    {
      validator:  mustMatch('password', 'confirmPassword', 'Password')
    })
  }
  
  ngOnInit(){
    this.currentEmailVerifyAccount = this._authService.currentEmailVerifyAccount;
    this.currentTokenVerifyAccount = this._authService.currentTokenVerifyAccount;
    if(!this.currentEmailVerifyAccount || !this.currentTokenVerifyAccount){
      this._router.navigate(['/auth', 'login'])
    }
  }

  onSubmit(){
    this.isLoading = true;
    this._authService.setPassword({
      ...this.formSetPassword.value,
      email: this.currentEmailVerifyAccount,
      token: this.currentTokenVerifyAccount
    })
    .pipe(finalize(() => this.isLoading = false))
    .subscribe(res => {
      Toast.fire({
        title: `You have completed setup account`,
        icon: 'success',
      });
      this._router.navigate(['/auth', 'login'])
    })
  }
}

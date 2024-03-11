import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { Toast } from '@utils/toast';
import { finalize } from 'rxjs';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  isLoading: boolean = false;
  form!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService
  ) {
    this.form = this._fb.group({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  onSubmit(){
    if(this.form.valid){
      this.isLoading = true;
      console.log(this.form.value);
      this._authService.forgotPassword(this.form.value)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(res => {
        Toast.fire({
          title: 'Please check your email inbox',
          icon: 'info',
          customClass: {
            container: 'toast-custom-container',
            popup: 'toast-custom swal2-icon-primary'
          }
        });
      })
    }
  }
}

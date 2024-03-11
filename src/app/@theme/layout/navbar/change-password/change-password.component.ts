import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { mustMatch } from '@utils/custom-validation';
import { Toast } from '@utils/toast';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  isLoading: boolean = false;
  form!: FormGroup;
  submitted: boolean = false;
  constructor(
    public bsModalRef: BsModalRef,
    private _fb: FormBuilder,
    private _authService: AuthService
  ) {
    this.form = this._fb.group(
      {
        currentPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        newPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmNewPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
      },
      {
        validator: mustMatch(
          'newPassword',
          'confirmNewPassword',
          'New Password'
        ),
      }
    );
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.isLoading = true;
      this._authService.updatePassword(this.form.value)
      .pipe(finalize(() =>  this.isLoading = false))
      .subscribe((res) => {
        Toast.fire({
          title: 'You have successfully updated the password',
          icon: 'success',
        });
        this.bsModalRef.hide();
      });
    }
  }
}

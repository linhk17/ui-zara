import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  submitted: boolean = false;

  form!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.form = this._fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      remember_me: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  changeAddress(e: any) {
    console.log(e);
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.isLoading = true;
      this._authService
        .login(this.form.value)
        .pipe(finalize(() =>  this.isLoading = false))
        .subscribe((res) => this._router.navigate(['/jobs']));
    }
  }
}

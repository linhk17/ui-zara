import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormControlsModule } from '@shared/components/form-controls/form-controls.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoadingVerifyCompleteAccountComponent } from './loading-verify-account/loading-verify-account.component';
import { SetPasswordComponent } from './complete-setup-account/set-password/set-password.component';
import { AcceptInviteComponent } from './complete-setup-account/accept-invite/accept-invite.component';
const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'set-password',
        component: SetPasswordComponent
      },
      {
        path: 'accept-invite',
        component: AcceptInviteComponent,
      },
    ]
  }
]

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    LoadingVerifyCompleteAccountComponent,
    SetPasswordComponent,
    AcceptInviteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormControlsModule
  ]
})
export class AuthModule { }

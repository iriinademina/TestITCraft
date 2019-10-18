import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
    {
        path: 'auth',
        children: [
          {
            children: [
             { path: 'login',
             component: LoginComponent
             },
              {
                path: 'reset-password',
                component: ResetPasswordComponent,
                data: { title: 'Forgot Password' }
              }
            ]
          },
          {
            path: 'email/action',
            component: ConfirmPasswordComponent,
            data: { title: 'Confirm Email Address' }
          }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

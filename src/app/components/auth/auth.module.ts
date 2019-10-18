import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component'
import { ResetPasswordComponent } from './reset-password/reset-password.component'
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component'
// import { AuthRoutingModule } from './auth-routing.module'
import { SwitchResetComponentsComponent } from './switch-reset-components/switch-reset-components.component'
@NgModule({
    declarations: [LoginComponent,
        ResetPasswordComponent,
        ConfirmPasswordComponent,
        SwitchResetComponentsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MaterialModule,
        ReactiveFormsModule,
        SharedModule,
        AngularFireAuthModule,
        // AuthRoutingModule
    ],
    exports: [LoginComponent,
        ResetPasswordComponent,
        ConfirmPasswordComponent,
        SwitchResetComponentsComponent
    ],
})
export class AuthModule {}
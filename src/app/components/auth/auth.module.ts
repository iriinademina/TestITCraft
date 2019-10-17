import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component'

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MaterialModule,
        ReactiveFormsModule,
        SharedModule,
        AngularFireAuthModule,
        
    ],
    exports: [LoginComponent],
})
export class AuthModule {}
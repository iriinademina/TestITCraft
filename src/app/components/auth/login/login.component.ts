
import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertComponent } from '../../../shared/alert/alert.component';
import { PlaceholderDirective } from '../../../shared/placeholder/placeholder.directive';
import * as fromApp from '../../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public authForm: FormGroup;  

  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, { static: false })
  alertHost: PlaceholderDirective;

  private closeSub: Subscription;
  private storeSub: Subscription;

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private store: Store<fromApp.AppState>,
      private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
       
    this.authForm = this.formBuilder.group({
        email: this.formBuilder.control(null, [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(15),
        ]),
        password: this.formBuilder.control(null, [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(15),
        ]),
    });


      this.storeSub = this.store.select('auth').subscribe(authState => {
          this.isLoading = authState.loading;
          this.error = authState.authError;
          if (this.error) {
              this.showErrorAlert(this.error);
          }
      });
  }

  onSwitchMode() {
      this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() : void {
    if (!this.authForm.valid) {
        return;
    }
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    this.isLoginMode ? 
                  this.store.dispatch(
                      new AuthActions.LoginStart({ email, password }),
                  ):
                  this.store.dispatch(
                      new AuthActions.SignupStart({ email, password }),
                  );
    }


  onHandleError() {
      this.store.dispatch(new AuthActions.ClearError());
  }

  ngOnDestroy() {
      if (this.closeSub) {
          this.closeSub.unsubscribe();
      }
      if (this.storeSub) {
          this.storeSub.unsubscribe();
      }
  }

  private showErrorAlert(message: string) {
      const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
          AlertComponent,
      );
      const hostViewContainerRef = this.alertHost.viewContainerRef;
      hostViewContainerRef.clear();

      const componentRef = hostViewContainerRef.createComponent(
          alertCmpFactory,
      );

      componentRef.instance.message = message;
      this.closeSub = componentRef.instance.closed.subscribe(() => {
          this.closeSub.unsubscribe();
          hostViewContainerRef.clear();
      });
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component'
import { AuthGuard } from '../app/components/auth/auth.guard';
import { ItemComponent } from './components/store/item/item.component'
import { ResetPasswordComponent} from './components/auth/reset-password/reset-password.component'
import { ConfirmPasswordComponent } from './components/auth/confirm-password/confirm-password.component'
import { StoreComponent } from '../../src/app/components/store/store.component'
import { CartComponent } from '../../src/app/components/cart/cart.component'


const appRoutes: Routes = [
  { path: 'store',  component: StoreComponent, canActivate: [AuthGuard] },
  {
    path: 'auth',
    component: LoginComponent
  },

  {
    path: 'reset-password',
    component: ConfirmPasswordComponent,
            
  },
  {
    path: 'email/action',
    component:  ResetPasswordComponent,
      
  },
  {
    path: 'cart',
    component:  CartComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules },
     )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
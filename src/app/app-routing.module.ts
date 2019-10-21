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
  // { path: '', redirectTo: '/store', pathMatch: 'full' },
  { path: 'store',  component: StoreComponent, canActivate: [AuthGuard] },
  // { path: '', redirectTo: '/auth', pathMatch: 'full' },
  // { path: 'auth', loadChildren: './components/auth/auth.module#AuthModule' },
  // {
  //   path: 'reset-password',
  //   component: ConfirmPasswordComponent
  // },

  {
        path: 'auth',
        component: LoginComponent
  },

  // {
  //   path: 'auth',
  //   children: [
  //     {
  //       children: [
        //  { path: 'login',
        //  component: LoginComponent
        //  },
          {
            path: 'reset-password',
            component: ConfirmPasswordComponent,
            // data: { title: 'Forgot Password' }
          },
        // ]
      // },
      {
        path: 'email/action',
        component:  ResetPasswordComponent,
        // data: { title: 'Confirm Email Address' }
      },
      {
        path: 'cart',
        component:  CartComponent
        // data: { title: 'Confirm Email Address' }
      }
  //   ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules },
     )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component'
import { AuthGuard } from '../app/components/auth/auth.guard';
import { StoreEnterComponent } from './components/store/store-enter/store-enter.component'

const appRoutes: Routes = [
  { path: '', redirectTo: '/store', pathMatch: 'full' },
  { path: 'store',  component: StoreEnterComponent, canActivate: [AuthGuard] },

  {
        path: 'auth',
        component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
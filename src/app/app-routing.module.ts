import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component'
const appRoutes: Routes = [
//   { path: '', redirectTo: '/recipes', pathMatch: 'full' },
//   { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
//   {
//     path: 'shopping-list',
//     loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
//   },
//   {
//     path: 'auth',
//     loadChildren: './auth/auth.module#AuthModule'
//   }
{
        path: 'auth',
        component: LoginComponent
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
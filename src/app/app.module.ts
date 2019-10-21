import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
// import { LoginComponent } from '../app/components/auth/login/login.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './components/auth/store/auth.effects';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './components/auth/auth.module';
import { StoreComponent } from './components/store/store.component';
import { CoreModule } from './core.module';
import { ItemComponent } from './components/store/item/item.component';
import { CartComponent } from './components/cart/cart.component';
// import { ConfirmPasswordComponent } from './components/auth/confirm-password/confirm-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreComponent,
    ItemComponent,
    CartComponent

    // SwitchResetComponentsComponent,
    // ConfirmPasswordComponent
],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    SharedModule,
    FormsModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(fromApp.appReducer),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [ 
    AngularFirestore,
    AuthEffects
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

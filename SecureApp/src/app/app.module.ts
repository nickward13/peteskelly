import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GolferComponent } from './golfer/golfer.component';
import { LoginComponent } from './login/login.component';
import { LoginCallbackComponent } from './login-callback/login-callback.component';
import { LoginCallbackModule } from './login-callback/login-callback.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GolferComponent,
    LoginComponent,
    LoginCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

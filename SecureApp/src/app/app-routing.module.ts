import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GolferComponent } from './golfer/golfer.component';
import { LoginCallbackComponent } from './login-callback/login-callback.component';
import { LoginCallbackGuard } from './login-callback/login-callback.guard';
import { AuthenticatedGuard } from './services/authenticated.guard';

const routes: Routes = [  
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'golfer', component: GolferComponent},
  {path: 'id_token', component: LoginCallbackComponent, canActivate: [LoginCallbackGuard] },
  {path: 'golfer', component: GolferComponent, canActivate: [AuthenticatedGuard] },
  {path: 'id_token', component: LoginCallbackComponent, canActivate: [LoginCallbackGuard] },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

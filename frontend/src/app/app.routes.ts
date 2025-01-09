import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HelpComponent } from './components/help/help.component';
import {ProfileComponent}from './components/profile/profile.component';
import { LoginComponent } from './/login/login.component';
import { AuthGuard } from './auth.guard'; // Importă AuthGuard
import { RegisterComponent } from './register/register.component';
import { MessagesComponent } from './components/messages/messages.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard] }, // Protejează ruta home
  { path: 'about-us', component: AboutUsComponent, canActivate: [AuthGuard] },
  { path: 'help', component: HelpComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

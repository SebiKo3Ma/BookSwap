import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HelpComponent } from './components/help/help.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard'; // Importă AuthGuard

export const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard] }, // Protejează ruta home
  { path: 'about-us', component: AboutUsComponent, canActivate: [AuthGuard] },
  { path: 'help', component: HelpComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

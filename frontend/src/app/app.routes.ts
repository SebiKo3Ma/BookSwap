import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HelpComponent } from './components/help/help.component';  // Nu uita de HelpComponent

export const appRoutes: Routes = [
  { path: '', component: HomepageComponent }, 
  { path: 'about-us', component: AboutUsComponent },
  { path: 'help', component: HelpComponent },
  { path: '**', redirectTo: '' } 
]
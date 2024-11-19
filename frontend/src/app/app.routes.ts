import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HelpComponent } from './components/help/help.component';  // Nu uita de HelpComponent

export const routes: Routes = [
  { path: '', component: HomepageComponent },  // Ruta principală
  { path: 'about-us', component: AboutUsComponent },  // Ruta pentru About Us
  { path: 'help', component: HelpComponent },  // Ruta pentru Help
];

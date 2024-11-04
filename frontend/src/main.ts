import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; 
import { provideRouter } from '@angular/router';
import { HomepageComponent } from './app/components/homepage/homepage.component';
import { AboutUsComponent } from './app/components/about-us/about-us.component';


const routes = [
  { path: '', component: HomepageComponent }, 
  { path: 'about-us', component: AboutUsComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] 
}).catch(err => console.error(err));

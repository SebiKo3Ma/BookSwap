import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Asigură-te că calea este corectă
import { provideRouter } from '@angular/router';
import { HomepageComponent } from './app/components/homepage/homepage.component';

// Definirea rutei direct în main.ts
const routes = [
  { path: '', component: HomepageComponent }, // Asigură-te că ai importat HomepageComponent
  // alte rute pot fi adăugate aici
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // Folosește rutele direct
}).catch(err => console.error(err));

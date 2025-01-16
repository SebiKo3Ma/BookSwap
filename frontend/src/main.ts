import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes'; 
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule,
    provideRouter(appRoutes), 
    provideAnimationsAsync(), 
  ],
}).catch(err => console.error(err));

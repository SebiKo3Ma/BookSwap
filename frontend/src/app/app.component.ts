import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importă corect componentele
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component'; 

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header> 
    <main>  
      <router-outlet></router-outlet>
    <main>
    <app-footer></app-footer> 
    `, 
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],  // Asigură-te că le-ai adăugat aici
})
export class AppComponent {
   
}

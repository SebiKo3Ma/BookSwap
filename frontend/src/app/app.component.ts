import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { appRoutes } from './app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatCardModule,
    HeaderComponent,
    FooterComponent
  ],
})
export class AppComponent {
  constructor(private router: Router) {}

  logout() {
    console.log('User logged out');
    this.router.navigate(['/login']); // Navigare către pagina de Login
  }
}
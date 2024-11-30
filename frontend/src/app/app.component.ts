import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
    <span routerLink="/">BookSwap</span>
    </mat-toolbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer class="app-footer">
      <p>&copy; 2024 BookSwap. All rights reserved.</p>
      <div class="footer-buttons">
        <button routerLink="/about-us">About Us</button>
        <button routerLink="/help">Help</button>
      </div>
    </footer>
  `,
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet, 
    MatToolbarModule, 
    MatButtonModule, 
    MatCardModule,
    HeaderComponent,
    FooterComponent
  ],
})
export class AppComponent {}

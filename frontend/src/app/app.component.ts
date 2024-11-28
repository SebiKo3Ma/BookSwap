import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importă corect componentele
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component'; 

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>BookSwap</span>
    </mat-toolbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <mat-footer>
      <p>&copy; 2024 BookSwap. All rights reserved.</p>
    </mat-footer>
    `, 
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MatButtonModule, MatInputModule, MatToolbarModule, MatCardModule], 
})
export class AppComponent {
   
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importă RouterModule pentru routerLink
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';  // Verifică dacă calea este corectă
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule,MatButtonModule, RouterModule, MatCardModule, MatDividerModule, MatToolbarModule], // Adăugăm RouterModule
})
export class HeaderComponent {
  isAuthenticated = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, password: string) {
    if (this.authService.login(username, password)) {
      this.isAuthenticated = true;
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  }
  logout() {
    this.authService.logout(); // Apelează funcția logout din serviciul AuthService
    this.isAuthenticated = false; // Resetează starea de autentificare
    this.router.navigate(['/login']); // Redirecționează către pagina de login (opțional)
  }
  ngOnInit() {
    this.isAuthenticated = this.authService.isLoggedIn();
  }
}

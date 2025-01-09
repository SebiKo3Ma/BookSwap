import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Dacă folosești ngModel
import { CommonModule } from '@angular/common'; // Importă CommonModule
import { AuthService } from '../auth.service';  // Verifică dacă calea este corectă
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,  // Specifică că această componentă este standalone
  imports: [FormsModule, CommonModule],  // Adaugă CommonModule în imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';       // Definește username-ul
  password = '';       // Definește parola
  loginFailed = false; // Inițializează loginFailed ca false

  constructor(
    private authService: AuthService,
    private router: Router // Injectează Router pentru navigare
  ) {}
  // Funcția de login
  login() {
    const isAuthenticated = this.authService.login(this.username, this.password);
    if (isAuthenticated) {
      this.loginFailed = false;
      this.router.navigate(['/home']);
      // Poți naviga spre pagina principală sau altă pagină după logare
    } else {
      this.loginFailed = true;
    }
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}

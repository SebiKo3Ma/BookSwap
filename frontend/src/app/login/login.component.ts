import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Dacă folosești ngModel
import { CommonModule } from '@angular/common'; // Importă CommonModule

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
  
  // Funcția de login
  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      console.log('Login successful!');
      this.loginFailed = false; // Resetăm loginFailed la false la un login corect
    } else {
      console.log('Login failed!');
      this.loginFailed = true; // Setăm loginFailed la true în caz de login eșuat
    }
  }
}

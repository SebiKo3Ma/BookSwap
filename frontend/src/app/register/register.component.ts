import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  city = '';
  county = '';

  constructor(private router: Router) {}

  register() {
    // Aici salvăm datele utilizatorului - momentan le simulăm cu un log
    console.log('Datele utilizatorului:', {
      username: this.username,
      password: this.password,
      city: this.city,
      county: this.county,
    });

    // După salvare, navigăm înapoi la pagina de login
    this.router.navigate(['/login']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}

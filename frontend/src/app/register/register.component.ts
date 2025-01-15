import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule here
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  // Add HttpClientModule to imports
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  name: string = '';
  city: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const userData = {
      username: this.username,
      password: this.password,
      email: this.email,
      name: this.name,
      city: this.city,
    };

    this.http.post('/auth/register', userData).subscribe(response => {
      console.log('Registration successful', response);
      this.router.navigate(['/login']);
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  loginFailed = false;
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  login() {
    this.loading = true;

    // Send login request to the backend
    this.http.post<any>('/auth/login', {
      email: this.username,
      password: this.password
    }).subscribe(
      (response) => {
        if (response && response.access_token) {
          localStorage.setItem('authToken', response.access_token);
          this.loginFailed = false;
          this.router.navigate(['/home']);
        } else {
          this.loginFailed = true;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Login failed', error);
        this.loginFailed = true;
        this.loading = false;
      }
    );
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}

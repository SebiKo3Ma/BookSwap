import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { firstValueFrom } from 'rxjs';

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

  async login() {
    this.loading = true;
  
    try {
      const response = await firstValueFrom(this.http.post<any>('/auth/login', {
        username: this.username,
        password: this.password
      }));
  
      console.log('Login response:', response);  // Log the response for debugging
  
      const token = response?.access_token?.access_token;
  
      if (token) {
        console.log('Login successful:', response);  // Log the response for debugging
        localStorage.setItem('authToken', token);
  
        this.loginFailed = false;
  
        // Ensure the navigation occurs after the token is stored
        this.router.navigateByUrl('/home').then(() => {
          console.log('Navigation to home successful');
        }).catch(error => {
          console.error('Navigation failed', error);
        });
        
      } else {
        this.loginFailed = true;
        console.log('Login token issue:', response);
      }
    } catch (error) {
      console.error('Login failed', error);
      this.loginFailed = true;
    } finally {
      this.loading = false;
    }
  }
  
  

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}

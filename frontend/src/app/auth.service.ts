import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  // Disponibil la nivel global
})
export class AuthService {
  private isAuthenticated = false;

  constructor() { }

  login(username: string, password: string): boolean {
    // Logica de autentificare
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}

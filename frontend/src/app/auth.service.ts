import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // Check if the user is logged in based on the token in localStorage
  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token; // Return true if the token exists
  }

  // Handle logout by removing the token from localStorage
  logout(): void {
    console.log("Logging out user!");
    localStorage.removeItem('authToken');
  }

  // Optional: Add a method to decode and extract information from the token if needed
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}

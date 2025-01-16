import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomepageComponent {
  searchQuery = '';
  listings: any[] = [];
  filteredBooks: any[] = [];
  noResultsMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    await this.fetchListings();  // Fetch listings when component is initialized
  }

  // Fetch listings from the backend using firstValueFrom
  async fetchListings(): Promise<void> {
    try {
      const data = await firstValueFrom(this.http.get<any[]>('/listings'));
      this.listings = data;
      this.filteredBooks = [...this.listings];  // Set filtered books initially to all listings
    } catch (error) {
      console.error('Error fetching listings:', error);
      this.noResultsMessage = 'Eroare la încărcarea listărilor.';
    }
  }

  searchBooks(): void {
    if (this.searchQuery.trim() === '') {
      this.noResultsMessage = 'Introduceți un termen de căutare.';
      return;
    }

    const searchResults = this.filteredBooks.filter(book => 
      book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
      book.author.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    if (searchResults.length === 0) {
      this.noResultsMessage = 'Nu am găsit nici o carte.';
    } else {
      this.noResultsMessage = '';
      this.filteredBooks = searchResults;
    }
  }

  goBack(): void {
    this.searchQuery = '';  // Clear search query
    this.filteredBooks = [...this.listings];  // Reset to all listings
    this.noResultsMessage = '';  // Clear no results message
  }

  viewBookDetails(book: any): void {
    this.router.navigate(['/book-details', book.listing_id]); // Use unique ID for book
  }
}

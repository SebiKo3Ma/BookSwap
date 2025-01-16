import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importă FormsModule pentru ngModel
import { CommonModule } from '@angular/common'; // Importă CommonModule pentru directivele de bază
import { MatButtonModule } from '@angular/material/button'; // Dacă folosești butoane Material
import { MatCardModule } from '@angular/material/card'; // Dacă folosești carduri Material

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  standalone: true,
  imports: [
    FormsModule,  // Adaugă FormsModule pentru a folosi ngModel
    CommonModule, // Adaugă CommonModule pentru directivele de bază
    MatButtonModule, // Importă butoanele din Material
    MatCardModule // Importă cardurile din Material
  ]
})
export class HomepageComponent {
  searchQuery = '';
  recentBooks = [
    {
      id: 1,
      title: 'Calatorie spre centrul Pamantului',
      author: 'Jules Verne',
      location: 'Timișoara',
      description: 'O aventură fascinantă despre o călătorie spre centrul Pământului.',
      image: 'assets/images/calatorie.jpg',
      user:'Vasile',
      publisher:'Fals'
    },
    {
      id: 2,
      title: 'Moby Dick',
      author: 'Herman Melville',
      location: 'Cluj-Napoca',
      description: 'O poveste clasică despre obsesia unui căpitan de vas.',
      image: 'assets/images/moby-dick.jpg',
      user:'Veronica',
      publisher:'Fals'
    },
    // Add more books here
  ];

  filteredBooks = [...this.recentBooks];
  noResultsMessage: string = '';

  constructor(private router: Router) {} // Injectează serviciul Router

  searchBooks() {
    if (this.searchQuery.trim() === '') {
      this.noResultsMessage = 'Introduceți un termen de căutare.';
      return;
    }
  
    const searchResults = this.recentBooks.filter(book => 
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

  goBack() {
    this.searchQuery = '';  // Șterge termenul de căutare
    this.filteredBooks = [...this.recentBooks];  // Restabilește lista cu toate cărțile recente
    this.noResultsMessage = '';  // Șterge mesajul de "nu s-au găsit cărți"
  }

  viewBookDetails(book: any) {
    this.router.navigate(['/book-details', book.id]); // Folosește un ID unic pentru carte
  }
}

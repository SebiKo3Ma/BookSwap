import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Adaugă acest import pentru a folosi *ngIf și *ngFor
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user = {
    username: 'admin',
    city: 'Timișoara',
    county: 'Timiș',
  };

  userBooks = [
    {
      title: 'Calatorie spre centrul Pamantului',
      description: 'O aventură fascinantă despre o călătorie spre centrul Pământului.',
      image: 'assets/images/calatorie.jpg',
    },
    {
      title: 'Moby Dick',
      description: 'O poveste clasică despre obsesia unui căpitan de vas.',
      image: 'assets/images/moby-dick.jpg',
    },
  ];

  showAddBookForm = false;

  newBook = {
    title: '',
    author: '',
    city: '',
    county: '',
    image: '',
  };

  toggleAddBookForm() {
    this.showAddBookForm = !this.showAddBookForm;
  }

  addBook() {
    // Validăm și adăugăm cartea
    if (this.newBook.title && this.newBook.author && this.newBook.city && this.newBook.county) {
      this.userBooks.push({
        title: this.newBook.title,
        description: `O carte scrisă de ${this.newBook.author} în ${this.newBook.city}, ${this.newBook.county}.`,
        image: this.newBook.image || 'assets/images/default.jpg', // Imagine implicită dacă nu se adaugă
      });
      this.newBook = { title: '', author: '', city: '', county: '', image: '' }; // Resetăm formularul
      this.showAddBookForm = false; // Ascundem formularul
    } else {
      alert('Completează toate câmpurile obligatorii!');
    }
  }
  deleteBook(i: number) {
    // Confirmă că utilizatorul dorește să șteargă cartea
    if (confirm('Sigur vrei să ștergi această carte?')) {
      this.userBooks.splice(i, 1); // Îndepărtează cartea din lista de cărți
    }
  }
}

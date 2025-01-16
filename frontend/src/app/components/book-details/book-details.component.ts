import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  standalone: true
})
export class BookDetailsComponent implements OnInit {
  book: any;

  books = [
    {
      id: 1,
      title: 'Călătorie spre centrul Pământului',
      author: 'Jules Verne',
      location: 'Timișoara',
      description: 'O aventură fascinantă despre o călătorie spre centrul Pământului.',
      image: 'assets/images/calatorie.jpg',
      user: 'John Doe',
      publisher:'Fals'
    },
    {
      id: 2,
      title: 'Moby Dick',
      author: 'Herman Melville',
      location: 'Cluj-Napoca',
      description: 'O poveste clasică despre obsesia unui căpitan de vas.',
      image: 'assets/images/moby-dick.jpg',
      user: 'Jane Doe',
      publisher:'Fals'
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.book = this.books.find((book) => book.id === Number(id));
  }

  sendMessage() {
    this.router.navigate(['/messages'], { queryParams: { user: this.book.user } });
  }
}

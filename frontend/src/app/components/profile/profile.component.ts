import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Adaugă acest import pentru a folosi *ngIf și *ngFor


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
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
}

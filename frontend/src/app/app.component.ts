import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1> <!-- Folosește proprietatea title -->
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'BookSwap'; // Adaugă proprietatea title
}
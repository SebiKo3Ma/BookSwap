import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';  // Importă CommonModule pentru directivele de bază

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatToolbarModule],  // Adaugă CommonModule
})
export class HeaderComponent {}

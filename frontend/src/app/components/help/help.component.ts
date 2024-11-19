import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'] 
})
export class HelpComponent {
  constructor() {
    console.log('HelpComponent a fost încărcat!');
  }
}

import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class MessagesComponent {
  conversations = [
    { id: 1, name: 'John Doe', lastMessage: 'Salut! Cum e cartea?' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Mulțumesc pentru schimb!' },
    { id: 3, name: 'Michael Brown', lastMessage: 'Ne putem întâlni mâine?' },
  ];

  selectedConversation: any = null;
  newMessage = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // Verificăm dacă există query parameters în URL
    this.route.queryParams.subscribe((params) => {
      const user = params['user']; // Preia utilizatorul din query params
      if (user) {
        this.startConversation(user); // Inițiază conversația
      }
    });
  }
  selectConversation(conversation: any) {
    this.selectedConversation = {
      ...conversation,
      messages: [
        { text: 'Salut! Cum e cartea?', sender: 'John Doe' },
        { text: 'Foarte interesantă, mulțumesc!', sender: 'Eu' },
      ],
    };
  }

  sendMessage() {
    if (this.newMessage.trim() === '') return;

    this.selectedConversation.messages.push({
      text: this.newMessage,
      sender: 'Eu',
    });
    this.newMessage = '';
  }
  startConversation(user: string) {
    // Caută conversația cu utilizatorul respectiv
    const existingConversation = this.conversations.find(
      (conversation) => conversation.name === user
    );

    if (existingConversation) {
      // Selectează conversația dacă există deja
      this.selectConversation(existingConversation);
    } else {
      // Creează o conversație nouă dacă nu există
      const newConversation = {
        id: this.conversations.length + 1,
        name: user,
        lastMessage: '',
        messages: [],
      };
      this.conversations.push(newConversation);
      this.selectConversation(newConversation);
    }
  }
}

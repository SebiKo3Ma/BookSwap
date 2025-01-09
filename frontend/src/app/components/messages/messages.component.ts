import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
}

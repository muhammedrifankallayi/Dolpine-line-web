import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  formData: FormData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Here you can add your form submission logic
    // For example, send to an API or email service
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../Models/user';
@Component({
  selector: 'app-template-driven-demo1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user: User;
  constructor() {
    this.user = new User();
  }

  onSubmit(): void {
    console.log(JSON.stringify(this.user, null, 2));
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
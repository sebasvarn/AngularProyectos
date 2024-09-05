import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  user : User;

  @Output() onAddEvent = new EventEmitter<User>();

  constructor() {
    this.user = new User();
  }

  onAddUser() {
    console.log(this.user);

    this.onAddEvent.emit(this.user); 


  }

}

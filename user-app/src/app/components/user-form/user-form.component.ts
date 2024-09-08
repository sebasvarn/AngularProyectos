import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {

  @Input() user : User;
  @Output() onAddEvent: EventEmitter<User> = new EventEmitter<User>();

  constructor() {
    this.user = new User();
  }

  onAddUser(form : NgForm) {
  
    if (form.valid) {
      
    this.onAddEvent.emit(this.user);
    }
    form.reset();
    form.resetForm;
  }


}

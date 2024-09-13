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
  @Output() onOpenEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {
    this.user = new User();
  }
  
  onAddUser(form : NgForm) {
    
    if (form.valid) {
      
    this.onAddEvent.emit(this.user);
  }
  this.onOpenEvent.emit()
}
  
  onClear(form : NgForm): void{

    // this.user = new User;
    form.reset();
    form.resetForm();
  }

  onOpen() {
    this.onOpenEvent.emit();
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UserComponent,UserFormComponent],
  templateUrl: './user-app.component.html',
})
export class UserAppComponent implements OnInit {



  title : string = 'user-app';
  users : User[] = [];
  
  constructor(private service: UserService) {
  }
  ngOnInit(): void {
    this.service.findAll().subscribe(users => this.users = users);
  }

  addUser(user: User) {
    this.users = [...this.users,{... user} ];
  }
  
}

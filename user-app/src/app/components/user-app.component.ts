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
  userSelected!: User;

  constructor(private service: UserService) {
  }
  ngOnInit(): void {
    this.service.findAll().subscribe(users => this.users = users);

    this.userSelected = new User();
  }

  addUser(user: User) {
    if(user.id > 0) {
      this.users = this.users.map( u => u.id === user.id ? {...user} : u);}
    else{

      this.users = [...this.users, {...user, id: new Date().getTime()}];
    }
    this.userSelected = new User();
  }

  removeUser(id: number) {
    this.users = this.users.filter(user => user.id != id);
  }
  
  updateUser(userToUpdate: User) {
    this.userSelected = {...userToUpdate};
  }
}

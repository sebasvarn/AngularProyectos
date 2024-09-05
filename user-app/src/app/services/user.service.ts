import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private users: User[] = [{
  id: 1,
  name: 'Sebas',
  lastname: 'Vera',
  username: 'sebasvarn',
  email: 'srsebas101@gmail.com',
  password: 'password'
},
{
  id: 2,
  name: 'Ara',
  lastname: 'Genes',
  username: 'aritus',
  email: 'aritus@gmail.com',
  password: 'password'
}
];

  constructor() { }

  findAll(): Observable<User[]> {
    return of(this.users);
  }
}

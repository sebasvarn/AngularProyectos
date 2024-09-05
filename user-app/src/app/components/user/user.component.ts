import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'user',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input() users!: User[];
 }

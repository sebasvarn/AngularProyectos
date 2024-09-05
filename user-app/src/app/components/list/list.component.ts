import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input() users!: User[];
  
}

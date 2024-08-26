import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  standalone: true,
  imports: [],
  selector: 'tr[row-item]',
  templateUrl: './row-item.component.html',
  styleUrl: './row-item.component.css'
})
export class RowItemComponent {
  @Input() item!: Item;

  @Output() removeEmmiter : EventEmitter<Number> = new EventEmitter();
  remove(id : Number){
    this.removeEmmiter.emit(id)
  }

}

import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css'
})
export class FormItemComponent {
  @Output() addItem = new EventEmitter();

  private counterId = 4;
  item : any = {
    product: '',
    price: '',
    quantity: ''
  }

  submit(f : NgForm) {
    if (f.valid) {
      this.addItem.emit({id : this.counterId, ...this.item});
      this.counterId++;
  
      this.item = {
        id: this.counterId,
        product: '',
        price: '',
        quantity: ''
      }
  
      f.reset();
      f.resetForm();
    }
  }
}

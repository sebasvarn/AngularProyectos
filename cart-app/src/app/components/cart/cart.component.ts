import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'div[cart]',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  
  @Input() items !: CartItem[];
  @Output() onRemove : EventEmitter<CartItem> = new EventEmitter<CartItem>();

  removeButton(item : CartItem){
    this.onRemove.emit(item);
    if(item.quantity === 0){
      
    }
  }  

  
}

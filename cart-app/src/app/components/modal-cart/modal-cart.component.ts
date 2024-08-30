import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'modal-cart',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './modal-cart.component.html',
  styleUrl: './modal-cart.component.css'
})
export class ModalCartComponent {

  @Input() items!: CartItem[];
  @Input() total!: Number;
  @Output() onShowCart = new EventEmitter<Boolean>();
  @Output() onRemove = new EventEmitter<CartItem>();
  removeButton(item : CartItem){
    this.onRemove.emit(item);
  }

  setShowCart(){
    this.onShowCart.emit();
  }



}

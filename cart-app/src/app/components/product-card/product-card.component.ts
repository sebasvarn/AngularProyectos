import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'div[product-card]',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input () product !: Product;
  @Output() addToCart : EventEmitter<Product> = new EventEmitter<Product>();

  addButton(product : Product){
    this.addToCart.emit(product);
  }
}

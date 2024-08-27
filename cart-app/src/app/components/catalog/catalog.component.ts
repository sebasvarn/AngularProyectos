import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product';

@Component({
  selector: 'catalog',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  @Input() products !: Product[];
  @Output() addToCart : EventEmitter<Product> = new EventEmitter<Product>();

  addButton(product:Product){
    this.addToCart.emit(product);
  }


}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CatalogComponent } from '../catalog/catalog.component';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../models/cartItem';
import { NavbarComponent } from '../navbar/navbar.component';
import { ModalCartComponent } from "../modal-cart/modal-cart.component";

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogComponent, NavbarComponent, ModalCartComponent],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit{

  products !: Product[];
  items : CartItem[] = [];
  total : Number = 0;
  showCart : Boolean = false;
  
  constructor(private service :ProductService){}
  ngOnInit(): void {
    this.products = this.service.getProducts();  // Cargar productos
    this.items = this.service.getCart();         // Cargar carrito desde Session Storage
    this.totalItems();                           // Calcular el total
  }

  addButton(product : Product){
   
    this.items = this.service.addToCart(product);
    this.totalItems();

  }

  removeButton(item : CartItem){
    this.items = this.service.removeFromCart(item);
    this.totalItems();
  }

  totalItems(){
    this.total = this.service.totalFromCart();
  }

  setShowCart(){
    this.showCart = !this.showCart;
  }






  
}

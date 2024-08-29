import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { productsData } from '../data/product.data';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { 
    this.items = this.getCart();
  }

  getProducts() : Product[] {
    const total = this.totalFromCart();
    return productsData;
  }

  items : CartItem[] = [];

  addToCart(product : Product ) : CartItem[] {
    const hasItem = this.items.find(item => {
      return item.product.id === product.id
    });
    if(hasItem){
      hasItem.quantity++;
    }
    else{
      this.items = [... this.items, { product:{ ...product} , quantity: 1 }];
    }
    this.saveSessionCart();
    return this.items;
  }

  removeFromCart(itemRemove: CartItem): CartItem[] {
    if (itemRemove.quantity > 1) {
      itemRemove.quantity--;
    } else {
      this.items = this.items.filter(item => item.product.id !== itemRemove.product.id); // Asegúrate de crear un nuevo array
    }
    this.saveSessionCart(); // Actualiza el Session Storage
    return [...this.items]; // Devuelve una nueva referencia del array
  }
  

  totalFromCart() : number{
    return this.items.reduce((total, item) => total + item.product.price *item.quantity,0)
  }

  saveSessionCart(){
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

  getCart() : CartItem[]{
    return JSON.parse(sessionStorage.getItem('cart') || '[]');
  }

}

  




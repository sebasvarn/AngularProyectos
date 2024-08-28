import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { productsData } from '../data/product.data';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

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
    return this.items;
  }

  removeFromCart(itemRemove: CartItem) : CartItem[]{
    if(itemRemove.quantity > 1){
      itemRemove.quantity--;
      
    }else{
      this.items = this.items.filter(item => item !== itemRemove);
    }
    return this.items;
  }

  totalFromCart() : number{
    return this.items.reduce((total, item) => total + item.product.price *item.quantity,0)
  }


}

  




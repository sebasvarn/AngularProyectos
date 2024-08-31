import { EventEmitter, Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _itemRemoveEvent = new EventEmitter<CartItem>(); // Evento que se dispara cuando se elimina un item del carrito
  private _AddToCartEvent = new EventEmitter<Product>(); // Evento que se dispara cuando se agrega un item al carrito
  constructor() { }

  get itemRemoveEvent(): EventEmitter<CartItem> {
    return this._itemRemoveEvent;
  }

  get addToCartEvent() : EventEmitter<Product> {
    return this._AddToCartEvent;
  }
}

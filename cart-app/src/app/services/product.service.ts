import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { productsData } from '../data/product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  getProducts() : Product[] {

    return productsData;
  }
}

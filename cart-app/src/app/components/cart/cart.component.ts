import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cartItem';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'div[cart]',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent   {
  
  items !: CartItem[];
  
  total : Number = 0;
  
  
  constructor(private sharingDataService: SharingDataService,private router: Router) {
    this.items = this.router.getCurrentNavigation()?.extras?.state?.['items'] || [];
    this.total = this.router.getCurrentNavigation()?.extras?.state?.['total'] || 0;
  }

  removeButton(item : CartItem){


    this.sharingDataService.itemRemoveEvent.emit(item);

  }  

  
  
  
  
  
}

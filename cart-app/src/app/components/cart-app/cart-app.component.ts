import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cartItem';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit, OnDestroy {

  products!: Product[];
  items: CartItem[] = [];
  total: number = 0;
  private subscriptions: Subscription = new Subscription();

  constructor(private service: ProductService, private sharingDataService: SharingDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.service.getProducts(); // Load products
    this.items = this.service.getCart();        // Load cart from Session Storage
    this.calculateTotal();                      // Calculate initial total

    this.subscribeToEvents();
  }

  private subscribeToEvents(): void {
    // Subscribe to addToCart event
    const addSub = this.sharingDataService.addToCartEvent.subscribe(product => {
      this.items = this.service.addToCart(product);
      this.calculateTotal(); // Update total after adding

      // this.router.navigate(['/cart'], { state: { items: this.items, total: this.total } });
      
    });

    // Subscribe to itemRemove event
    const removeSub = this.sharingDataService.itemRemoveEvent.subscribe(item => {
      this.items = this.service.removeFromCart(item);
      this.calculateTotal(); // Update total after removing

      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/cart'], { state: { items: this.items, total: this.total } });
      })
      
    });

    // Add subscriptions to the list for cleanup
    this.subscriptions.add(addSub);
    this.subscriptions.add(removeSub);
  }

  calculateTotal(): void {
    this.total = this.service.totalFromCart(); // Use service method to calculate total
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to prevent memory leaks
    this.subscriptions.unsubscribe();
  }
}

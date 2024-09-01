import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cartItem';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit, OnDestroy {

  // products!: Product[];
  items: CartItem[] = [];
  total: number = 0;
  private subscriptions: Subscription = new Subscription();

  constructor(private service: ProductService, private sharingDataService: SharingDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.products = this.service.getProducts(); // Load products
    this.items = this.service.getCart();        // Load cart from Session Storage
    this.calculateTotal();                      // Calculate initial total

    this.subscribeToEvents();
  }

  private subscribeToEvents(): void {
    // Subscribe to addToCart event
    const addSub = this.sharingDataService.addToCartEvent.subscribe(product => {
      this.items = this.service.addToCart(product);
      this.calculateTotal(); // Update total after adding
      Swal.fire('Added to cart', `Added ${product.name} to cart`, 'success');
      // this.router.navigate(['/cart'], { state: { items: this.items, total: this.total } });
      
    });

    // Subscribe to itemRemove event
    const removeSub = this.sharingDataService.itemRemoveEvent.subscribe(item => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.items = this.service.removeFromCart(item);
          this.calculateTotal(); // Update total after removing
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/cart'], { state: { items: this.items, total: this.total } });
        });
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }

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

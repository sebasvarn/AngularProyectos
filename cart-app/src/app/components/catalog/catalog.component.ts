import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product';
import { SharingDataService } from '../../services/sharing-data.service';
import { Router} from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'catalog',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit{
  products !: Product[];
  


  constructor(private sharingDataService: SharingDataService, private router: Router
    ,private productService: ProductService
  ) {
    this.products =  this.router.getCurrentNavigation()?.extras?.state?.['products'] || [];
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addButton(product:Product){
    this.sharingDataService.addToCartEvent.emit(product);
  }


}

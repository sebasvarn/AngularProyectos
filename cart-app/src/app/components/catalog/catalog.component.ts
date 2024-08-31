import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product';
import { SharingDataService } from '../../services/sharing-data.service';
import { Router} from '@angular/router';

@Component({
  selector: 'catalog',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  products !: Product[];
  


  constructor(private sharingDataService: SharingDataService, private router: Router) {
    this.products =  this.router.getCurrentNavigation()?.extras?.state?.['products'] || [];
  }

  addButton(product:Product){
    this.sharingDataService.addToCartEvent.emit(product);
  }


}

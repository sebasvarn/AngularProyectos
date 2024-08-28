import { Component, Input } from '@angular/core';

@Component({
  selector: 'total-cart',
  standalone: true,
  imports: [],
  templateUrl: './total-cart.component.html',
  styleUrl: './total-cart.component.css'
})
export class TotalCartComponent {

  @Input() total !:Number;
}

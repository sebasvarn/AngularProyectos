import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showCart : Boolean = false;

  @Input() items: any[] = [];
  @Output() onShowCart : EventEmitter<boolean> = new EventEmitter<boolean>
  
  setShowCart() {
  
    this.showCart = !this.showCart
  }

}

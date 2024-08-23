import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'invoice-view',
  standalone: true,
  imports: [],
  templateUrl: './invoice-view.component.html',
  styleUrl: './invoice-view.component.css'
})
export class InvoiceViewComponent {
  @Input() name !: string;
  @Input() id !: Number;
}

import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent,ClientViewComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {

  invoice !: Invoice;

  constructor(private invoiceservice:InvoiceService){}
  ngOnInit(): void {
    this.invoice = this.invoiceservice.getInvoice();
  }
}

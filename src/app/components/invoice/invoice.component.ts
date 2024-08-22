import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
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

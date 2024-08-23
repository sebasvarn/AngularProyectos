import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';
@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    InvoiceViewComponent,
    ClientViewComponent,
    ListItemsComponent,
    CompanyViewComponent,
    TotalComponent,
    FormItemComponent
  ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(private invoiceservice: InvoiceService) {}
  ngOnInit(): void {
    this.invoice = this.invoiceservice.getInvoice();
    
  }

  remove(id : Number){
    console.log(id)
    this.invoice = this.invoiceservice.remove(id);
  }

  add(item : Item){
    this.invoice = this.invoiceservice.save(item);
  }



}

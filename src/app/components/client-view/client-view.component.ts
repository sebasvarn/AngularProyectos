import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Client } from '../../models/client';
@Component({
  selector: 'client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {

  @Input() client !: Client;

}

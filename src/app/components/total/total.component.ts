import { Component , Input} from '@angular/core';

@Component({
  selector: 'total',
  standalone: true,
  imports: [],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent {

  @Input() total!: number;

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import Swal from 'sweetalert2';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
})
export class AuthComponent {

  user: User; 
  
  constructor(private sharingData: SharingDataService) {
    
    
    this.user = new User();
  }

  onSubmit(): void {
    if (!this.user.username || !this.user.password) {
      Swal.fire({
        
        icon: 'error',
        title: 'Error',
        text: 'Debes rellenar todos los campos',
        showConfirmButton: false,
        timer: 1500

      })
    } else {
      this.sharingData.handleLoginEventEmitter.emit({
        username: this.user.username,
        password: this.user.password
      });
    }
  }

}

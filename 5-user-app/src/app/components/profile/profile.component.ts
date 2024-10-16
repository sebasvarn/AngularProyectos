import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  user !: User;
  file !: File;
  title : String = "Profile details";
  login = this.authService.user;

  url = 'http://localhost:8080/api/users/upload/img/';
  constructor(private http: HttpClient, private route: ActivatedRoute , private service: UserService, private sharingData: SharingDataService, private authService: AuthService) {
   }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +(params.get('id') || '0');
      if (id > 0) {
        this.service.findById(id).subscribe(user => {
          this.user = user;
        });
      }
    });
  }

  
  
  

  selectPhoto(event: any) {
    this.file = event.target.files[0] ;
    console.log(this.file);
  }

  uploadPhoto() {
    this.service.uploadPhoto(this.user.id, this.file).subscribe({ 
        next: user => {
          this.user = user;
          console.log(this.user.photo);      
          Swal.fire({
              title: "Actualizado!",
              text: "Imagen actualizada con exito!",
              icon: "success"
          });
        }, 
        error: err => {
           Swal.fire({
               title: "Error!",
               text: "No se pudo actualizar la imagen!",
               icon: "error"
           })
        }
    })
    }
}
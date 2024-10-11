import { Component, EventEmitter, OnInit} from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SharingDataService } from '../../services/sharing-data.service';
import { PaginatorComponent } from '../paginator/paginator.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'user',
  standalone: true,
  imports: [RouterModule, PaginatorComponent],
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  title: string = 'Listado de usuarios!';
  
  users: User[] = [];
  paginator: any = {};
  url: string = '/users/page';

  constructor(
    private service: UserService,
    private sharingData: SharingDataService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.users = this.router.getCurrentNavigation()?.extras.state!['users'];
        this.paginator = this.router.getCurrentNavigation()?.extras.state!['paginator'];
      }
    }
    
  ngOnInit(): void {
    if(this.users.length == 0 || this.users == undefined || this.users == null){
      // this.service.findAll().subscribe(users => this.users = users);
      this.route.paramMap.subscribe(params => {
        
        const page: number = +(params.get('page') || '0');
        console.log(page);
        this.service.findAllPageable(page).subscribe(users => {
          this.users = users.content as User[];
          this.paginator = users;
          this.sharingData.pageUsersEventEmitter.emit({
            users: this.users,
            paginator: this.paginator});   
        });
            
      })
    }
    
  }
  
  onRemoveUser(id: number): void {
    this.sharingData.idUserEventEmitter.emit(id);
  }

  onSelectedUser(user: User): void {
    this.router.navigate(['/users/edit', user.id]);
  }

  onProfile(user: User): void {
    this.router.navigate(['users/profile', user.id]);
  }

  get admin(): boolean {
    return this.authService.isAdmin(); 
  }

}

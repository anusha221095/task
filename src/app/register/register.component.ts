import { Component, OnInit } from '@angular/core';
import { UserListService} from '../service/user-list.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data: any;

  constructor(private userListService:UserListService) { }

  ngOnInit(): void {
  }

  onSubmit(event:any): void {
    this.data = this.userListService.saveData(event.value);
    
  }  
}

import { UserListService } from './../service/user-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList = [];
  userLists!: string | null;

  constructor(private userListService:UserListService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers() {
    console.log(this.userLists);
    
    this.userLists=this.userListService.getData();
  }

}

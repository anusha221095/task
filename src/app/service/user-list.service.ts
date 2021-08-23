import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  userList: any;

  constructor() { }

  getData() {
    
    console.log(this.userList);
    return localStorage.getItem('userlist')
  }

  saveData(data:any) {
    console.log(data);
    localStorage.setItem("userlist", JSON.stringify(data));
    this.userList = data;
   }


}

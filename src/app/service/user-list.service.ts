import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  userLists: any;

  constructor() { }

  getData() {
    
    console.log(this.userLists);
    return localStorage.getItem('userlist')
  }

  saveData(data:any) {
    console.log(data);
    localStorage.setItem("userlist", JSON.stringify(data));
    this.userLists = data;
   }


}

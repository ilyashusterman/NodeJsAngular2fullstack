import { Component, OnInit } from '@angular/core';
import {User} from "../../login/User";
import {UserService} from "./user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[] ;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .then(users => this.users = users);
  }

  deleteUser(id: number, event:any){
     event.stopPropagation();
    this.userService.deleteUser(id);
    console.log("delete User: "+ id);

  }
  editUser(id: number, event:any){
  // event.stopPropagation();
  console.log("edit User: "+ id);

}


}

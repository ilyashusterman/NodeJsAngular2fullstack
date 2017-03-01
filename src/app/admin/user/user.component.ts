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
  console.log('users='+this.users);
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .then(users => this.users = users);
  }
}

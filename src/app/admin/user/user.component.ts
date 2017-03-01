import { Component, OnInit } from '@angular/core';
import {User} from "../../login/User";
import {UserService} from "./user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : Promise<User[]> ;


  constructor(private userService : UserService) { }

  ngOnInit() {
  this.users = this.userService.getUsers();
  console.log('users='+this.users);
  }

}

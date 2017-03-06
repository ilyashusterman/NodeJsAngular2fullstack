import { Component, OnInit } from '@angular/core';
import {User} from "../../login/User";
import {UserService} from "./user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[];
  user : User;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .then(users => this.users = users);
  }

  setUserPermission(user: User, permission: string, event:any){
    if(!this.getUserPermission(user.permissions, permission)){
      user.permissions.push(permission);
    }
    console.log('user.permission='+user.permissions);
    this.editUser(user, event);
  }

  getUserPermission(permissions : string [], auth :string): boolean{
    return permissions.indexOf(auth) > -1;
  }

  deleteUser(id: number, event:any){
    this.userService.deleteUser(id).then(
    );
    location.reload();
  }

  editUser(user: User, event:any){
    this.userService.updateUser(user).then();
  }


}

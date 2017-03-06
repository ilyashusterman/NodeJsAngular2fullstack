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

  getUserPermission(permissions : string [], auth :string): boolean{
    return permissions.indexOf(auth) > -1;
  }

  setUserPermission(user: User, permission: string, event:any){
    const permissions = new Set(user.permissions);
    if(!this.getUserPermission(user.permissions, permission)){
      permissions.add(permission);
    }
    else {
      permissions.delete(permission);
    }
    user.permissions = Array.from(permissions);
    this.editUser(user, event);
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

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

  // setUserPermission(permissions:string [], auth:string):boolean{
  //   if(permissions.indexOf(auth)>-1)
  //   return
  // }
  deleteUser(id: number, event:any){
     //event.stopPropagation();
    this.userService.deleteUser(id).then(
    );
    location.reload();
    console.log("delete User: "+ id);

  }
  editUser(user: User, event:any){
    //event.stopPropagation();
    console.log("Before edit user "+user);
    this.userService.updateUser(user).then();
    // location.reload();
    console.log("After edit user "+ user);
  }


}

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

  deleteUser(id: number, event:any){
     //event.stopPropagation();
    this.userService.deleteUser(id).then(
      //TODO modal deleted successfully
    );
    location.reload();
    console.log("delete User: "+ id);

  }
  editUser(user: User, event:any){
    //event.stopPropagation();
    this.userService.editUser(user).then(

    );
    location.reload();
    console.log("edit User: "+ user);

  }


}

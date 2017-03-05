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

  flagAdmin:boolean = false;
  flagQa:boolean = false;
  flagScripts:boolean = false;
  flagStatistic:boolean = false;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getUsers();
    this.getflags();
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .then(users => this.users = users);
  }

  deleteUser(id: number, event:any){
     //event.stopPropagation();
    this.userService.deleteUser(id).then(
    );
    location.reload();
    console.log("delete User: "+ id);

  }
  editUser(user: User, event:any){
    //event.stopPropagation();
    this.userService.editUser(user).then();
    // location.reload();
    console.log("edit User: "+ user);

  }


  private getflags() {
    for(let i=0;i<this.user.permissions.length;i++){
      if(this.user.permissions[i]==="admin")this.flagAdmin=true;
      else if(this.user.permissions[i]==="qa")this.flagQa=true;
      else if(this.user.permissions[i]==="statistic")this.flagStatistic=true;
      else if(this.user.permissions[i]==="scripts")this.flagScripts=true;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {User} from './User';
import axios from 'axios';
import { Http, Headers, Response } from '@angular/http';
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  // ngOnInit() {
  // }
/////////// past code////
  // setlogin(){
  //   this.authService.setLogin();
  //   // Redirect the user
  //   let redirect = '/dashboard';
  //   this.router.navigate([redirect]);
  // }
  // setAdminPermission(){
  //   this.authService.setAdminPermission();
  // }
//////////////new code ////

  isChecked:boolean = false;
  errorMessage:string ='Login Failed';
  loginApproved: boolean = false;
  loading: boolean = false;
  debugWindow: boolean = false;
  isLoggedIn:boolean = false;
  errorFlag: boolean = false;
  users : User[];
  user= new User();

  login(event: any,user: User) {
    this.loading=true;
    event.preventDefault();
    let body = JSON.stringify(user);
    console.log("body:"+body);
    if(this.isChecked){
      localStorage.setItem("user", body);
    }
    axios.post('/users', {
      username: user.email,
      password: user.password
    })
      .then(function (response) {
     let  newUser = new User();
        newUser.email = user.email;
          this.authService.setLogin(newUser);
          let redirect = '/dashboard';
          this.router.navigate([redirect]);
      })
      .catch(function (error) {
       let message = error.response.data;
       this.setErrorMessage(message);
      });
    //TODO axios code revoke http request to backend check if user authenticated
    if(this.checkUsers(user)){
      let logged = JSON.stringify(true);
      localStorage.setItem("isLoggedIn", logged);
    }

  }

  checkUsers(user: User) {
    let index = 0;
    for (index = 0; index < this.users.length; ++index) {
      console.log(this.users[index]);
      if(user.email==this.users[index].email&& user.password==this.users[index].password){return true;}
    }
    return false;
  }

  setLogin(){
    this.isLoggedIn = true;
  }
  setLogout(){
    this.isLoggedIn = false;
  }
  setChecked(){
    this.isChecked= true;
  }
  setErrorMessage(message :string){
    this.errorMessage=message;
  }


  getUsers(): void {
   // this.loginService.getUsers().then(users => this.users = users);
  }
  ngOnInit(): void {
    this.getUsers();
    let newUser = localStorage.getItem("user");
    let newIsLoggedIn = localStorage.getItem("isLoggedIn");
    if(newUser){
      this.user=JSON.parse(newUser);
    }
    console.log(newIsLoggedIn);
    if(newIsLoggedIn){
      this.isLoggedIn =JSON.parse(newIsLoggedIn);
      console.log("User Checke"+this.isLoggedIn);
    }

  }
  getErrorMessage(message) : void{
    //TODO give div with error message
  }
//   get diagnostic() { return this.user.toString(); }
//
//
// }


}

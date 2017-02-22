import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {User} from './User';
import axios from 'axios';  // better then jquery
import { Http, Headers, Response } from '@angular/http';
import {forEach} from "@angular/router/src/utils/collection";
import {assetUrl} from "@angular/compiler/src/identifiers";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

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
   // console.log("body:"+body);
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
       let message = JSON.stringify(error.message);
      //  console.log(message);
         this.setErrorMessage(message);
      });
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
  setErrorMessage(message: String){
   console.log(message);
  }

  ngOnInit(): void {
    // let newUser = localStorage.getItem("user");
    // let newIsLoggedIn = localStorage.getItem("isLoggedIn");
    // if(newUser){
    //   this.user=JSON.parse(newUser);
    // }
    // console.log(newIsLoggedIn);
    // if(newIsLoggedIn){
    //   this.isLoggedIn =JSON.parse(newIsLoggedIn);
    //   console.log("User Checke"+this.isLoggedIn);
    // }
    //TODO checks if the user session is already logged in
  }



}

import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {User} from './User';
import axios from 'axios';
import { Http, Headers, Response } from '@angular/http';
import {forEach} from "@angular/router/src/utils/collection";
import {Observable} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  isChecked:boolean = false;
  errorMessage:string ='Login Failed ';
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
    //gives the LoginComponent class instance for use in inner-scope
    let self = this;

    axios.post('/login', {
      username: user.email,
      password: user.password
    })
      .then(function (response) {
     // let newUser = new User();
        let hashUser = JSON.stringify(response.data);
        var userObj = JSON.parse( hashUser );
        console.log('token user '+userObj.token);
        // newUser.email = user.hash;
          self.authService.setLogin(hashUser, userObj.token);
          let redirect = '/dashboard';
          self.router.navigate([redirect]);
      })
      .catch(function (error) {
       let message = { errorMessage: error.response.data };
         console.log(message.errorMessage);
        let msg = message.errorMessage +' ' ;
        //uses the logincomponent instance in this scope
         self.setErrorMessage(msg);
        //this.handleError(error);
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
  setErrorMessage(message :string){
    this.errorMessage=message;
  }
  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    this.setErrorMessage('Authentucation error '+error.statusText)
    return Observable.throw(error.json().error || 'Server error');
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

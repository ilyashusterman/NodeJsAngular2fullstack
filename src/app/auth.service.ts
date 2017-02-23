/**
 * Created by ilya on 03/02/2017.
 */
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {User} from "./login/User";

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  public setLogin(user, token){
    localStorage.setItem("token",token);
    localStorage.setItem("user",user);
  }

  public login(): boolean {
  //  Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    let logged = localStorage.getItem("token");
    console.log("login logged="+logged);
    return this.checkTokenSession(logged);

  }

  private checkTokenSession(logged: string): boolean {
    //TODO make call to backend to findout hashtoken
    var valid = false;
    axios.post('/validate', {
      token: logged
    })
      .then(function (response) {
        console.log('response is good '+response.data);
        valid = true;
      })
      .catch(function (error) {
        console.log('error is '+error);
    valid = false;
      });
    return valid;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
  public setAdminPermission(){
    Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    this.isLoggedIn = true;
    localStorage.setItem("admin",JSON.stringify(true));
    let logged = localStorage.getItem("admin");
    console.log("setAdminPermission admin="+logged);
  }
  public adminPermission() {
    let adminLogged = localStorage.getItem("admin");
    console.log("adminPermission admin="+adminLogged );
    return JSON.parse(adminLogged);
  }
  public setScriptsPermission(){
    Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    this.isLoggedIn = true;
    localStorage.setItem("scripts",JSON.stringify(true));
    let logged = localStorage.getItem("scripts");
    console.log("setScriptsPermission scripts="+logged);
  }
  public scriptsPermission() {
    let scriptsLogged = localStorage.getItem("scripts");
    console.log("scriptsPermission script="+scriptsLogged );
    return JSON.parse(scriptsLogged);
  }

  setLogout() {
    //TODO sends a backend request to logout from session
    localStorage.clear();
  }
}


/**
 * Created by ilya on 03/02/2017.
 */
import { Injectable } from '@angular/core';

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

  public setLogin(user :User){
   // Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    this.isLoggedIn = true;
    localStorage.setItem("logged",JSON.stringify(this.isLoggedIn));
    localStorage.setItem("user",JSON.stringify(user));
    let logged = localStorage.getItem("logged");
    console.log("setLogin logged="+logged);
  }
  public login(): boolean {
  //  Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    let logged = localStorage.getItem("logged");
    console.log("login logged="+logged);
    return JSON.parse(logged);

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


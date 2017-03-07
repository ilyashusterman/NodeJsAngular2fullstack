/**
 * Created by ilya on 03/02/2017.
 */
import { Injectable } from '@angular/core';
import axios from 'axios';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/trow';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import {User} from "./login/User";

@Injectable()
export class AuthService {
 /// isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  public setLogin(user) {
    localStorage.setItem("user",user);
  }

  public login(): Promise<boolean> | Observable<boolean> | boolean {
    let user = localStorage.getItem("user");
    if(user)
    {
      let hash = JSON.parse(localStorage.getItem("user")).token;
      if(hash) {
        return this.checkTokenSession(hash);
      }
      return false;
    }
    return false;
  }

  private checkTokenSession(logged: string):Promise<boolean> | Observable<boolean> | boolean {
    let self = this;
    // make call to backend to findout hashtoken

    let valid = false;
    let isvalid;

    isvalid = axios.post('/validate', {
      token: logged
    })
      .then(function (response) {
        //console.log('response is good '+response.data);
         valid = true;
        return new Promise<boolean>((resolve, reject) => {
          resolve(true);

        });
        //console.log('response is valid '+self.isLoggedIn);
       // return true;
      })
      .catch(function (error) {
        console.log('error is '+error);
        valid = false;
        return new Promise<boolean>((resolve, reject) => {
          resolve(false);
        });
       // return false;
      });
    return isvalid;
   // return Observable.of(true).delay(1000).do(val => valid);
  }

  private checkUserPermission(permission: string): Observable<boolean> | boolean  | Promise<boolean>{
    // make call to backend to findout permission
    let self = this;
    let valid = false;
    let isvalid;

    isvalid = axios.post('/validate/permission', {
      permission: permission
    })
      .then(function (response) {
       // console.log('response is good '+response.data);
        valid = true;
        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
      })
      .catch(function (error) {
        console.log('error is '+error);
        valid = false;
        return new Promise<boolean>((resolve, reject) => {
          resolve(false);
        });
      });
    return isvalid;
    //return Observable.of().delay(1000).do(val => self.isLoggedIn = valid);
  }

  public getPermission(permission: string) : Observable<boolean> | boolean |Promise<boolean>{
    return this.checkUserPermission(permission);
  }

  setLogout() {
    // sends a backend request to logout from session
    let self = this;
    let valid = false;
    let isvalid;
    let user = localStorage.getItem("user");
    if (user) {
      let hash = JSON.parse(localStorage.getItem("user")).token;
      if (hash) {
        axios.post('/logout', {
          token: hash
        })
          .then(function (response) {
            //console.log('response is good ' + response.data);
            valid = true;
            return new Promise<boolean>((resolve, reject) => {
              resolve(true);
            });
          })
          .catch(function (error) {
            console.log('error is ' + error);
            valid = false;
            return new Promise<boolean>((resolve, reject) => {
              resolve(false);
            });
          });
      }
    }
        localStorage.clear();
  }

}


/**
 * Created by ilya on 01/03/2017.
 */
import { Injectable } from '@angular/core';
import {User} from "../../login/User";
import {Http,Headers, Response} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable"

@Injectable()
export class UserService {
  private usersUrl = '/users';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  public getUsers(): Promise<User[]> {
    //TODO fix here ! to get the right data
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(this.extractUsers)
      // .then(response => response.json().data as User[])
      .catch(this.handleError);
  }

  private extractUsers(response: Response) {
    let res = response.json();
    let users: User[] = [];
    for (let i = 0; i < res.length; i++) {
      users.push(new User(res[i].id, res[i].username, res[i].password,res[i].permissions));
    }
    return users;
  };

  private handleError(error: any): any{
    let message = "";

    if (error instanceof Response) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.log("!!!!!!ERROR!!!!!!!!"+message);

    return Observable.throw(message);
  }

  update(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }
}

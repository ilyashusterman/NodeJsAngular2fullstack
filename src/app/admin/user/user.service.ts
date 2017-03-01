/**
 * Created by ilya on 01/03/2017.
 */
import { Injectable } from '@angular/core';
import {User} from "../../login/User";
import {Http, Headers} from "@angular/http";


@Injectable()
export class UserService {
  private usersUrl = 'users';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    //TODO real error displaying for user
    return Promise.reject(error.message || error);
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

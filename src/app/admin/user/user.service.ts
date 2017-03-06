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
  private usersUrl = '/users';
  private userUrl='/user';

  constructor(private http: Http) { }

  public getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(this.extractUsers)
      .catch(this.handleError);
  }

  private extractUsers(response: Response) {
    let res = response.json();
    let users: User[] = [];
    for (let i = 0; i < res.length; i++) {
      users.push(new User(res[i]._id,res[i].name, res[i].username,
        res[i].password,res[i].permissions));
    }
    return users;
  };

  public getUser(id: string): Promise<User> {
    let user = this.http.get(this.userUrl + "/" + id)
      .toPromise()
      .then(this.extractUser)
      .catch(this.handleError);
    return user;
  }

  private extractUser(response: Response) {
    let res = response.json();
    let user = new User(res.id, res.name, res.username,res.password,res.permissions);
    return user;
  }

  private handleError(error: any): any{
    let message = "";

    if (error instanceof Response) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`
    } else {
      message = error.message ? error.message : error.toString();
    }
    return Observable.throw(message);
  }

  public updateUser(user: User) {
    return this.http.put(this.userUrl + "/" + user.id, user)
      .toPromise()
      .catch(this.handleError);
  }

  deleteUser(id: number){
    let url = `${this.userUrl}/${id}`;
    return this.http
      .delete(url)
      .toPromise()
      .catch(this.handleError);
  }


  createUser(user: User) {
    return this.http.post(this.usersUrl, user)
      .toPromise()
      .catch(this.handleError);
  }
}

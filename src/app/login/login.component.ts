import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  setlogin(){
    this.authService.setLogin();
    // Redirect the user
    let redirect = '/dashboard';
    this.router.navigate([redirect]);
  }
  setAdminPermission(){
    this.authService.setAdminPermission();
  }

}

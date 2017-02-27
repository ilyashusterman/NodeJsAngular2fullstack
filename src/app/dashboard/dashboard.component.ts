import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }
  setLogout(){
    this.authService.setLogout();
    let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';
    console.log("redirect="+redirect);
    this.router.navigate([redirect]);
  }
}

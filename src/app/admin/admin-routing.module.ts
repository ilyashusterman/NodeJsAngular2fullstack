import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminGuard} from "./admin-guard.service";
import {AuthService} from "../auth.service";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
    // canActivate: [AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class AdminRoutingModule { }

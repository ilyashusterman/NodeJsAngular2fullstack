import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminGuard} from "./admin-guard.service";
import {AuthService} from "../auth.service";
import {UserComponent} from "./user/user.component";
import {IssueComponent} from "./issue/issue.component";
import {AgentsComponent} from "./agents/agents.component";

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
    // canActivate: [AdminGuard]
  },
  {
    path:'issue',
    component:IssueComponent
  },
  {
    path:'agents',
    component:AgentsComponent
  },
  {
    path:'check_list',
    component:AgentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {DashboardListComponent} from "../dashboard-list/dashboard-list.component";
import {DashboardhomeComponent} from "../dashboardhome/dashboardhome.component";
import {AdminComponent} from "../admin/admin.component";
import {ScriptsComponent} from "../scripts/scripts.component";
import {AdminGuard} from "../admin/admin-guard.service";
import {AuthService} from "../auth.service";
import {UserComponent} from "../admin/user/user.component";
import {IssueComponent} from "../admin/issue/issue.component";
import {AgentsComponent} from "../admin/agents/agents.component";
import {CheckListComponent} from "../admin/check-list/check-list.component";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardListComponent,
    DashboardhomeComponent,
    AdminComponent,
    CheckListComponent,
    IssueComponent,
    AgentsComponent,
    UserComponent,
    ScriptsComponent
  ]
})
export class DashboardModule { }

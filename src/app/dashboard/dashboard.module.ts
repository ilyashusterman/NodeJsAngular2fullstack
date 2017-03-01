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
import {QaComponent} from "../qa/qa.component";
import {StatisticComponent} from "../statistic/statistic.component";
import {DepartmentComponent} from "../admin/department/department.component";
import {TeamComponent} from "../admin/team/team.component";

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
    QaComponent,
    StatisticComponent,
    CheckListComponent,
    DepartmentComponent,
    TeamComponent,
    IssueComponent,
    AgentsComponent,
    UserComponent,
    ScriptsComponent
  ]
})
export class DashboardModule { }

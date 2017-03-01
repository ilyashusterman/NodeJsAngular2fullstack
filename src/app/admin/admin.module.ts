import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { IssueComponent } from './issue/issue.component';
import { AgentsComponent } from './agents/agents.component';
import { CheckListComponent } from './check-list/check-list.component';
import { DepartmentComponent } from './department/department.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, UserComponent, IssueComponent, AgentsComponent, CheckListComponent, DepartmentComponent, TeamComponent]
})
export class AdminModule { }

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
    ScriptsComponent
  ]
})
export class DashboardModule { }

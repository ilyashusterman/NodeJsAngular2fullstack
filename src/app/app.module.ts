import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import { NotfoundComponent } from './notfound/notfound.component';
import {AppRoutingModule} from "./app-routing.module";
import {LoginRoutingModule} from "./login/login-routing.module";
import {DashboardRoutingModule} from "./dashboard/dashboard-routing.module";
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import {DashboardModule} from "./dashboard/dashboard.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminComponent} from "./admin/admin.component";
import {ScriptsComponent} from "./scripts/scripts.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent
    // DashboardListComponent,
    // DashboardhomeComponent,
    // AdminComponent,
    // ScriptsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

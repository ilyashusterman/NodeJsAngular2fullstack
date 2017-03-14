import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import { NotfoundComponent } from './notfound/notfound.component';
import {AppRoutingModule} from "./app-routing.module";
import {LoginRoutingModule} from "./login/login-routing.module";
import { QaComponent } from './qa/qa.component';
import { StatisticComponent } from './statistic/statistic.component';
import {HttpModule} from "@angular/http";
import {UserService} from "./admin/user/user.service";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LoginRoutingModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

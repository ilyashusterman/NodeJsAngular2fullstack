import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthService} from "../auth.service";
import {StatisticGuard} from "./statistic-guard.service";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    StatisticGuard,
    AuthService
  ]
})

export class StatisticRoutingModule { }

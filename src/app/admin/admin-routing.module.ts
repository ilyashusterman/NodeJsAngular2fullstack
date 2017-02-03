import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminGuard} from "./admin-guard.service";
import {AuthService} from "../auth.service";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AdminGuard,
    AuthService
  ]
})
export class AdminRoutingModule { }

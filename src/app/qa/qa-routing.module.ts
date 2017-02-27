/**
 * Created by Radu on 2/27/2017.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthService} from "../auth.service";
import {QaGuard} from "./qa-guard.service";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    QaGuard,
    AuthService
  ]
})
export class ScriptsRoutingModule { }

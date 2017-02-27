import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthService} from "../auth.service";
import {ScriptsGuard} from "./scripts-guard.service";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ScriptsGuard,
    AuthService
  ]
})

export class ScriptsRoutingModule { }

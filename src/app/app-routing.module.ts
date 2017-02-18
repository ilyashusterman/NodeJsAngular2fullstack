/**
 * Created by ilya on 02/02/2017.
 */
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {AuthGuard} from "./auth-guard.service";

const appRoutes: Routes = [
  { path: '', component: LoginComponent }
  ,
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
    data: { preload: true },
    canActivateChild: [AuthGuard]
  },
  { path: '**', component: NotfoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

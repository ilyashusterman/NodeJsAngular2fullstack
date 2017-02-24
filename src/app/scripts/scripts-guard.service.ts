/**
 * Created by ilya on 03/02/2017.
 */
import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}                           from '@angular/router';
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";


@Injectable()
export class ScriptsGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean  {
//    let url: string = state.url;
    return this.authService.getPermission('scripts');
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean  {
    console.log("ScriptsGuard canActivateChild")
    return this.canActivate(route, state);
  }
  /* . . . */
}

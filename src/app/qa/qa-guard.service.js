"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by QA on 2/27/2017.
 */
var core_1 = require('@angular/core');
var login_component_1 = require("../login/login.component");
var QaGuard = (function () {
    function QaGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    QaGuard.prototype.canActivate = function (route, state) {
        //    let url: string = state.url;
        if (login_component_1.LoginComponent.debug) {
            return true;
        }
        return this.authService.getPermission('qa');
    };
    QaGuard.prototype.canActivateChild = function (route, state) {
        console.log("QaGuard canActivateChild");
        return this.canActivate(route, state);
    };
    QaGuard = __decorate([
        core_1.Injectable()
    ], QaGuard);
    return QaGuard;
}());
exports.QaGuard = QaGuard;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Radu on 2/27/2017.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require("../auth.service");
var qa_guard_service_1 = require("./qa-guard.service");
var routes = [];
var ScriptsRoutingModule = (function () {
    function ScriptsRoutingModule() {
    }
    ScriptsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
            providers: [
                qa_guard_service_1.QaGuard,
                auth_service_1.AuthService
            ]
        })
    ], ScriptsRoutingModule);
    return ScriptsRoutingModule;
}());
exports.ScriptsRoutingModule = ScriptsRoutingModule;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by ilya on 03/02/2017.
 */
var core_1 = require('@angular/core');
var axios_1 = require('axios');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/switchMap');
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.setLogin = function (user) {
        localStorage.setItem("user", user);
    };
    AuthService.prototype.login = function () {
        var user = localStorage.getItem("user");
        if (user) {
            var hash = JSON.parse(localStorage.getItem("user")).token;
            if (hash) {
                return this.checkTokenSession(hash);
            }
            return false;
        }
        return false;
    };
    AuthService.prototype.checkTokenSession = function (logged) {
        var self = this;
        // make call to backend to findout hashtoken
        var valid = false;
        var isvalid;
        isvalid = axios_1.default.post('/validate', {
            token: logged
        })
            .then(function (response) {
            //console.log('response is good '+response.data);
            valid = true;
            return new Promise(function (resolve, reject) {
                resolve(true);
            });
            //console.log('response is valid '+self.isLoggedIn);
            // return true;
        })
            .catch(function (error) {
            console.log('error is ' + error);
            valid = false;
            return new Promise(function (resolve, reject) {
                resolve(false);
            });
            // return false;
        });
        return isvalid;
        // return Observable.of(true).delay(1000).do(val => valid);
    };
    AuthService.prototype.checkUserPermission = function (permission) {
        // make call to backend to findout permission
        var self = this;
        var valid = false;
        var isvalid;
        isvalid = axios_1.default.post('/validate/permission', {
            permission: permission
        })
            .then(function (response) {
            // console.log('response is good '+response.data);
            valid = true;
            return new Promise(function (resolve, reject) {
                resolve(true);
            });
        })
            .catch(function (error) {
            console.log('error is ' + error);
            valid = false;
            return new Promise(function (resolve, reject) {
                resolve(false);
            });
        });
        return isvalid;
        //return Observable.of().delay(1000).do(val => self.isLoggedIn = valid);
    };
    AuthService.prototype.getPermission = function (permission) {
        return this.checkUserPermission(permission);
    };
    AuthService.prototype.setLogout = function () {
        // sends a backend request to logout from session
        var self = this;
        var valid = false;
        var isvalid;
        var user = localStorage.getItem("user");
        if (user) {
            var hash = JSON.parse(localStorage.getItem("user")).token;
            if (hash) {
                axios_1.default.post('/logout', {
                    token: hash
                })
                    .then(function (response) {
                    //console.log('response is good ' + response.data);
                    valid = true;
                    return new Promise(function (resolve, reject) {
                        resolve(true);
                    });
                })
                    .catch(function (error) {
                    console.log('error is ' + error);
                    valid = false;
                    return new Promise(function (resolve, reject) {
                        resolve(false);
                    });
                });
            }
        }
        localStorage.clear();
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var User_1 = require('./User');
var axios_1 = require('axios');
var environment_1 = require('../../environments/environment');
var rxjs_1 = require("rxjs");
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isChecked = false;
        this.errorMessage = 'Login Failed ';
        this.loginApproved = false;
        this.loading = false;
        this.debugWindow = false;
        this.isLoggedIn = false;
        this.errorFlag = false;
        this.user = new User_1.User();
        this.debugMode = false;
    }
    Object.defineProperty(LoginComponent.prototype, "staticDebug", {
        get: function () {
            return LoginComponent.debug;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function (event, user) {
        this.loading = true;
        event.preventDefault();
        var body = JSON.stringify(user);
        // console.log("body:"+body);
        if (this.isChecked) {
            localStorage.setItem("user", body);
        }
        //gives the LoginComponent class instance for use in inner-scope
        var self = this;
        if (!LoginComponent.debug) {
            axios_1.default.post('/login', {
                username: user.email,
                password: user.password
            })
                .then(function (response) {
                // let newUser = new User();
                var hashUser = JSON.stringify(response.data);
                self.authService.setLogin(hashUser);
                var redirect = '/dashboard';
                self.router.navigate([redirect]);
            })
                .catch(function (error) {
                var message = { errorMessage: error.response.data };
                console.log(message.errorMessage);
                var msg = message.errorMessage + ' ';
                //uses the logincomponent instance in this scope
                self.setErrorMessage(msg);
                //this.handleError(error);
            });
        }
        else {
            var redirect = '/dashboard';
            this.router.navigate([redirect]);
        }
    };
    LoginComponent.prototype.setLogin = function () {
        this.isLoggedIn = true;
    };
    LoginComponent.prototype.setLogout = function () {
        this.isLoggedIn = false;
    };
    LoginComponent.prototype.setChecked = function () {
        this.isChecked = true;
    };
    LoginComponent.prototype.setErrorMessage = function (message) {
        this.errorMessage = message;
        this.errorFlag = true;
    };
    LoginComponent.prototype.handleError = function (error) {
        console.error(error);
        this.setErrorMessage('Authentucation error ' + error.statusText);
        return rxjs_1.Observable.throw(error.json().error || 'Server error');
    };
    LoginComponent.prototype.ngOnInit = function () {
        //TODO checks if the user session is already logged in
        LoginComponent.debug = environment_1.default.debug;
    };
    LoginComponent.debug = false;
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

"use strict";
/**
 * Created by Radu on 1/13/2017.
 */
var User = (function () {
    function User() {
    }
    User.prototype.toString = function () {
        return "User {'username':" + this.email + " 'password':" + this.password + " }";
    };
    return User;
}());
exports.User = User;

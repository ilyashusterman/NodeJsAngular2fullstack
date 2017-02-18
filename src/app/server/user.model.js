/**
 * Created by Radu on 1/29/2017.
 */

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    persmissions: {}
});

var User = mongoose.model('User', userSchema);

module.exports = User;

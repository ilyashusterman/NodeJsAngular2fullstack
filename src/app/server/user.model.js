/**
 * Created by Radu on 1/29/2017.
 */

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

    username: { type : String , unique : true, required : true },
    password: { type : String , required : true } ,
    permissions: [ String ]

});

userSchema.set('toObject', { virtuals: true });

var User = mongoose.model('User', userSchema);

module.exports = User;

/**
 * Created by OscarMon on 25/07/2017.
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = Schema ({
        name: String,
        surname: String,
        email: String,
        password: String,
        role: String,
        image: String
    },
    {
        collection : 'user'
    });
module.exports = mongoose.model('User',UserSchema);l('User',UserSchema);
/**
 * Created by OscarMon on 25/07/2017.
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = Schema ({
        username: String,
        password: String
    },
    {
        collection : 'user'
    });
module.exports = mongoose.model('User',UserSchema);
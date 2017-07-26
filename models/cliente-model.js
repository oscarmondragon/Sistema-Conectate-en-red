/**
 * Created by OscarMon on 25/07/2017.
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ClienteSchema = Schema ({
        name: String,
        address: String,
        ipInternet: String,
        ipDevice: String,
        fee: Number,
        fees: {},
        base: String,
        mac: String,
        deviceType: String,
        modality: String,
        channel: String,
        startDate: Date
    },
    {
        collection : 'cliente'
    });
module.exports = mongoose.model('Cliente',ClienteSchema);
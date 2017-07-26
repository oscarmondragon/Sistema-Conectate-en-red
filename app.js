/**
 * Created by OscarMon on 25/07/2017.
 */
'use strict';
const express = require('express'),
    pug = require('pug'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    morgan = require('morgan'),
    restFul = require('express-method-override')('_method'),
    errors = require('./middlewares/errors'),
    users_routes = require('./routes/user-router'),
    clientes_routes = require('./routes/clientes-router'),
    dispositivos_routes = require('./routes/dispositivos-router'),
    favicon = require('serve-favicon')(`${__dirname}/public/favicon.png`),
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    optSession = {
        secret: 'shhhhhh',
        saveUnitialized : true,
        resave : true
    },
    port = (process.env.PORT || 8081);
var app = express();

app
    .set( 'views', viewDir )
    .set( 'view engine', 'pug' )
    .set( 'port', port )
    .use(session(optSession))
    .use( bodyParser.json() )
    .use( bodyParser.urlencoded({ extended: false }) )
    .use( restFul )
    .use( publicDir )
    .use( favicon )
    .use( morgan('dev') )
    .use( users_routes)
    .use( clientes_routes )
    //.use(dispositivos_routes)
    .use(errors.http404);

module.exports = app;
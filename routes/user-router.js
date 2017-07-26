/**
 * Created by OscarMon on 25/07/2017.
 */
'use strict';
var express = require('express');
var UserControl = require('../controllers/user-controller');
var api = express.Router();
var UserController = new UserControl();
api.get("/", UserController.index);

api.get("/index", UserController.index);
api.get("/login", UserController.logInGet);
api.post("/login", UserController.logInPost);
api.get("/signin", UserController.signInGet);
api.post("/signin", UserController.signInPost);
api.get('/logout', UserController.logOut);
module.exports = api;
/**
 * Created by OscarMon on 25/07/2017.
 */
'use strict';
var express = require('express');
var ClienteControl = require('../controllers/cliente-controller');
var api = express.Router();
var ClienteController = new ClienteControl();
api.get("/clientes", ClienteController.getAll);
api.get('/agregar-cliente', ClienteController.addCliente);
api.post('/clientes', ClienteController.saveCliente);
module.exports = api;
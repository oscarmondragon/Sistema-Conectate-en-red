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
api.get('/editar-cliente/:_id', ClienteController.editCliente);
api.put('/actualizar-cliente/:_id', ClienteController.saveCliente);
api.delete('/eliminar-cliente/:_id', ClienteController.deleteCliente);
api.get('/adeudos-cliente/:_id', ClienteController.adeudosCliente);

module.exports = api;
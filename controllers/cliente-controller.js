'use strict';
const ClienteModel = require('../models/cliente-model'),
    errors = require('../middlewares/errors');
class ClienteController {
    getAll(req, res, next) {
        return (req.session.username) ? ClienteModel.find({}, (err, docs) => {
            if (err) {
                throw err;
            } else {
                res.render('listaClientes', {
                    title: 'Lista de clientes',
                    user: req.session.username,
                    data: docs
                });
            }
        }) : errors.http401(req, res, next)
    }
    addCliente(req, res, next) {
        return (req.session.username) ? res.render('addCliente', {
            title: 'Agregar Cliente',
            user: req.session.username
        }) : errors.http401(req, res, next);
    }
    saveCliente(req, res, next) {
        let cliente = {
            _id: (req.body._id || null),
            name: req.body.name,
            address: req.body.address,
            ipInternet: req.body.ipInternet,
            ipDevice: req.body.ipDevice,
            fee: req.body.fee,
            base: req.body.base,
            mac: req.body.mac,
            deviceType: req.body.deviceType,
            modality: req.body.modality,
            channel: req.body.channel,
            startDate: req.body.startDate
        };
        console.log(cliente);
        return (req.session.username) ? ClienteModel.count({
            _id: cliente._id
        }, (err, count) => {
            if (err) throw err;
            console.log(`Número de Docs: ${count}`);
            if (count == 0) {
                ClienteModel.create(cliente, (err) => {
                    if (err) throw err;
                    res.redirect('/clientes')
                });
            } else if (count == 1) {
                ClienteModel.findOneAndUpdate({
                    _id: cliente._id
                }, {
                    name: cliente.name,
                    address: cliente.address,
                    ipInternet: cliente.ipInternet,
                    ipDevice: cliente.ipDevice,
                    fee: cliente.fee,
                    base: cliente.base,
                    mac: cliente.mac,
                    deviceType: cliente.deviceType,
                    modality: cliente.modality,
                    channel: cliente.channel,
                    startDate: cliente.startDate
                }, (err) => {
                    if (err) throw (err);
                    res.redirect('/clientes');
                });
            }
        }) : errors.http401(req, res, next);
    }
    editCliente(req, res, next) {
        let _id = req.params._id;
        console.log(_id);
        return (req.session.username) ? ClienteModel.findOne({
            _id: _id
        }, (err, docs) => {
            if (err) throw err;
            console.log(docs);
            res.render('editCliente', {
                title: 'Editar Cliente',
                user: req.session.username,
                data: docs
            });
        }) : errors.http401(req, res, next);
    }
    deleteCliente(req, res, next) {
        let _id = req.params._id;
        console.log(_id);
        return (req.session.username) ? ClienteModel.remove({
            _id: _id
        }, (err) => {
            if (err) throw err;
            res.redirect('/clientes')
        }) : errors.http401(req, res, next);
    }
}
module.exports = ClienteController;
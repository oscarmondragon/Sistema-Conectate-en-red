/**
 * Created by OscarMon on 25/07/2017.
 */
'use strict';
const UserModel = require('../models/user-model'),
    errors = require('../middlewares/errors');
class UserController {
    index(req, res, next) {
        if (req.session.username) {
            res.render('index', {
                title: 'Conectate en red',
                message: req.query.message
            });
        } else {
            res.render('login-form', {
                title: 'Autenticación de Usuarios',
                message: req.query.message
            });
        }
    }
    logInGet(req, res, next) {
        res.redirect('/');
    }
    logInPost(req, res, next) {
        let user = {
            username: req.body.username,
            password: req.body.password
        };
        console.log(user);
        UserModel.findOne({
            username: user.username,
            password: user.password
        }).exec((err, docs) => {
            if (err) {
                throw err;
                cb(docs);
            } else {
                req.session.username = (docs != null) ? user.username : null;
                console.log(req.session, '---', docs);
                return (req.session.username) ? res.redirect('/index') : errors.http401(req, res, next);
            }
        });
    }
    signInGet(req, res, next) {
        res.render('signin-form', {
            title: 'Registro de Usuarios'
        });
    }
    signInPost(req, res, next) {
        let user = {
            user_id: 0,
            username: req.body.username,
            password: req.body.password
        };
        console.log(user);
        UserModel.create(user, (err) => {
            if (err) throw err;
            else res.redirect(`/?message=El usuario ${user.username} ha sido creado`);
        });
    }
    logOut(req, res, next) {
        req.session.destroy((err) => {
            return (err) ? errors.http500(req, res, next) : res.redirect('/');
        });
    }
}
module.exports = UserController;
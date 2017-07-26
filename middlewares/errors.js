/**
 * Created by OscarMon on 25/07/2017.
 */
'use strict';
class Errors {
    http401(req, res, next) {
        let err = new Error();
        err.status = 401;
        err.statusText = 'UNAUTHORIZED ACCESS';
        res.render('error', {
            error: err
        });
    }
    http404(req, res, next) {
        let err = new Error();
        err.status = 404;
        err.statusText = 'NOT FOUND';
        res.render('error', {
            error: err
        });
    }
    http500(req, res, next) {
        let err = new Error();
        err.status = 500;
        err.statusText = 'INTERNAL SERVER ERROR';
        res.render('error', {
            error: err
        });
    }
}
module.exports = new Errors();
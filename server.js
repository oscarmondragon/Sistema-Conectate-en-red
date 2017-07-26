/**
 * Created by OscarMon on 25/07/2017.
 */
'use strict';
var mongoose = require('mongoose');
const app = require('./app');
//conexion abase de datos
mongoose.connect('mongodb://localhost:27017/red_db', (err, res)=> {
    if (err) {
        throw err;
    } else {
        console.log("Se ha establecido la conexion con la base de datos exitosamente");
        app.listen(app.get('port'), ()=>
            console.log(`Iniciando API-REST de Conectate en Red en el puerto ${app.get('port')}`));
    }
});





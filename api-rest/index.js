'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/minispotify_db', (err, res) => {
  if(err){
    throw err;
  } else {
    console.log("La conexion se realizo exitosamente");

    app.listen(port, () => {
      console.log("Servidor del api rest activo en http://localhost:" + port);
    });
  }
});

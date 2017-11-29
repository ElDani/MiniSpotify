'use strict'
var mongoose = require('mongoose'); // Uso de mongoose
var schema = mongoose.Schema; //Crea un objeto de tipo Schema

var UserSchema = schema({
  name: String,
  surname: String,
  email: String,
  role: String,
  password: String,
  image: String
});

module.exports = mongoose.model('User', UserSchema); // Exporta un objeto de tipo UserSchema, la coleccion se llamara Users(lo pluraliza)

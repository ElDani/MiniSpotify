'use strict'

var express = require('express');
var UserController = require('../controllers/user');
var multipart = require('connect-multiparty');
var md_auth = require('../middlewares/authenticate');
var md_upload = multipart({ uploadDir: './uploads/users' });

var api = express.Router();

api.get('/probando-controlador', md_auth.ensureAuth, UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.put('/updateUser/:id', md_auth.ensureAuth, UserController.updateUser);
api.post('/uploadImage/:id', [md_auth.ensureAuth, md_upload], UserController.uploadImage);
api.get('/getImageUser/:imageFile', UserController.getImageFile);

module.exports = api;

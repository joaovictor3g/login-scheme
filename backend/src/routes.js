const express = require('express');

const routes = express.Router();

const Login = require('./controllers/loginControllers');

routes.get('/graduate/', Login.Logged);
routes.post('/new', Login.createLogin);
routes.get('/list', Login.listAll);

module.exports = routes;
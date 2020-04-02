const express = require('express');

const routes = express.Router();

const Login = require('./controllers/loginControllers');

routes.post('/graduate', Login.Logged);
routes.post('/new', Login.createLogin);
routes.get('/list/:id', Login.listByIdLogged);

module.exports = routes;
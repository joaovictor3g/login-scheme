const express = require('express');

const routes = express.Router();

const Login = require('./controllers/loginControllers');

routes.post('/graduate', Login.Logged);
routes.post('/new', Login.createLogin);
routes.get('/list/:id', Login.listByIdLogged);
routes.get('/listCourses', Login.listAllCourses);
routes.get('/listSubjects', Login.listSubjects);

module.exports = routes;
const express = require('express');
const LoginRouter = express.Router();
const {Login} = require('../controller/Login');
LoginRouter.get('/',Login);

module.exports = { LoginRouter};
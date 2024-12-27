const express = require("express");
const PageRouter = express.Router();
const {MainPageFunction} = require("../controller/Page")

PageRouter.get('/',MainPageFunction);

module.exports = PageRouter;

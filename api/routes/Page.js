const express = require("express");
const PageRouter = express.Router();


PageRouter.get('/',(req,res)=>{
    console.log(JSON.stringify(req.body));
    res.status(200).json({name:"name"});
})

module.exports = PageRouter;

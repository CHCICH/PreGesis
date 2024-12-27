const express = require("express");
const app = express();
const SERVER_PORT = 5000;
const cors = require('cors');
const {PageRouter} = require('../routes/MainRoutes');

app.use(express.json());
app.use(cors()); 
app.use('/alouch',PageRouter); 

app.listen(SERVER_PORT,async ()=>{
    try{
        console.log(`the server is listening to port ${SERVER_PORT}`);
    }
    catch(err){
        console.log(err);
    }
})
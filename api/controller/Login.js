const {Response,Error,EStacker} = require('../errors/MainError');
const valdator = require('email-validator');
const {searchUsernamerr} = require('../DB/conectivity');
const {logging} = require('../utils/Logging');
 
const Login = async (req,res) =>{
    const {textArea, mode , password} = req.body;
    const ErrorStacker = {};
    let isError = false;
    if(textArea.length === 0){
        ErrorStacker.EmptyTextArea = new EStacker("text Area is Empty please enter either your username or your email",true);
        isError = true;
    }
    if(password.length === 0 ){
        ErrorStacker.EmptyPassword = new EStacker("password is empty please enter the password",true);
        isError = true;
    }
    if(mode == "NORMAL"){
        const isEmail =  valdator.validate(textArea);
        if(!isEmail && textArea.length < 4){
            ErrorStacker.shortUserName = new EStacker("username is too short should be at least 5 characters long",true);
            isError = true;
        }
        const CheckUserName = await searchUsername(textArea,password);
        if(!CheckUserName.success){
            // error handling should be done in terms of if the username doesn't exist then if the username exists but wrong password

            // 
        }
        if(isError){
            res.status(202).json(new Error("Error",ErrorStacker,"multithreaded Error handling check the Error's body"));
        }else{

            //log the info
            logging();
            //

            // we need to accomodate and add the rest of the info that needs to be sent back to the client
            res.status(202).json(new Response(true,"Login was successfull",{
                UserID:CheckUserName.body.UserID
            }))
        }

    }else if(mode == "AUB_CREDENTIALS"){
        res.status(200).json(new Error("option still not availble",{},"pending option"));
    }
    else{
        res.status(202).json(new Error("you need to specify the mode of your login",{},"Unspecified Login Mode"));
    }
}


module.exports = {Login};
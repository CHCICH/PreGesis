const {Response} = require('../errors/MainError');
const valdator = require('email-validator');


const searchUsername = async (usernameOrEmail,mode,password) =>{
    // connect to the database query using SQL the username hash the password and the username and check first if the username exits assert an erro
    // if the username doesn't exist and then check if the hashed password is equal to the password given assert an error if not and then finally 
    // return a key of validation to enable the user to access the mainpage and exit the login/sign up page while returing the ID of the user
    return new Response(true,"successfull",{"UserID":123123})
}
module.exports = {searchUsername};
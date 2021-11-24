const express = require("express");
const {signUpUser,updateUser,getAllUsers,deleteUser,login,findUserByEmail,editFullName} = require('./../controller/rUser');
const bcrybt =require('bcrypt')


const signUpRouter = express.Router();


signUpRouter.post('/signup', signUpUser);
// signUpRouter.post('/login',login);
signUpRouter.put('/update/:id',updateUser);
signUpRouter.delete('/delete/:id',deleteUser);
signUpRouter.get('/',getAllUsers);
signUpRouter.get("/email/:email", findUserByEmail);
signUpRouter.put("/edit/:email", editFullName)



module.exports = signUpRouter;
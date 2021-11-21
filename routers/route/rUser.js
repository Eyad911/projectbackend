const express = require("express");
const {signUpUser,updateUser,getAllUsers,deleteUser} = require('./../controller/rUser');


const signUpRouter = express.Router();


signUpRouter.post('/signup', signUpUser);
signUpRouter.put('/update/:id',updateUser);
signUpRouter.delete('/delete/:id',deleteUser);
signUpRouter.get('/',getAllUsers)



module.exports = signUpRouter;
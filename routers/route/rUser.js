const express = require("express");
const { models } = require("mongoose");
const {signUpUser} = require('./../controller/rUser');


const signUpRouter = express.Router();


signUpRouter.post('/signup', signUpUser);



module.exports = signUpRouter;
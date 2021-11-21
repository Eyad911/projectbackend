const express = require("express");
const {electronics,getAllElectronics} = require('./../controller/electronics');


const electronicsRouter = express.Router();


electronicsRouter.post('/addni', electronics);
electronicsRouter.get('/', getAllElectronics);



module.exports = electronicsRouter;
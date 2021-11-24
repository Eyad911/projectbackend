const express = require("express");
const {addElectronics,getAllElectronics,deleteElectronics} = require('./../controller/electronics');


const electronicsRouter = express.Router();


electronicsRouter.post('/addni', addElectronics);
electronicsRouter.get('/', getAllElectronics);
electronicsRouter.delete('/delete',deleteElectronics);



module.exports = electronicsRouter;
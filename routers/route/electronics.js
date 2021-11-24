const express = require("express");
const {addElectronics,getAllElectronics,deleteElectronics,getAccess} = require('./../controller/electronics');


const electronicsRouter = express.Router();


electronicsRouter.post('/addni', addElectronics);
electronicsRouter.get('/', getAllElectronics);
electronicsRouter.get('/:kind',getAccess)
electronicsRouter.delete('/delete',deleteElectronics);



module.exports = electronicsRouter;
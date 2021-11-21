const express = require("express");
const dotenv = require("dotenv");
require('./db')

const app = express();

dotenv.config();

const PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log(`Run on port ${PORT}`);
})
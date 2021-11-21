const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
require('./db')
const signUpRouter = require('./routers/route/rUser');
const electronicsRouter = require('./routers/route/electronics');

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());
app.use('/app',signUpRouter );
app.use('/electronics', electronicsRouter)
const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`Run on port ${PORT}`);
})
const express = require("express")
const app = express()
const errorMiddleware = require("./middleware/error")
app.use(express.json())
const cors = require('cors');
require("dotenv").config()
const {connectdb} = require('./config/db')

connectdb();
// cors
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))
// routes import
const product = require('./router/productRoute')
const auth = require('./router/authRoute')
app.use('/api',product)
app.use('/api',auth)
// error middleware
app.use(errorMiddleware)

// app.use(cors());
app.listen(process.env.PORT,()=>{
    console.log("server is running on http");
})
module.exports = app
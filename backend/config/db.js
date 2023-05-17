const mongoose = require('mongoose')
require("dotenv").config()

exports.connectdb = ()=>{
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.log('db connected')
    }).catch((err)=>{
        console.log(err);
    })
}


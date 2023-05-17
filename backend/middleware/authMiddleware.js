const JWT = require('jsonwebtoken')
const userModel = require('../models/userModel')

// protected token
exports.requireSign = async(req,res,next)=>{
    try {
    const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
    req.user = decode
        next()
    } catch (error) {
        console.log(error)
    }    
}

// admin access
exports.isAdmin = async(req,res,next)=>{
    try {
        const user = await userModel.findOne({role:req.body.role})
        if(user==0)
        {
            return res.status(401).send({
                success:false,
                message:"unauthorized access"
            })
        }
        else
        {
            next()
        }
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success:false,
            error,
            message:"error in admin middleware"
        })
    }
}
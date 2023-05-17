const { hashPassword, comparePassword } = require("../helper/authHelper")
const userModel = require("../models/userModel")
const JWT = require('jsonwebtoken')
exports.register = async(req,res)=>{
    try {
        // console.log("error");
        const {name,email,password,mobile} = req.body
        // validation
        // check user
        const existingUser = await userModel.findOne({email})
        // existing user
        if(existingUser){
            return res.status(200).json({
                success:true,
                message:"already register please login"
            })
        }
        // register user
        const hashedPassword = await hashPassword(password)
        // save
        const user = await new userModel({name,email,mobile,password:hashedPassword}).save()
        res.status(201).send({
            success:true,
            message:"user register successfully",
            user
        })
    } catch (error) {
        // res.status(500).send({
        //     success:false,
        //     message:"error in register"
        // })
        console.log(error);
    }
}

// login 
exports.login = async(req,res)=>{
    try {
        
        const {email,password} = req.body
        // validation

        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"invalid email or password"
            })
        }
        // check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"email is not registered"
            })
        }

        const match  = await comparePassword(password,user.password)
        if(!match)
        {
            return res.status(200).send({
                success:false,
                message:'invalid password'
            })
        }
// token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET,{expiresIn:'10d'})
        res.status(200).send({
            success:true,
            message:'login successfull',
            user:{
                name:user.name,
                email:user.email,
                mobile:user.mobile,
            },
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error in login",
            error
        })
    }
}
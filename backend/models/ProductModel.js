const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"please enter product description"],
        trim:true
    },
    price:{
        type:Number,
        required:[true,"please enter product price"],
        maxLength:[8,"price cannot be more than 8 characters"]
    },
    // rating:{
    //     type:Number,
    //     default:0
    // },
    // images:{
    //     public_id:{
    //         type:String,
    //         required:true
    //     },
    //     url:{
    //         type:String,    
    //         required:true
    //     }
    // },
    category:{
        type:String,
        required:[true,"please enter product category"],
    },
    stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxLength:[4,'stock cannot be exceeded 4 char'],
        default:1
    },
    // numOfReviews:{
    //     type:Number,
    //     default:0
    // },
    // reviews:[
    //     {
    //         name:{
    //             type:String,
    //             required:true
    //         },
    //         rating:{
    //             type:Number,
    //             require:true
    //         },
    //         comment:{
    //             type:String,
    //             required:true
    //         }
    //     }
    // ],
    // createdAt:{
    //     type:Date,
    //     default:Date.now
    // }

})
module.exports = mongoose.model("product",ProductSchema)
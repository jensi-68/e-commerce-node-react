const product = require("../models/ProductModel")
exports.paginate = async(req,res)=>{
    try {
        
       let {page , size} = req.query
       if(!page){
        page =1
       }
       if(!size){
        size = 10
       }

       const limit = parseInt(size)
       const skip = (page -1)*size

    //    const users = await product.find({},{},{limit:limit,skip:skip})
       const users = await product.find().limit(limit).skip(skip)


    //    res.send(users)
    res.send({
        page,size,productdata:users
    })

    } catch (error) {
        res.status(400).send({success:false,msg:error.message})
    }
}
// module.exports = {
//     paginate
// }
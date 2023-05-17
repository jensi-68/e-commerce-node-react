const error = require('../middleware/error')
const Product = require('../models/ProductModel')
const Errorhandler = require('../utils/errorhandler')



// create product --admin

exports.createProduct = async(req,res,next)=>{
 try {
    const product = await Product.create(req.body)
    res.status(201).json({
        success:true,
        product
    })
 } catch (error) {
    console.log(error);
    res.status(500).json(error)
 }
}
 
// get all products
exports.getAllProduct = async(req,res)=>{
   try {
    const productdata = await Product.find()

    res.status(200).json({
        success:true,
        productdata
    })
   } catch (error) {
    res.status(500).json(error)
   }
}

// get product details
exports.getProductDetails = async(req,res)=>{
    const product = await Product.findById({_id:req.params.id})

    try {
        res.status(200).json({
            result:product
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

// update product --admin
exports.updateProduct = async(req,res)=>{
   try {
    let product = await Product.findById(req.params.id)

    if(!product)
    {
        return next((new error("product not found",404)))
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        product
    })
   } catch (error) {
    res.status(500).json(error)
   }
}

// delete product
exports.deleteProduct = async(req,res)=>{
 Product.findByIdAndDelete({_id:req.params.id})
 .then(result=>{
     res.status(200).json({
         message:'product deleted',
         result:result
     })
 })
 .catch(err=>{
     res.status(500).json({
         error:err
     })
 })
}

// category get
exports.getcategory = async(req,res)=>{
    console.log("hello");
    // category = await Product.find({category:req.body.category})
    // console.log(category);
    // try {
    //     res.status(200).json({
    //         message:'category found',
    //         category
    //     })
    // } catch (error) {
    //     console.log(error);
    // }
}

// add to cart

exports.addtocart = async(req,res)=>{
    let cart = []
    // console.log("hello");
    const product = req.product

    cart.push({...product,quantity:1})

    res.status(200).json({
        message:'product added to cart',
    })
}


// search product
exports.searchProduct = async(req,res)=>{
    try {
        let data = await Product.find(
            {
                '$or':[
                    {"title":{$regex:req.params.key}},
                    {"category":{$regex:req.params.key}}
                ]
            }
        )
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}
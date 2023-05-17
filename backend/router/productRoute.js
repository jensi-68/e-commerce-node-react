const { paginate } = require("../controller/paginateController")
const {createProduct, getAllProduct, updateProduct, deleteProduct, getProductDetails, getcategory, addtocart, searchProduct } = require("../controller/productController")
// const upload = require("../middleware/imagemulter")

 router = require("express").Router()


router.route("/products").get(getAllProduct)
router.route("/product/new").post(createProduct)
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)
router.route('/product/category').get(getcategory)
router.get('/paginate',paginate)
router.post('/product/addtocart',addtocart)
router.get('/product/search/:key',searchProduct)
module.exports = router
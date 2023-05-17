const { register, login } = require("../controller/authController")
const { requireSign, isAdmin } = require("../middleware/authMiddleware")

 router = require("express").Router()


router.route("/register").post(register)
router.route("/login").post(isAdmin,login)
// requireSign



module.exports = router
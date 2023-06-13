const express = require("express");
const router = express.Router();
const {
    addProduct
} = require("../controllers/productController")

router.route('/').post(addProduct);


module.exports = router;
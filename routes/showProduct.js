const express = require("express");
const router = express.Router();
const {
    getProducts
 
} = require("../controllers/showProduct")


router.route('/').get( getProducts);


module.exports = router;
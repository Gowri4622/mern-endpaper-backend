const express = require('express')
const router=express.Router()
const {userData} = require('../controllers/productDataController')

router.route('/').post(userData)

module.exports = router
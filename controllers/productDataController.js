const userModel = require('../models/productModels')
const jwt=require('jsonwebtoken')

const userData = async(request,response) =>{
    const {token} = request.body
    try{
        const productname = jwt.verify(token,JWT_TOKEN)
        const productprice = productname.price
        userModel.findOne({price : productprice})
        .then((data)=>{
            response.status(200).json({data})
        })
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
}

module.exports  = {userData
}
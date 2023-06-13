const Product = require("../models/productModels");


const addProduct = async(request, response)=>{
  const newProduct = new Product({
      name: request.body.name,
      price: request.body.price,
      countInStock: request.body.countInStock
  })
  
  try{
      const product = await newProduct.save()
      response.status(201).json(product)
  }
  catch(error){
      response.status(500).json({message:error.message})
  }
}

module.exports = {
 
  addProduct
};
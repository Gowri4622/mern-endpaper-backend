const Product = require("../models/productModels");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};




module.exports = {
  getProducts
};
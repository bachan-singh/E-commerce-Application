const express = require('express');
const router = express.Router();
const {createProduct, getAllProducts} = require('../controllers/productController')

// Creating a new Product Route
router.post('/create-product', createProduct)

// Fetching all the products Route
router.get('/', getAllProducts)

module.exports = router;
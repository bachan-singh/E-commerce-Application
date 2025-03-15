const express = require('express');
const router = express.Router();
const {createProduct, getAllProducts} = require('../controllers/productController')

router.post('/create-product', createProduct)
router.get('/', getAllProducts)
module.exports = router;
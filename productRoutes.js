const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD operations
router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

// Search products
router.get('/search', productController.searchProducts);

module.exports = router;
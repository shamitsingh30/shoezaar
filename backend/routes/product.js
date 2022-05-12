const express = require('express');

const router = express.Router();

const productController = require('../controllers/product_controller');

router.get('/info/:asin', productController.info);

module.exports = router;
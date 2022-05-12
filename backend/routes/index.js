const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

router.use('/users', require('./users'));

router.use('/product', require('./product'));

router.use('/api', require('./api'));

module.exports = router;
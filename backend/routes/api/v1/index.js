const express = require('express');
const router = express.Router();

const homeApi = require('../../../controllers/api/v1/home_api');

router.get('/', homeApi.home);

module.exports = router;
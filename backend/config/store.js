const mongoose = require('mongoose');

const data = require('../assets/amazon_uk_shoes_dataset.json');

const Store = require('../models/store');
const db = require('../config/mongoose');

Store.remove({ });

Store.insertMany(data, function(err, r){
    if(err){
        console.log("Error in store database", err)
    };
})
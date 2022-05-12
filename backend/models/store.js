const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    asin: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: String,
    },
    brand: {
        type: String,
    },
    product_details: {
        type: String,
    },
    breadcrumbs: {
        type: String,
    },
    images_list: [
        {
            type: String,
            required: true
        }
    ],
    features: [
        {
            type: Object,
            required: true
        }
    ],
}, {
    timestamps: true
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
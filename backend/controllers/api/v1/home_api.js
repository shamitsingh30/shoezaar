const Store = require('../../../models/store');

module.exports.home = async function(req, res){

    let products = await Store.find({ });

    return res.status(200).json({
        message: "List of Products",
        products: products.slice(0, 50)
    });
};
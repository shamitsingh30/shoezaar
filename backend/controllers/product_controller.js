const Store = require('../models/store');

module.exports.info = function(req, res){
    Store.findOne({asin: req.params.asin}, function(err, product){
        
        if(req.isAuthenticated()){
            return res.render('product_info', {
                product: product,
                link1: 'Home',
                link2: 'Profile',
                link3: 'Logout'
            });
        }else{
            return res.render('product_info', {
                product: product,
                link1: 'Home',
                link2: 'Sign In',
                link3: 'Sign Up'
            });
        }
        
    });
};
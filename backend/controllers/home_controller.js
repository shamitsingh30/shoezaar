const Store = require('../models/store');

module.exports.home = async function(req, res){

    const properties = await Store.find({ });

    if(req.isAuthenticated()){
        return res.render('index', {
            link1: 'Home',
            link2: 'Profile',
            link3: 'Logout',
            props: properties
        });
    }
    return res.render('index', {
        link1: 'Home',
        link2: 'Sign In',
        link3: 'Sign Up',
        props: properties
    });
}
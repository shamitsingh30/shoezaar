const passport = require('passport');
const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('profile', {
        link1: 'Home',
        link2: 'Profile',
        link3: 'Logout'
    });
}

module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('sign_in', {
        link1: 'Home',
        link2: 'Sign In',
        link3: 'Sign Up'
    });
}

module.exports.startSession = function(req, res){
    console.log(req.body);
    return res.redirect('/users/profile');
}

module.exports.endSession = function(req, res){
    req.logout();
    return res.redirect('/');
}

module.exports.signUp = function(req, res){
    return res.render('sign_up', {
        link1: 'Home',
        link2: 'Sign In',
        link3: 'Sign Up'
    });
}

module.exports.create = function(req, res){
    console.log(req.body);
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    };

    User.findOne({email: req.body.email}, function(err, user){
        if(!user){
            User.create(req.body, function(err, u){
                if(err){
                    console.log('Error in creating user while signing up');
                    return;
                }
                return res.redirect('/users/sign-in');
            })
        };

    });
}

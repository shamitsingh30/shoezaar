
module.exports.home = function(req, res){

    if(req.isAuthenticated()){
        return res.render('index', {
            link1: 'Home',
            link2: 'Profile',
            link3: 'Logout'
        });
    }
    return res.render('index', {
        link1: 'Home',
        link2: 'Sign In',
        link3: 'Sign Up'
    });
}
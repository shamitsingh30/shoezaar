const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

module.exports.createSession = async function(req, res){
    try{
        let user = await User.findOne({email: req.body.email});

        if(!user || user.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password"
            });
        }
        return res.status(200).json({
            message: 'Sign in successful, token generated!',
            auth: true,
            data:{
                token: jwt.sign(user.toJSON(), 'topsecret', {expiresIn: '100000'})
            }
        })
    }catch(err){
        return res.json(500, {
            message: "internal server error"
        });
    }
}

module.exports.signIn = function(req, res){
    console.log(req.body);
    return res.json(200, {
        message: 'Received'
    })
}
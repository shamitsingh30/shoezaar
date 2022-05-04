const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/user_controller');

router.get('/sign-in', userController.signIn);

router.get('/sign-up', userController.signUp);
router.post('/create', userController.create);

router.get('/profile', passport.checkAuthentication, userController.profile);

router.post('/start-session', passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'}
), userController.startSession);

router.get('/end-session', userController.endSession);

module.exports = router;
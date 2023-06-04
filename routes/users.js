const express = require('express');
const router = express.Router();
// import passport.js
const passport = require('passport');

const usersConroller = require('../controllers/users_contoller');

//map a route to the users_ controller
// if the Authentication is checked then only the profile page will be accessed
router.get('/profile/:id', passport.checkAuthentication, usersConroller.profile);
// route to update the user details using the
router.post('/update/:id', passport.checkAuthentication, usersConroller.update);


//map a route to the users_ controller for sign up
router.get('/sign-up', usersConroller.signUp);

//map a route to the users_ controller for sign in
router.get('/sign-in', usersConroller.signIn);

//map a route to craate new user from the form
router.post('/create', usersConroller.create);

//map a route to craate new session for user login from the form
// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    { failureRedirect: '/users/sign-in'},
),usersConroller.createSession)

router.get('/sign-out', usersConroller.destroySession);

//scope is the info that we are looking to fetch 
//'google' in the strategy used
router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
// '/users/sign-in' - URL at which we recieve the data 
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/users/sign-in'}), usersConroller.createSession);


module.exports = router;
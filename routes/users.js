const express = require('express');
const router = express.Router();

const  usersConroller = require('../controllers/users_contoller');

//map a route to the users_ controller
router.get('/profile', usersConroller.profile);

//map a route to the users_ controller for sign up
router.get('/sign-up',usersConroller.signUp);

//map a route to the users_ controller for sign in
router.get('/sign-in',usersConroller.signIn);

//map a route to craate new user from the form
router.post('/create',usersConroller.create);

module.exports = router;
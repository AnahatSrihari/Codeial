const express = require('express');
const router = express.Router();

const  usersConroller = require('../controllers/users_contoller');

//map a route to the users_ controller
router.get('/profile', usersConroller.profile);

module.exports = router;
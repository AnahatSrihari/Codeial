const express = require('express');
const router = express.Router();

const  usersConroller = require('../controllers/posts_controller');

//map a route to the users_ controller
router.get('/', usersConroller.posts);

module.exports = router;
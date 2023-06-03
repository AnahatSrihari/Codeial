const express = require('express');
const router = express.Router();

//NOTE - {../} To go a step above and move parallelly and get inside the folder controller .
const homeController = require('../controllers/home_controller')

console.log('Router loaded');

router.get('/', homeController.home);
// Any request to the home page goes to homeController.home, any request to /users goes the users route and where further mapping is done.
router.use('/users', require('./users'));

// for any other router accessed from here
//router.use('/routerName', require('./routerName'));
router.use('/posts', require('./posts'));

//Call the comment - route from { index.js } file to make it usable
router.use('/comments', require('./comments'));

router.use('/api', require('./api'));


module.exports = router
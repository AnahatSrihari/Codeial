const express = require('express');
const router = express.Router();

//NOTE - {../} To go a step above and move parallelly and get inside the folder controller .
const homeController = require('../controllers/home_controller')

console.log('Router loaded');

router.get('/', homeController.home);
router.get('/', homeController.home2);


module.exports = router
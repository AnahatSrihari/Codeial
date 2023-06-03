// require express and router 
const express = require('express');

const router = express.Router();
// require v1 api
const usersApi = require('../../../controllers/api/v1/users_api');

// route of the user's api in the controller  
router.post('/create-session', usersApi.createSession);

module.exports = router;

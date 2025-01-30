const express = require('express')
const router = express.Router();

// import controller
const {createUser} = require('../controllers/Signup');
const {loginUser} = require('../controllers/Login')

// define route
router.post('/signup',createUser)
router.post('/login',loginUser)

module.exports = router;
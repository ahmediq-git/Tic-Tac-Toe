
const express = require('express');
const router = express.Router()
const {signup, login, getUser} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

// login route 
router.post('/login', login)

// signup route (add user) is done by post
router.post('/signup', signup)

// router.get('/get')

router.get('/get', protect, getUser)

module.exports = router
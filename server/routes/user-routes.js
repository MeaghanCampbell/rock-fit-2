const express = require('express')
const router = express.Router()
const validateToken = require("../middleware/validateTokenHandler")
const { 
    registerUser,
    loginUser,
    currentUser,
    getUsers
} = require('../controllers/user-controller')

router.get('/', getUsers)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/current', validateToken, currentUser)

module.exports = router
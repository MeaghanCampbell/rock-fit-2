const express = require('express')
const router = express.Router()
const { 
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
} = require('../controllers/user-controller')

// get all users & create a user
router.route('/').get(getUsers).post(createUser)

// get, update & delete am individual user
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')

// get all users
// GET /api/users
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

// get individual users
// GET /api/users/:id
const getUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `get user for ${req.params.id}`})
})

// create new user
// POST /api/users
const createUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    const {username, email, password} = req.body
    if(!username || !email || !password) {
        res.status(400)
        throw new Error('All fields are mandatory')
    }
    const user = await User.create({
        username,
        email,
        password
    })
    res.status(201).json(user)
})

// update a user
// PUT /api/users/:id
const updateUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `update user ${req.params.id}`})
})

// delete a user
// DELETE /api/users/:id
const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete user ${req.params.id}`})
})

module.exports = { 
    getUsers, 
    getUser, 
    createUser, 
    updateUser, 
    deleteUser 
}


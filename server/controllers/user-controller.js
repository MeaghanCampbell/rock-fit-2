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

    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(404)
        throw new Error("Contact not found")
    }

    res.status(200).json(user)

})

// create new user
// POST /api/users
const createUser = asyncHandler(async (req, res) => {

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
    
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(404)
        throw new Error("Contact not found")
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updatedUser)

});

// delete a user
// DELETE /api/users/:id
const deleteUser = asyncHandler(async (req, res) => {

    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(404)
        throw new Error("Contact not found")
    }

    console.log()

    await User.findOneAndDelete();

    res.status(200).json(user)

});

module.exports = { 
    getUsers, 
    getUser, 
    createUser, 
    updateUser, 
    deleteUser,
}


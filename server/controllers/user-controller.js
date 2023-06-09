const asyncHandler = require('express-async-handler');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const Workout = require('../models/workoutModel')
const Benchmark = require('../models/benchmarkModel')


// register the user
// POST /api/users/register
const registerUser = asyncHandler(async (req, res) => {

    const {username, email, password} = req.body

    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const userAvailable = await User.findOne({ email })

    if(userAvailable) {
        res.status(400);
        throw new Error("A user with this email address already exists")
    }

    //hash password
    const hashPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        username,
        email,
        password: hashPassword
    })

    if(user) {
        res.status(201).json({_id: user.id, email: user.email})
    } else {
        res.status(400)
        throw new Error("User data is not valid")
    }

})

// login the user
// POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {

    const { username, password } = req.body

    if(!username || !password) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const user = await User.findOne({ username })

    // compare password with hashed password
    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h' }
        );
        // use access token to access all private routes
        res.status(200).json({ accessToken })
    } else {
        res.status(401)
        throw new Error("username or password are not valid")
    }

})

// get current User Info
// GET /api/users/current
// private
const currentUser = asyncHandler(async (req, res) => {

    const currentUser = req.user

    const workouts = await Workout.find({ user_id: currentUser.id})

    const benchmark = await Benchmark.find({ user_id: currentUser.id})

    res.json({currentUser, workouts, benchmark})

});

// get all users
// GET /api/users
const getUsers = asyncHandler(async (req, res) => {

    const users = await User.aggregate([
        {
            $lookup: {
                from: 'workouts',
                localField: '_id',
                foreignField: 'user_id',
                as: 'workouts'
            }
        },
        {
            $project: {
                _id: 1,
                username: 1,
                email: 1,
                workouts: {
                    $map: {
                        input: '$workouts',
                        as: 'workout',
                        in: {
                            id: '$$workout._id',
                            date: '$$workout.date',
                            category: '$$workout.category',
                            time: '$$workout.time',
                            level: '$$workout.level',
                            description: '$$workout.description'
                        }
                    }
                }
            }
        }
    ])

    res.status(200).json(users)

})

module.exports = { 
    registerUser,
    loginUser,
    currentUser,
    getUsers
}


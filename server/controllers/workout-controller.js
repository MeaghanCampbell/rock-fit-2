const asyncHandler = require('express-async-handler');
const Workout = require('../models/workoutModel')

// get all workouts
// GET /api/workouts
const getWorkouts = asyncHandler(async (req, res) => {

    const workouts = await Workout.find()

    res.status(200).json(workouts)

})

// get individual workout
// GET /api/workouts/:id
const getWorkout = asyncHandler(async (req, res) => {

    const workout = await Workout.findById(req.params.id)

    if(!workout) {
        res.status(404)
        throw new Error("Workout Not Found")
    }

    res.status(200).json(workout)

})

// create new workout
// POST /api/workouts
// private
const createWorkout = asyncHandler(async (req, res) => {

    const {date, category, time, level, description} = req.body

    if(!date || !category || !time || !level || !description) {
        res.status(400)
        throw new Error('All fields are mandatory')
    }

    const workout = await Workout.create({
        date,
        category,
        time,
        level,
        description,
        user_id: req.user.id,
        user_name: req.user.username
    })

    res.status(201).json(workout)

})


// update a workout
// PUT /api/workouts/:id
// private
const updateWorkout = asyncHandler(async (req, res) => {
    
    const workout = await Workout.findById(req.params.id)

    if(!workout) {
        res.status(404)
        throw new Error("Workout Not Found")
    }

    if(workout.user_id.toString() !== req.user.id) {
        res.status(403)
        throw new Erorr("you don't have premission to update other user workouts")
    }

    const updatedWorkout = await Workout.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updatedWorkout)

});

// delete a workout
// DELETE /api/workouts/:id
// private
const deleteWorkout = asyncHandler(async (req, res) => {

    const workout = await Workout.findById(req.params.id)

    if(!workout) {
        res.status(404)
        throw new Error("Workout Not Found")
    }

    if(workout.user_id.toString() !== req.user.id) {
        res.status(403)
        throw new Erorr("you don't have premission to delete other user workouts")
    }

    await Workout.findOneAndDelete({_id: req.params.id});

    res.status(200).json(workout)

});

module.exports = { 
    getWorkouts, 
    getWorkout, 
    createWorkout, 
    updateWorkout, 
    deleteWorkout,
}
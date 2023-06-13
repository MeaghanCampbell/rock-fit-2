const express = require('express')
const router = express.Router()
const validateToken = require("../middleware/validateTokenHandler")
const { 
    getWorkouts,
    createWorkout,
    getWorkout,
    updateWorkout,
    deleteWorkout,
} = require('../controllers/workout-controller')

router.get('/', getWorkouts)
router.get('/:id', getWorkout)
router.post('/', validateToken, createWorkout)
router.put('/:id', validateToken, updateWorkout)
router.delete('/:id', validateToken, deleteWorkout)

module.exports = router
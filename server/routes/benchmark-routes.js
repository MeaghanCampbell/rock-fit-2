const express = require('express')
const router = express.Router()
const {
    getBenchmarks,
    createBenchmark,
    getBenchmark,
    updateBenchmark,
    deleteBenchmark
} = require('../controllers/benchmark-controller')

// get all benchmarks & create a benchmark
router.route('/').get(getBenchmarks).post(createBenchmark)

// get, update & delete an individual benchmark
router.route('/:id').get(getBenchmark).put(updateBenchmark).delete(deleteBenchmark)

module.exports = router
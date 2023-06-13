const asyncHandler = require('express-async-handler');
const Benchmark = require('../models/benchmarkModel')

// get all benchmarks
// GET /api/benchmarks
const getBenchmarks = asyncHandler(async (req, res) => {

    const benchmarks = await Benchmark.find()

    res.status(200).json(benchmarks)

})

// get individual benchmark
// GET /api/benchmarks/:id
const getBenchmark = asyncHandler(async (req, res) => {

    const benchmark = await Benchmark.findById(req.params.id)

    if(!benchmark) {
        res.status(404)
        throw new Error("Benchmark not found")
    }

    res.status(200).json(benchmark)

})

// create new benchmark
// POST /api/benchmarks
const createBenchmark = asyncHandler(async (req, res) => {

    const {boulder_grade, route_grade} = req.body

    if(!boulder_grade || !route_grade) {
        res.status(400)
        throw new Error('All fields are mandatory')
    }

    const benchmark = await Benchmark.create({
        boulder_grade,
        route_grade
    })

    res.status(201).json(benchmark)

})

// update a benchmark
// PUT /api/benchmarks/:id
const updateBenchmark = asyncHandler(async (req, res) => {
    
    const benchmark = await Benchmark.findById(req.params.id)

    if(!benchmark) {
        res.status(404)
        throw new Error("Benchmark not found")
    }

    const updatedBenchmark = await Benchmark.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updatedBenchmark)

});

// delete a benchmark
// DELETE /api/benchmarks/:id
const deleteBenchmark = asyncHandler(async (req, res) => {

    const benchmark = await Benchmark.findById(req.params.id)

    if(!benchmark) {
        res.status(404)
        throw new Error("Benchmark not found")
    }

    await Benchmark.findOneAndDelete();

    res.status(200).json(benchmark)

});

module.exports = { 
    getBenchmarks, 
    getBenchmark, 
    createBenchmark, 
    updateBenchmark, 
    deleteBenchmark,
}
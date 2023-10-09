const express = require('express')
const router = express.Router()
const validateToken = require("../middleware/validateTokenHandler")
const {
    createBenchmark,
    updateBenchmark,
} = require('../controllers/benchmark-controller')

router.post('/', validateToken, createBenchmark)
router.put('/:id', validateToken, updateBenchmark)

module.exports = router
const mongoose = require("mongoose")

const benchmarkSchema = mongoose.Schema({
    boulder_grade: {
        type: String,
        required: [true, "Boulder Grade is Required"]
    },
    route_grade: {
        type: String,
        required: [true, "Route Grade is Required"]
    }
},
{
    timestamps: false,
})

module.exports = mongoose.model("Benchmark", benchmarkSchema)
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const benchmarkSchema = new Schema({
    boulder_grade: {
        type: String
    },
    route_grade: {
        type: String
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},
{
    timestamps: false,
})

module.exports = mongoose.model("Benchmark", benchmarkSchema)
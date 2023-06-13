const mongoose = require("mongoose")
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    date: {
        type: String,
        required: [true, "Date is required"]
    },
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    time: {
        type: Number,
        required: [true, "Time is required"]
    },
    level: {
        type: String,
        required: [true, "Level is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
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

module.exports = mongoose.model("Workout", workoutSchema)

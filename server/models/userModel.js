const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "An account already exists with this email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    workouts: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Workout' 
    }],
    benchmark: {
        type: Schema.Types.ObjectId, 
        ref: 'Benchmark'
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)

const dotenv = require("dotenv").config()
const express = require("express")
const cors = require('cors')
const path = require('path');
const connectDb = require('./server/config/dbConnection')
const errorHandler = require('./server/middleware/errorHandler')

connectDb();
const app = express()

const port = process.env.PORT || 5001;

// middleware
app.use(cors());

app.use(express.json())
// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));
app.use("/api/users", require("./server/routes/user-routes"))
app.use("/api/workouts", require("./server/routes/workout-routes"))
app.use("/api/benchmarks", require("./server/routes/benchmark-routes"))
app.use(errorHandler)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/dist/'))
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/dist/index.html'))
}

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

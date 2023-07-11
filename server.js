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
app.use(cors({
    origin: "https://murmuring-chamber-41078-cebcac015bc4.herokuapp.com",
    credentials: true
}));

app.use(express.json())
// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));
app.use("/api/users", require("./server/routes/user-routes"))
app.use("/api/workouts", require("./server/routes/workout-routes"))
app.use("/api/benchmarks", require("./server/routes/benchmark-routes"))
app.use(errorHandler)

// The "catchall" handler: for any request that doesn't
// match one above, send back Vue's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

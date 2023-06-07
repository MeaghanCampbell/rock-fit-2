const express = require("express")
const connectDb = require('./server/config/dbConnection')
const errorHandler = require('./server/middleware/errorHandler')
const dotenv = require("dotenv").config()

connectDb();
const app = express()

const port = process.env.PORT || 5000;

// middleware
app.use(express.json())
app.use("/api/users", require("./server/routes/user-routes"))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
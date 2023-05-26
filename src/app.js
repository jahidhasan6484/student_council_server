const express = require('express')
const cors = require('cors')
const app = express()
 
// Application routes
const userRoutes = require("./app/modules/user/user.route")


// Using cors
app.use(cors())

// Parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user', userRoutes)

module.exports = app;
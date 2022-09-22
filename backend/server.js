// import libraries
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// import routes
const loginRoute = require('./routes/loginRoute')
const requestRoute = require('./routes/requestRoute')

// import environment variables
const PORT = process.env.PORT || 3000
const mong_uri = process.env.MONG_URI

// call express
const app = express()

// middleware to parse json
app.use(express.json())

// middleware to print path and method requested
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// connect files to get response to routes
app.use(loginRoute)
app.use('/request', requestRoute)

// connect using try and catch
// mongoose.connect(async () => {
//     try {
//         await mongoose.connect(mong_uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false,
//             useCreateIndex: true
//         })
//         console.log(`MongoDB connected at ${mong_uri}`)
//     } catch (err) {
//         console.log(err)
//     }
// })

// connect using then and catch
mongoose.connect(mong_uri)
    .then(() => {
        app.listen(PORT, console.log(`Connected to MongoDB: ${mong_uri}\nServer started on port ${PORT}`))
    })
    .catch((error) => {
        console.log(error)
    })
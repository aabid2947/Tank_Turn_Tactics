import express from 'express'
import mongoose from 'mongoose'

const app = express()


// attempting to use express.json() middleware in Express 
// application to parse JSON data from incoming requests
// middleware
app.use(express.json())


// Connecting to mongodb atlas database
mongoose.connect("connection string")
    .then(() => {
        console.log("connected")
        // running the server
        app.listen(5000, () => {
            console.log(89)
        })
    })
    .catch((e) => {
        console.log(e)
    })

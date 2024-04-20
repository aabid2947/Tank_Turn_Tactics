import express from 'express'
import mongoose from 'mongoose'

const app = express()


// attempting to use express.json() middleware in Express 
// application to parse JSON data from incoming requests
// middleware
app.use(express.json())


// Connecting to mongodb atlas database
mongoose.connect("mongodb+srv://aabidhussainpas:thor7860@cluster01.k97jqfq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01")
    .then(() => {
        console.log("connected")
        // running the server
        app.listen(5000, () => {
            console.log(69)
        })
    })
    .catch((e) => {
        console.log(e)
    })



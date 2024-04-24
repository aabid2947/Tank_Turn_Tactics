import express from 'express'
import mongoose from 'mongoose'
import UserRoutes from './Routes/Users.routes.js'
import TankRoutes from './Routes/Tank.routes.js'
import BoardRoutes from './Routes/Board.routes.js'

const app = express()


// attempting to use express.json() middleware in Express 
// application to parse JSON data from incoming requests
// middleware
app.use(express.json())


// Connecting to mongodb atlas database
mongoose.connect("connection string ")
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


// routes
app.use("/api/user",UserRoutes)
app.use('/api/tank',TankRoutes)
app.use('/api/board',BoardRoutes)


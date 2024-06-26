import express from 'express'
import mongoose from 'mongoose'
import UserRoutes from './Routes/Users.routes.js'
import TankRoutes from './Routes/Tank.routes.js'
import BoardRoutes from './Routes/Board.routes.js'
import cors from 'cors'

const app = express()

// Enable CORS for all routes
app.use(cors());
const connectionString = process.env.CONNECTION_STRING;


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
            console.log("5000 port")
        })
    })
    .catch((e) => {
        console.log(e)
    })


// routes
app.use("/api/user",UserRoutes)
app.use('/api/tank',TankRoutes)
app.use('/api/board',BoardRoutes)


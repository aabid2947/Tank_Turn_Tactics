import { createUser,getUser,deleteUser } from '../controller/Users.controller.js'


const express = require('express')
const router = express.Router()


// create User
router.post('/createUser',createUser)

// get user
router.get('/getUser',getUser)

// delete user
router.delete('/deleteUser',deleteUser)

module.exports = router
import { createUser,getUser,deleteUser } from '../controller/Users.controller.js'

import express from 'express'
const router = express.Router()


// create User
router.post('/createUser',createUser)

// get user
router.get('/getUser',getUser)

// delete user
router.delete('/deleteUser',deleteUser)

export default router
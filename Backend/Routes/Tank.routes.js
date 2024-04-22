import { createTank,updateColor,updateEnergy,updateRange,updatexCoordinate,updateyCoordinate,updateLife } from '../controller/Tank.controller.js'

const express = require('express')
const router = express.Router()

// createTank
router.post('/createTank',createTank)
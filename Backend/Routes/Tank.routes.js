import { createTank,updateColor,updateEnergy,updateRange,updatexCoordinate,updateyCoordinate,updateLife } from '../controller/Tank.controller.js'
import express from 'express'
const router = express.Router()

// createTank
router.post('/createTank',createTank)

export default router
import {getStudent} from '../controllers/student.controller.js'
import express from 'express'

const router = express.Router()

router.get('/', getStudent)

export default router
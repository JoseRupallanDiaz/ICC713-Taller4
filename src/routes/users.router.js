import { getUsers } from "../controllers/user.controller.js"
import { getmessageModelByUserId } from '../controllers/message.controller.js'
import express from 'express'

const router = express.Router()

router.get('/', getUsers)
router.get('/:userid/messages', getmessageModelByUserId)

export default router
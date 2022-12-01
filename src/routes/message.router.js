import {newMessage, deleteMessage} from '../controllers/message.controller.js'
import express from 'express'

const router = express.Router()

router.post('/', newMessage)
router.delete('/:messageid', deleteMessage)

export default router
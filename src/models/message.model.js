import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    message:{
        type: String,
        required: true
    }
})

const messageModel = mongoose.model('Message', messageSchema)

export default messageModel
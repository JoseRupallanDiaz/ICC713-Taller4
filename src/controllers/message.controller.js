import messageModel from '../models/message.model.js'

async function newMessage(request, response){
    if(request.body.userid == null){
        return response.status(400).send({
            success: false,
            error: "falta el campo usuid"
        })
    }
    if(request.body.message == null){
        return response.status(400).send({
            success: false,
            error: "falta el campo message"
        })
    }
    try{
        await messageModel.create({
            message: request.body.message,
            user: request.body.userid
        })
        return response.status(201).send({success: true})
    } catch(error){
        return response.status(500).send({
            success: false,
            error: error
        })
    }
}

async function getmessageModelByUserId(request, response){
    try {
        const userMessages = await messageModel.find({user: request.params.userid}).populate('user')
        return response.status(200).send({userMessages})
    } catch (error){
        return response.status(500).send({error})
    }
}

async function deleteMessage(request, response){
    try {
        messageModel.deleteOne({_id: request.params.messageid})
        return response.status(204).send({response: "mensaje eliminado"})
    } catch (error){
        return response.status(500).send({error})
    }
}

export {newMessage, getmessageModelByUserId, deleteMessage}
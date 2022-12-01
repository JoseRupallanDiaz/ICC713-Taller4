import user from '../models/user.model.js'

async function getUsers(request, response){
    try{
        const users = await user.find()
        return response.status(200).send({users})
    } catch (error){
        return response.status(500).send({error})
    }
}

export {getUsers}
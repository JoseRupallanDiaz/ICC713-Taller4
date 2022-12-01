import users from '../models/user.model.js'
import bcrypt from 'bcrypt'

function registerUser(request, response){
    if(request.body.name == null){
        return response.status(400).send({error: "falta el campo name"})
    }
    if(request.body.email == null){
        return response.status(400).send({error: "falta el campo email"})
    }
    if(request.body.dni == null){
        return response.status(400).send({error: "falta el campo dni"})
    }
    if(request.body.password == null){
        return response.status(400).send({error: "falta el campo password"})
    }
    const encryptedPassword = bcrypt.hashSync(request.body.password, 10)
    users.create({
        name: request.body.name,
        email: request.body.email,
        dni: request.body.dni,
        password: encryptedPassword
    }).then(() => {
        return response.status(201).send({response: true})
    }).catch(error => {
        return response.status(500).send({error})
    })
}

async function loginUser(request, response){
    if(request.body.password == null){
        return response.status(400).send({error: "falta el campo password"})
    }
    if(request.body.email == null){
        return response.status(400).send({error: "falta el campo email"})
    }
    try {
        const user = await users.findOne({email: request.body.email}).exec()
        console.log(user)
        const isMatch = await bcrypt.compare(request.body.password, user.password)
        if(isMatch){
            return response.status(200).send({logged: isMatch})
        } else {
            return response.status(401).send({logged: isMatch})
        }
    } catch (error) {
        return response.status(500).send({error})
    }
}

export {registerUser, loginUser}
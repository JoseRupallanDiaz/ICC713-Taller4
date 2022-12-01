import express from 'express'
import { PORT } from './src/configs/enviorments.js'
import mongoDB from './src/configs/mongo.js'

import studentRouter from './src/routes/student.router.js'
import authRouter from './src/routes/auth.router.js'
import usersRouter from './src/routes/users.router.js'
import messageRouter from './src/routes/message.router.js'

const app = express();

app.use(express.json())
app.use('/', studentRouter)
app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/messages', messageRouter)

async function startServer() {
    const isConnected = await mongoDB()
    if (isConnected) {
        registerModels()
        app.listen(PORT, () => {
            console.log('Server running successfully at port '+PORT)
        })
    } else {
        process.exit()
    }
};

async function registerModels(){
    await import('./src/models/user.model.js')
    await import('./src/models/message.model.js')
}

startServer();
import mongoose from 'mongoose'
import {DATABASE} from './enviorments.js'

export default function connectDB(){
    return mongoose
        .connect(DATABASE)
        .then(success => {
            console.log("MongoDB connected successfully")
            return true
        })
        .catch(error => {
            console.log("Failed to connect to MongoDB. Error:"+error)
            return false
        })
}
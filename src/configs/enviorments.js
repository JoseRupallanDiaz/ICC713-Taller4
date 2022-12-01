import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT
const DATABASE = process.env.DATABASE

export {PORT, DATABASE}
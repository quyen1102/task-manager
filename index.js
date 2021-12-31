

const express = require('express')
const app = express()
const routeTasks = require('./src/router/tasks')
const db =  require('./src/config/db/index')
require('dotenv').config()
const notFound = require('./src/middleware/not-found')
const errorHandlerMiddleware = require('./src/middleware/error-handle')

//middleware
app.use(express.static('./src/public'))
app.use(express.json())




//router
app.use('/api/v1/tasks', routeTasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = 3000


const start = async () =>{
    try{
        await db.connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server listenning on port ${port}`))
    }catch(err){
        console.log(err)
    }
}

start()
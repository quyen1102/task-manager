

const express = require('express')
const app = express()
const route = require('./src/router/index')

const db =  require('./src/config/db/index')
require('dotenv').config()

//middleware
app.use(express.static('./src/public'))
app.use(express.json())




//router
route(app)




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
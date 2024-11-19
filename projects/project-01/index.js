const express = require('express') 
const fs = require('fs')
const users = require('./MOCK_DATA.json') 
const dbConnect = require('./connection')
const userRouter = require('./routes/user')
const customMiddleWare = require('./middlewares')
const app  = express()
const PORT = 8000


// MiddleWare
app.use(express.urlencoded({extended:false}))
app.use(customMiddleWare.logRes('log.txt'))

// DB connection

dbConnect('mongodb://127.0.0.1:27017/userDb')
 .then(()=>console.log('Db is connected.'))
 .catch((err)=>console.log('Error in db connection',err))

 
//Routes

app.use('/api/users',userRouter)


app.listen(PORT , ()=>console.log(`server started at port ${PORT}`))

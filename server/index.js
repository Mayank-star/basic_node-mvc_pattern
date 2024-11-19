const http = require('http');
const fs = require('fs')
const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} New req. rec.\n`
    fs.appendFile('log.txt', log ,()=>{

        console.log('New req. recieved');
        res.end('Hello from server');
    })
})

myServer.listen(8000,()=>console.log("Server started !!!"))
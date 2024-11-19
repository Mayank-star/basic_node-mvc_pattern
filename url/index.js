const http = require('http');
const fs = require('fs');
const url = require('url')
const myServer = http.createServer((req,res)=>{
     if(req.url === '/favicon.ico') return;

     const log = `${Date.now()}: ${req.url} \n `;
     const myurl = url.parse(req.url , true)
     console.log(myurl)
     fs.appendFile('log.txt',log ,(err,data)=>{
        switch(myurl.pathname){
            case '/': res.end("Homepage")
            break

            case '/about':{
                const query = myurl.query.myname
                res.end(`I am  ${query}`)
            }
            break

            default:res.end("404 Not Found")
        }
     });

})

myServer.listen(8000,()=>console.log('server started'))
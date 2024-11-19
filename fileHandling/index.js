const fs = require('fs');

// Create a file

// sync ...

// fs.writeFileSync('./text.txt',"This is comes after override text");

// Async ...
 
// fs.writeFile('./text.txt',"This is comes after write file async text", (err)=>{console.log(err);})

// Read a file

// async
// const result = fs.readFileSync('./contact.txt','utf-8')
// console.log(result)

// fs.readFile('./contact.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(result)
//     }
// })

// Append data in a file 

// fs.appendFileSync("./contact.txt",'\nvijay : 8595869960')

// copy file

// fs.cpSync('./text.txt','./copy.txt')

// delete file

// fs.unlinkSync('./copy.txt')

// stats of a file

// console.log(fs.statSync('./contact.txt'));

// Make directory

// fs.mkdirSync("my-doc")
// fs.mkdirSync('new/a/d/c',{recursive:true})
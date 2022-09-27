// const names = require("./name")
// const sayHi = require("./function");

// sayHi(names.john);
// sayHi(names.peter);
//const os = require("os")
//console.log(os.userInfo());
//console.log(os.uptime());
// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalmem: os.totalmem(),
//     freemem: os.freemem(),
// } 
// console.log(currentOS);
// const {readFile,writeFileSync} =require("fs");
// readFile("./content/subfolder/first.txt",'utf8',(err,result)=>{
//     if(err){
//         console.log("err: you have been ditched my man")
//         return err;
//     } else
//         console.log(result);
// });
//const second = readFile("./content/subfolder/second.txt",'utf8');


//writeFileSync("./content/subfolder/testproduction.txt",`the content consists of ${first} ${second}`)









const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("welcome to our home page")
    }
    if(req.url=='/about'){
        res.end(`<h1>this is our about page<h1>`)
    }
    res.end(`<h1>Oops</h1> <p>Seems like someone didnt get his 
        required web result</p> <a href='/'>home</a> `)
})
server.listen(3500);
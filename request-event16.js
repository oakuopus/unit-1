const http = require("http")
// const server = http.createServer((req,res)=>{
//     if(req.url === "/"){
//         res.end("this is the home page")
//     }
// })

// using event emitter API
const server = http.createServer()
//emits request event
// sub to it/listen for it/respond to it
server.on("request", (req,res)=>{
    if(req.url === "/"){
        console.log(req.url)
        res.end("home page")
    }else if(req.url === "/about"){
        console.log(req.url)
        res.end("about page")
    }else{
        res.end("404 idiot found")
    }
})


server.listen(5001, (err)=>{
    if(err){
        console.log(err)
    }
    console.log("server on port 5001")
})
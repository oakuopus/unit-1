var http = require("http")
var fs = require("fs")

// in this example you can check the network respnses to see how the data is starting out as a large data file, then changes into a chunked version of 64kb

http.
    createServer(function(req,res){
        //this is not streamed examples
        // const text = fs.readFileSync("./content/big.txt", "utf8")
        // res.end(text)

        //this is streamed version
        const fileStream = fs.createReadStream("./content/big.txt", "utf8")
        fileStream.on("open", ()=>{
            fileStream.pipe(res)
        })
        fileStream.on("error", (err)=>{
            res.end(err)
        })
    })
    .listen(5000, ()=>{
        console.log("listenin on port 5k")
    })


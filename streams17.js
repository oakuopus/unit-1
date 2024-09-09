const {createReadStream, writeReadStream} = require("fs")

//default size of a chunk in bytes is 64kb
//last buffer - the remainder left
//highWaterMark - the controls the size of the chunks

const stream = createReadStream("./content/big.txt", {encoding: "utf8"})

stream.on("data", function(chunk){
    console.log(chunk)
    console.log("***************")
})
stream.on("error", (err) =>{console.log(err)})
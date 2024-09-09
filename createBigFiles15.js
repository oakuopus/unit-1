const {writeFileSync} = require("fs")

//every peice of data is written to the end of the file
for(let i = 0; i<100001; i++){
    writeFileSync("./content/big.txt", `helloworld ${i}`, {flag:"a"})
}

// //every peice of data overwrites the last bit of data
// for(let i = 0; i<10001; i++){
//     writeFileSync("./content/big.txt", `helloworld ${i}`, {flag:"w"})
// }

// //errors because ????????
// for(let i = 0; i<10001; i++){
//     writeFileSync("./content/big.txt", `helloworld ${i}`, {flag:"r"})
// }

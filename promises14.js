const {readFile, writeFile} = require("fs")
const path = require("path")
var ip = "127.0.0.1"

const myPromise = new Promise((resolve, reject)=>{
    //async ops here
    if(ip === "127.0.0.1" || ip === "127.0.0.5"){
        resolve("success")
    }else{
        reject("failed mission no respawn")
    }
})
console.log(myPromise)

var actualFile = path.join(__dirname, "/content/first.txt")
function processData(data){
    return new Promise((resolve, reject)=>{
        // you can alter or mod data here
        setTimeout(()=>{
            resolve(data.toUpperCase())
        }, 500)
    })
}

function saveData(data){
    return new Promise((resolve, reject)=>{
        // save local or to cloud
        setTimeout(()=>{
            resolve(`data saved: ${data}`)
        }, 500)
    })
}

function readFilePromise(pathway){
    return new Promise((resolve, reject)=>{
        readFile(pathway, "utf8", (err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

readFilePromise(actualFile)
    .then(content => processData(content))
    .then(pData => saveData(pData))
    .then(result =>{
        console.log(result) //Outputs data saved and the content uppercased
    })
    .catch(error =>{
        console.log(error)
    })




//get the custom emitter class, needed if you want to custom extend from class, otherwise for emitting and handles events create an instance of this class

const eventEmitter = require("events")
const { EventEmitter } = require("stream")
const customEmitter = new eventEmitter()

//the on and emit methods are to keep track of the order, you can also use additionalk argument/parameters and the built in function/module can utilize it

customEmitter.on("response",(name,id) =>{
    console.log(`data recieved user: ${name} with id ${id}`)
})

customEmitter.on("testing",() =>{
    console.log(`some other logic is at work here`)
})

customEmitter.emit("response", "john", 34)
customEmitter.emit("testing")

class TempuratureSensor extends EventEmitter{
    constructor(){
        super()
        this.tempurature = 95
    }
    updateTempurature(newTemp){
        this.tempurature = newTemp
        this.emit("TempuratureUpdate", newTemp)
    }
}
const sensor = new TempuratureSensor
//listener for temp updates
sensor.on("TempuratureUpdate", (temp)=>{
    console.log("Temp updated: " + temp + " Farenheit")
    //OR: trigger and new funct, API call or calc
})
// sim temp changes
sensor.updateTempurature(25)
sensor.updateTempurature(104)
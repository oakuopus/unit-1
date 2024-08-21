const os = require("os")
//info about the current user and users device
const user = os.userInfo()
console.log(user)

//Method returns the system uptime in sec
var mins = os.uptime() / 60
var hours = mins/60
console.log(`uptime in mins: ${mins}`)
console.log(`uptime in hours: ${hours}`)
console.log(`uptime in seconds: ${os.uptime}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    device: os.platform(),
    arch: os.arch(),
    
}
console.log(currentOS)

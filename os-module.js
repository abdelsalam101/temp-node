const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method return uptime in seconds
console.log(`The uptime is ${os.uptime()} seconds`)

const currentOS = {
    release: os.release(),
    name: os.type(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)
const app = require("./app")

const connect = require("./configs/db")



app.listen(3456,async()=>{
    await connect()
    console.log("listing on the port 3456")
})
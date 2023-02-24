const Express = require("express")
const Cors = require("cors")

const App = Express()

App.use(Cors())
App.use(Express.json())

App.get("/", (req, res)=>{
    res.send({name : "Mark Vivian", age : 19})
    console.log("the data has been send")
})

App.post("/", (req, res)=>{
    const data = req.body
    res.status(200).send("we have recieved the data")
})


App.listen(3000, ()=>{
    console.log("the server 3000 is running")
})
const Express = require("express")
const Cors = require("cors")

const App = Express()

App.use(Cors())

App.get('/', (req, res) => {
    res.send("hello wolrd")
})

App.post("/", (req, res)=>{
    const Data = req.body
    res.send(JSON.stringify({message : "the data has been recieved"}))

})

App.listen(3000, ()=>{
    console.log("the port is running")
})

//to run the server we use node filename.js

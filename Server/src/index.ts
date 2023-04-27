import express, { Application } from "express";
import cors from "cors";

const App:Application = express()

App.use(cors())
App.use(express.json())

App.listen(3000, ()=>{
    console.log(`http:localhost://3000 is running.`)
})
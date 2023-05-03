import express, { Application } from "express";
import cors from "cors";
const App:Application = express()
import HandleBets from "./Bets/HandleBets";
import HandleHistory from "./History/HandleHistory";
import HandleChat from "./Chat/HandleChat";


App.use(cors())
App.use(express.json())


App.use("/Chats", HandleChat)
App.use("/History", HandleHistory)
App.use("/Bets", HandleBets)


App.listen(3000, ()=>{
    console.log(`http:localhost://3000 is running.`)
})
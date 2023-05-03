import Express from "express";

const HandleBets = Express.Router()

HandleBets.get("/", (req, res)=>{
    res.status(200).send("the api's are working");
})

export default HandleBets;
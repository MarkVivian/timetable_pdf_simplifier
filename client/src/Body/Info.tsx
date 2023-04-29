import React from "react";
import Chat from "./Chat";
import History from "./History";
import CurrentBets from "./CurrentBets";

const Info:React.FC = () =>{
    return(
        <div className="info border-4 border-yellow-500">
            <CurrentBets />
            <Chat />
            <History />
        </div>
    )
}

export default Info;
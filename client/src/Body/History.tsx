import React, { useRef } from "react";

const History:React.FC = () =>{
    const HistoryRef = useRef<HTMLDivElement>(null);
    
    const HistoryGotten = () =>{
        return(
            <div className=" grid grid-cols-4 text-center">
                <span>time</span> 
                <span>username</span>   
                <span>Amount</span>     
                <span>Profit</span>   
            </div>
        )
    }
    
    function HideShow(event : React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        if(HistoryRef.current){
            const classToAdd = HistoryRef.current.classList;
            classToAdd.toggle("hide")
        }
    }
    
    return(
        <div className="history p-1">
            <button className=" w-[100%]" onClick={HideShow}>
                History
            </button>
            <div className="historyView hide w-[100%] border-purple-950 border-4 p-1 max-h-[17rem] md:max-h-[12rem] overflow-y-scroll" ref={HistoryRef}>
                
                <HistoryGotten />
                
            </div>
        </div>
    )
}

export default History;
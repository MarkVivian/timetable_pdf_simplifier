import React, { useRef } from "react";

const CurrentBets:React.FC = () =>{
    const BetsRef = useRef<HTMLDivElement>(null);
    
    const BetsGotten = () =>{
        return(
            <div className=" grid grid-cols-4 text-center m-2">
                <span>time</span> 
                <span>username</span>   
                <span>Amount</span>     
                <span>Profit</span>   
            </div>
        )
    }
    
    function HideShow(event : React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        if(BetsRef.current){
            const classToAdd = BetsRef.current.classList;
            classToAdd.toggle("hide")
        }
    }
    
    return(
        <div className="Bets p-1">
            <button className=" w-[100%]" onClick={HideShow}>
                Bets
            </button>
            <div className="BetsView w-[100%] border-purple-950 border-4 p-1 max-h-[17rem] md:max-h-[20rem] overflow-y-scroll" ref={BetsRef}>
                
                <BetsGotten />
                
            </div>
        </div>
    )
}

export default CurrentBets;
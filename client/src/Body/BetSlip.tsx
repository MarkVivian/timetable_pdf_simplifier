import React, { ChangeEvent, ReactHTMLElement, useEffect, useRef, useState } from "react";

interface inputInterface{
    Amount : number,
    Limit : number,
    Error? : String,
    state : String, // ? this is incharge of the text prompt of the button
    status : boolean, //? this will check whether its time to bet again
    betting : boolean // ? will check if the user is betting
}

const BetSlip:React.FC<{value:String, condition:boolean}> = ({value, condition}) =>{
    const [input, setInput] = useState<inputInterface>({
        Amount : 0,
        Limit : 0,
        state : value,
        status : condition,
        betting : false
    })
    const addReadOnly1 = useRef<HTMLInputElement>(null)
    const addReadOnly2 = useRef<HTMLInputElement>(null)
    
    function InputAdded(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        
        setInput((item)=>{
            return{
                ...item,
                [name] : value
            }
        })
        
    }
    
    function LetsBet(event : React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault();
        if(addReadOnly1.current && addReadOnly2.current){
            if(!condition){
                    if(addReadOnly1.current.readOnly && addReadOnly2.current.readOnly){
                        
                        addReadOnly1.current.readOnly = false;
                        addReadOnly2.current.readOnly = false;
                        
                        setInput((item)=>{
                            return{
                                ...item,
                                state : "lets bet",
                                betting : false
                            }
                        })
                        
                    }else{
                              
                        if(parseInt(addReadOnly1.current.value) < 10){
                            
                            setInput((item)=>{
                                return{
                                    ...item,
                                    Error : "the least amount to bet is 10 ksh"
                                }
                            })
                            
                        }else{
                                            
                            setInput((item)=>{
                                return{
                                    ...item,
                                    Error : "",
                                    state : "stop bet",
                                    betting : true
                                }
                        })
                        
                        addReadOnly1.current.readOnly = true;
                        addReadOnly2.current.readOnly = true;
                        
                    }
                }
                
            }else{
                if(!input.betting){
                    setInput((item)=>{
                        return{
                            ...item,
                            Error : "wait until the round is over to bet again"
                        }
                    })
                    
                }else{
                    addReadOnly1.current.readOnly = false;
                    addReadOnly2.current.readOnly = false;
                    
                    setInput((item)=>{
                        return{
                            ...item,
                            state : "lets bet",
                            betting : false
                        }
                    })
                }
            }
        }
        
    }
    
    return(
        <div className="betSlip p-1">
            <h1>
                {input.Error}
            </h1>
            <form className="inputTag m-2">
                
                <input type="number"
                       placeholder="Amount"
                       name="Amount"
                       value={input.Amount}
                       onChange={InputAdded}
                       className=" dark:bg-white bg-black dark:text-black text-white w-[40%]"
                       ref={addReadOnly1}
                />                
                
                <input type="number"
                       placeholder="Limit"
                       name="Limit"
                       value={input.Limit}
                       onChange={InputAdded}
                       className=" dark:bg-white bg-black float-right dark:text-black text-white w-[40%]" 
                       ref={addReadOnly2}
                />
                
            </form>
            
            <div className=" w-[100%] text-center">
                
                <button onClick={LetsBet} className=" bg-red-500 m-auto rounded-md p-2 w-[5rem]">
                    {input.state}
                </button>
                
            </div>

        </div>
    )
}

export default BetSlip;
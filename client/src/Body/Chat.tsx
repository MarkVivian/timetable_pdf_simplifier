import React, { useRef, useState } from "react";

const Chat:React.FC = () =>{
    const hideshowRef = useRef<HTMLDivElement>(null);
    const[chat, setChat] = useState({
        Message : ""
    })
    
    const Info =() =>{
        return(
            <div className=" border-[1px] dark:border-white border-black my-4">
                <div>
                    <span className="">name</span>
                    <span className=" float-right">time</span>
                </div>
                <div className=" text-center h-auto break-words w-[100%]">
                    message
                </div>
            </div>
        )
    }
    
    function Writting(event : React.ChangeEvent<HTMLInputElement>){
        const{name, value} = event.target
        
        setChat((item)=>{
            return{
                ...item,
                [name] : value
            }
        })
    }
    
    function SendMessage(event : React.MouseEvent<HTMLButtonElement>){
        event.preventDefault()
        
    }
    
    function HideShow(event : React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        if(hideshowRef.current){
            const classToAdd = hideshowRef.current.classList;
            classToAdd.toggle("hide")
        }
    }
    
    return(
        <div className="chat relative p-2">
            <button className=" w-[100%]" onClick={HideShow}>
                Chat
            </button>
            <div className="chatView hide w-[100%]" ref={hideshowRef}>
                <div className=" border-4 max-h-[16rem] overflow-y-scroll px-2">
                    <Info />
                </div>
                
                <div className="relative block w-[100%] gap-1 text-center my-2 md:gap-1">
                    <div>
                        userName
                    </div>
                    
                    <div className=" flex w-[100%] gap-2 overflow-hidden">
                        
                        <form className="md:w-[24rem] md:max-w-[25rem] bg-gray-300 w-[30rem] max-w-[33rem] ">
                            <input type="text"
                                    placeholder="enter message"
                                    value={chat.Message}
                                    onChange={Writting}
                                    name="Message" 
                                    className="w-[100%] dark:text-black text-white"
                                    />
                        </form>
                            <button onClick={SendMessage} className="md:max-w-[8rem] max-w-[12rem] relative float-right bg-purple-700 rounded-sm">
                                    Send
                            </button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Chat;
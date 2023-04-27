import React, { useRef, useState } from 'react'
import catWhite from "../assets/catLight.png";
import catDark from "../assets/catDark.png";
import menuDark from "../assets/menuDark.png";
import menuLight from "../assets/menuLight.png"

const Navbar:React.FC = () => {
    const classRef = useRef<HTMLDivElement>(null);
    const [Logoimage, setLogo] = useState(catDark)
    const [Menuimage, setMenu] = useState(menuDark)
    
    function ShowDropDown(){
        const values = classRef.current?.classList
        if(values?.contains("showDropDown")){
            values.remove("showDropDown");
        }else{
            values?.add("showDropDown");
        }
    }
    
    function ToggleDarkMode(){
        const bodyElement = document.querySelector('body')?.classList;
        if(bodyElement?.contains("dark")){
            bodyElement.remove("dark");
            setLogo(catDark);
            setMenu(menuDark);
        }else{
            bodyElement?.add("dark");
            setLogo(catWhite);
            setMenu(menuLight);
        }
    }
    
  return (
    <nav className=' relative m-auto flex border-b-4 border-black dark:border-white'>
            <div className=' flex'>
                <img src={Logoimage} alt='cat icon' className=' h-16' onClick={ToggleDarkMode}/>
                
                <span className=' m-auto ml-3 hidden md:flex'>
                    PAKAKUMI
                </span>
                
            </div>
            
            <div className=' m-auto'>
                 <div className=' hidden md:flex gap-8 ml-3'>{/*it will only be visible to screens above the md */}
                        <a href="#">Login</a>
                        <a href="#">Sign In</a>
                        <a href="#">Deposit</a>
                        <a href="#">Withdraw</a>
                 </div>
                 
                 
                 
                 <div className=' md:hidden flex m-auto'>{/*it will only be visible to screens below the md screen */}
                     <a href="#" onClick={ShowDropDown} className=' m-auto absolute top-0 right-0'>
                        <img src={Menuimage} alt='Menu bar' className=' h-16'/>
                     </a>
                     
                     <div className='hideDropDown' ref={classRef}>
                        <a href="#">Login</a>
                        <a href="#">Sign In</a>
                        <a href="#">Deposit</a>
                        <a href="#">Withdraw</a>
                     </div>
                 </div> 
            </div>
            
    </nav>
  )
}

export default Navbar;
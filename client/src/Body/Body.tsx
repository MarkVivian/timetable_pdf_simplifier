import React from 'react'
import Bet from './Bet'
import Info from './Info'

const Body:React.FC = () => {
  return (
      <>
        <div className='bodyTag p-2 md:flex m-1 h-[100%]'> 
          <Bet />
          <Info />
        </div>
      </>
  )
}

export default Body;
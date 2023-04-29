import React from 'react'
import Graph from './Graph'
import BetSlip from './BetSlip'

const Bet:React.FC = () => {
  
  return (
    <div className='bet border-4'>
      <Graph />
      <BetSlip value={"lets bet"} condition={true} />
    </div>
  )
}

export default Bet
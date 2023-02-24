import React, { useState } from 'react'
import "./Bet.css"

function Bet() {
  const [Betting, setBetting] = useState({
    EndPoint : 1,
    Amount : 10, 
    stopState : false,
    betState : false,
    timer : 0
  })
  return (
    <div className='betting'>
        <form>      
            
          <label htmlFor="EndPoint">Amount</label>
          
          <input 
          id="Amount"
          name="Amount"
          value={Betting.Amount}
          onChange={(events)=>{
            const {value} = events.target
            setBetting((item)=>{
              return{
                ...item,
                Amount : value
              }
            })
          }}
          />
          
          <label htmlFor="EndPoint">EndPoint</label>
          
          <input 
          id="EndPoint"
          name="EndPoint"
          value={Betting.EndPoint}
          onChange={(events)=>{
            const {value} = events.target
            setBetting((item)=>{
              return{
                ...item,
                EndPoint : value
              }
            })
          }}
          />
          
          <button type="Submit" onClick={(event)=>{
            event.preventDefault()
            console.log(Betting)

          }}>
            Bet
          </button>
          
        </form>
        
    </div>
  )
}

export default Bet
import React from 'react'
import Chat from './Chat/Chat'
import CurrentBet from './CurrentBets/CurrentBet'
import History from './History/History'



function Content() {
  return (
    <>
    
      <div>
          <Chat />
      </div>

      <div>
         <CurrentBet />
      </div>
      
      <div>
         <History />
      </div>
    
    </>
  )
}

export default Content
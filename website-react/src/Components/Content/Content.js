import Chat from './Chat/Chat'
import CurrentBet from './CurrentBets/CurrentBet'
import History from './History/History'
import "./Content.css"
import { useState } from 'react'

function Content() {
  const [state, setState] = useState({
    ChatState : false,
    CurrentBet : false,
    History : false
  })
  
  
  function ChangeState(event){
    const {name} = event.target
    console.log(name)
    setState((item)=>{
      return{
        ...item,
        [name] : true
      }
    })
  }
  
  return (
    <div className='ContentBox'>
    Content
      <div>
        <button name='ChatState' onClick={ChangeState}>Chats</button>
          {state.ChatState && <Chat />}
      </div>

      <div>
        <button name='CurrentBet' onClick={ChangeState}>Current Bets</button>
        { state.CurrentBet && <CurrentBet />}
      </div>
      
      <div>
        <button name='History' onClick={ChangeState}>History</button>
         { state.History && <History />}
      </div>
    
    </div>
  )
}

export default Content
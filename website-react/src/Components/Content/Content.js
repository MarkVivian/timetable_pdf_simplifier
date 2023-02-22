import Chat from './Chat/Chat'
import CurrentBet from './CurrentBets/CurrentBet'
import History from './History/History'
import "./Content.css"

function Content() {
  return (
    <div className='ContentBox'>
    
      <div>
          <Chat />
      </div>

      <div>
         <CurrentBet />
      </div>
      
      <div>
         <History />
      </div>
    
    </div>
  )
}

export default Content
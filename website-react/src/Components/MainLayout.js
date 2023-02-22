import Bet from "./Bet/Bet"
import Content from "./Content/Content"
import Graph from "./Graph/Graph"
import Navbar from "./Navbar/Navbar"

function MainLayout() {
  return (
    <>
        <nav>
            <Navbar />
        </nav>
        
        <div>
            
            <div>
                <Bet />
            </div>
            
            <div>
                <Graph />
            </div>
            
            <div>
                <Content />
            </div>
            
        </div>
        
    </>
  )
}

export default MainLayout
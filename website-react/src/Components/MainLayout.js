import Bet from "./Bet/Bet"
import Content from "./Content/Content"
import Graph from "./Graph/Graph"
import Navbar from "./Navbar/Navbar"
import "./MainLayout.css"

function MainLayout() {
  return (
    <>
    
        <nav>
            <Navbar />
        </nav>
        
        <div className="mainLayout">
            
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
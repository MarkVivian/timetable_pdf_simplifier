import React from "react";
import { Line } from "react-chartjs-2"; // since we want a line chart.
import {
    Chart as ChartJS, 
    LineElement,// since its a line element.
    CategoryScale, // allows us to draw x axis
    LinearScale, // allows us to draw y axis
    PointElement,
    Legend,
    Tooltip
} from "chart.js";

const Data = [
    { id: 1, year: 2021, usergain: 1000, userloss: 500 },
    { id: 2, year: 2022, usergain: 1500, userloss: 800 },
    { id: 3, year: 2023, usergain: 2000, userloss: 1000 },
    { id: 4, year: 2024, usergain: 2500, userloss: 1200 },
    { id: 5, year: 2025, usergain: 3000, userloss: 1500 },
    { id: 6, year: 2026, usergain: 3500, userloss: 1800 }
  ];
  
 
ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

const Graph:React.FC = () =>{
    
    const actualUse = {
        labels : Data.map((item) => item.year),
        datasets : [
            {
                label : "User Gain",
                data : Data.map((item)=> item.usergain),
                backgroundColors : "yellow",
                borderColor : "white",
                pointBorderColor : "red",
                tension : 2000  
            }
        ]
    }
    
    const options = {
        Plugins : {
            legend : true
        },
        scales : {
            y : {
                min : Data.reduce((acc, curr) => { return (acc.usergain > curr.usergain) ? acc : curr}).usergain,// the max value of y
                max :  Data.reduce((acc, curr) => { return (acc.usergain < curr.usergain) ? acc : curr}).usergain // the min value of y
            }
        }
    }
    
    return(
        <div className="graph">
              <Line
              data={actualUse}
              options={options}
              />
        </div>
    )
}

export default Graph;
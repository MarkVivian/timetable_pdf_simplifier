import React, { useEffect, useState } from "react";
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

interface useInterface {
    labels : string[],
    datasets : [
        {
            label : string,
            data : number[],
            backgroundColors : string,
            borderColor : string,
            pointBorderColor : string,
        }
    ]
}
  
 
ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
)

const Graph:React.FC = () =>{
    const [counter, setCounter] = useState<number>(1)
    
    useEffect(()=>{
       const intervalMade = setInterval(()=>{
            setCounter((value)=>{
                const count = value + 1
                if(value >= 10){
                    clearInterval(intervalMade)
                }
                return count   
            })
       }, 1000)
        
        return () => clearInterval(intervalMade)
        }, []) 
        
    const [actualUse, setActualUse] = useState<useInterface>({
        labels : [],
        datasets : [
            {
                label : "Pakakumi",
                data : [],
                backgroundColors : "yellow",
                borderColor : "white",
                pointBorderColor : "red",
            }
        ]
    })
    
    useEffect(()=>{
        setActualUse((value):useInterface=>{
            return{
                ...value,
                labels : [...value.labels.toString(), counter.toString()],
                datasets : [
                    {
                        ...value.datasets[0],
                        data : [...value.datasets[0].data, counter],
                    }
                ]
            }
        })
    }, [counter])   
 
    console.log(counter)
    
    const Options = {
        plugin : {
            legend : true,
            Animation: true
        },
        scales : {
            y : {
                min : 0,
                max : counter + 1    
             },
             x : {
                min : 0,
                max : counter + 1
             }  
        },
        Animation: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
    }
    
    return(
        <div className="graph">
              <Line
              data={actualUse}
              options={Options}
              />
        </div>
    )
}

export default Graph;
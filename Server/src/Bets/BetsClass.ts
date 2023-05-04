interface betInfo{
    total : number[],
    profit : number,
    chartValues : number[]
    
}

export default class BetsClass{
   private total:number[] = [];
   private value!:number;
   private ChartValue!:number[];
   private profit!:number;
   
   constructor(value:number){
    this.value=value;
   }
    
    CalculateBets(userBet:number){
        for(var i = 0; i <= this.value; i+=0.1){
            const value = Math.round(i*10)/10
           this.total.push(userBet * value);
        }
        this.profit= Math.max(...this.total)
    }
    
    
    GetBetInfo():betInfo{
        return{
            total: this.total,
            profit: this.profit,
            chartValues: this.ChartValue
        }
    }
    
    ChartList(){
        const chart:number[] = []
        for(var i =0; i <= this.value; i+=0.1){
            chart.push(Math.round(i*10)/10)
        }
        this.ChartValue = chart;
    }

}
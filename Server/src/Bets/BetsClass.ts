export default class BetsClass{
   private total:number[] = [];
   private value!:number;
   
   SetValue(value:number){
    this.value=value;
   }
    
    CalculateBets(userBet:number){
        for(var i = 0; i <= this.value; i+=0.1){
            const value = Math.round(i*10)/10
           this.total.push(userBet * value);
        }
    }
    
    GetTotal():number[]{
        return this.total;   
    }
    
    ChartList():number[]{
        const chartValue:number[] = []
        for(var i =0; i <= this.value; i+=0.1){
            chartValue.push(Math.round(i*10)/10)
        }
        return chartValue
    }
}
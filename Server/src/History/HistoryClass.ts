interface historyInterface{
    name : string,
    Bet : number,
    Profit : number
}

export default class HistoryClass{
    private name!:string;
    private Bet!: number;
    private Profit!:number;
    
    constructor(name:string, Bet:number, Profit:number) {
        this.name = name;
        this.Bet = Bet;
        this.Profit = Profit;
    }
    
    GetHistoryInfo():historyInterface{
        return{
            name : this.name,
            Bet : this.Bet,
            Profit : this.Profit
        }
    }
}
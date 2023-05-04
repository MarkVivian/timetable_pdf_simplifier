import HistoryClass from "../History/HistoryClass"

describe("history class should be functional", ()=>{
    var History:HistoryClass;
    var name:string = "Mark";
    var Bet:number = 5;
    var Profit:number = 100;
    beforeAll(()=>{
        History = new HistoryClass(name, Bet, Profit)
    })
    
    test("the value to be returned", ()=>{
        expect(History.GetHistoryInfo()).toStrictEqual({
            name : name,
            Bet : Bet,
            Profit : Profit
        })
    })
})
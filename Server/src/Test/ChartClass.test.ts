import ChartClass from "../Chat/ChartClass"

describe("the chart class should be allocate all values", ()=>{
    var Chart:ChartClass;
    var name = "Mark"
    var message = "this is a vague message"
    
    beforeAll(()=>{
        Chart = new ChartClass(name, message)
    })
    
    test("should return current time", ()=>{
        expect(Chart.SetTime()).toBe(`${new Date().getHours()}:${new Date().getMinutes()}`)
    })
    
    test("should return the name, time and message", ()=>{
        expect(Chart.GetChartInfo()).toEqual({
            name : name,
            message : message,
            currentTime : `${new Date().getHours()}:${new Date().getMinutes()}`
        });
    })
})
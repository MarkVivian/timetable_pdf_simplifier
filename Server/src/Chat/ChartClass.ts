interface chartInfo{
    name : string,
    message : string,
    currentTime: string
}

export default class ChartClass{
    private name!:string;
    private message!:string;
    private time = new Date();
    
    constructor(name:string, message:string){
        this.name = name;
        this.message = message;
    }
    
    SetTime():string{
        var hour = this.time.getHours();
        var minute = this.time.getMinutes()
        var currentTime = `${hour}:${minute}`
        return currentTime;
    }
    
    GetChartInfo():chartInfo{
        return{
            name : this.name,
            message : this.message,
            currentTime : this.SetTime()
        }
    }
}
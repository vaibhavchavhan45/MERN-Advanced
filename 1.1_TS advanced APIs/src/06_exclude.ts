type OccuringEvent = "click" | "scroll" | "mouseover"
type ExcludeOccuringEvent = Exclude<OccuringEvent, "scroll">

function events(arg: ExcludeOccuringEvent){
    console.log(`Occuring Event is ${arg}`);
}

events("click")
//events("scroll") //Excluding the event scroll
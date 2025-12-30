//Passing a argument to the function
function greet(firstName : string){
    console.log(`Hello , ${firstName}`)
}
greet("Vaibhav")

//nothing returning (void)
function Sum(a :number, b : number): void{
    console.log(a+b)
}
Sum(1, 4)

//returning a number
function SumReturn(a :number, b : number): number{
    return a+b
}
console.log(SumReturn(1, 4))

//passing function as argument
 function RunAfter1Sec(fn: ()=> void){
    setTimeout(fn, 1000);
}
RunAfter1Sec(function(){
    console.log("Hi there");
})
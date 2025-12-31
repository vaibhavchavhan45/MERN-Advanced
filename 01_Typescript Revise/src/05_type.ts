//without types
function greetToPerson(id : number | string){
  console.log(`Hello user with the id ${id}` );
  
}
greetToPerson(1)
greetToPerson("Vaibhav")

//with types(Union)
type greetArgs = number | string | boolean
function greetWithType(id : greetArgs){
  console.log(`Greeting for the user whose id is ${id}`);
}
greetWithType("vaibhav")
greetWithType(100)


//type (Intersection)
type Employee = {
  name : string,
  startDate : Date
}
type Manager = {
  name : string,
  department : string
}
type TeamLead = Employee & Manager
const teamLead : TeamLead = {
  name : "Vaibhav",
  startDate : new Date,
  department : "SDE-2"
}
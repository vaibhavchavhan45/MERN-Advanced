//filters and array with types
interface User{
  name : string,
  age : number
}
function FilteredArray(users : User[]){
  return users.filter(x => x.age >=18)
}

const logging = FilteredArray([{
  name : "A",
  age : 1 
},{
  name : "B",
  age : 20
}])
console.log(logging);
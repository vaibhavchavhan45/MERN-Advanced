//Unstructured way defined type-safety
function isLegal(user: {
  firstName : string,
  lastName : string,
  age : number
}){
  if(user.age >= 18){
    return true
  }
  else return false
}

const obj = isLegal({
  firstName : "Vaibhav",
  lastName : "Chavhan",
  age : 20
})
console.log(obj);

//Interface
interface UserObj {
  firstName : string,
  lastName : string,
  age : number
}

function mainInterface(user : UserObj){
  return user.age >= 18
}

const didReturn = mainInterface({
  firstName : "Vaibhav",
  lastName : "Chavhan",
  age : 2
})
console.log(didReturn);
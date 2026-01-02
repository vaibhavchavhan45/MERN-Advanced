//Way to declare Map in JS
const users = new Map()
users.set("rasha@qdl", {name: "rasha", email: "rasha@gmail.com", age: 22})
users.set("sara@qdl", {name: "sara", email: "sara@gmail.com", age: 25})

const user = users.get("rasha@qdl")
console.log(user);

//Way to declare Map in TS
interface User{
    name : string
    age : number
    email : string
}
const newUser = new Map<string, User>()
newUser.set("abc@qsl", {name: "abc", email: "abc@gmail.com", age: 10})
newUser.set("def@qsl", {name: "def", email: "def@gmail.com", age: 14})

const printNewUser = newUser.get("def@qsl")
console.log(printNewUser);

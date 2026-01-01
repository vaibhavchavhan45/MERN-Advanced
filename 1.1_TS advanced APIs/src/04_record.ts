//Conventional way (ugly approach)
type Users = {[key : string] : {
    id : string
    name : string
}}

const users: Users = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

//OR
interface User1 {
    id : string
    name : string
}

type Users1 = {[key : string] : User1}

const users1: Users1 = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
console.log(users["abc123"]);
console.log(users1);

//Record
//E.g. 1
interface UsersSchema {
    id: number,
    name: string
}

type usersTypes = Record<string, UsersSchema>

const recordedUser: usersTypes = {
    "ava@123" : {id: 1, name: "ava"},
    "axa@123" : {id: 2, name: "axa"}
}
console.log(recordedUser);


// E.g. 2
interface UserSchema {
    id: number
    name: {
        firstName: string
        lastName: string
    }
}

type UserType = Record<string, UserSchema>

const recordUser : UserType = {
    "ava@123" : {id: 1, name: {firstName: "ava", lastName: "adam"}},
    "axa@123" : {id: 2, name: {firstName: "axa", lastName: "adam"}}
}
console.log(recordUser);
console.log(recordUser["ava@123"]); //To get value using cleaner syntax we use map.get()


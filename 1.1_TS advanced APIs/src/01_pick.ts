//Pick
interface User {
    name : string,
    email : string,
    age : 21,
    password : string,
    createdAt : Date
}

type UserProfile = Pick<User, "name" | "email">

function userDetails(user: UserProfile){
    console.log(`Name of the user is ${user.name} and email is ${user.email}`);
}

userDetails({
    name : "Vaibhav",
    email : "vc@gmail.com"
})
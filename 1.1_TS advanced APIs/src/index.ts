//interface Revise
interface Age {
    name : string,
    age : number
}

function sumAges(user1: Age, user2: Age){
    return user1.age + user2.age
}

const sum = sumAges({
    name : "vaibhav",
    age : 21
},{
    name : "chavhan",
    age : 25
})

console.log(sum);

//Slides link : https://projects.100xdevs.com/tracks/ts-hard/ts-hard-1
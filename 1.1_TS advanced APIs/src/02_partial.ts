//Partial
interface Userinfo {
    name : string,
    email : string,
    age : 21,
    password : string,
    createdAt : Date
}

type partialUserinfo = Partial<Userinfo>

function PrintUserInfo(info: partialUserinfo){
    console.log(`Received information : ${info.name}, ${info.email} `);   
}
PrintUserInfo({})
PrintUserInfo({name : "vc"})
PrintUserInfo({
    name : "vaibhav",
    email: "vc@gmail.com",
    age : 21
})



//E.g. 2
interface Car {
    name : string
    engine : string
    validYr : number
    mode : string
}

type pickCarData = Pick<Car, "name" | "mode" | "engine">

type partialCarData = Partial<pickCarData>

function getCarData(data: partialCarData){
    console.log(data.engine);
    console.log(data.mode);
}

getCarData({
    engine : "250cc",
    mode : "hybrid"
})
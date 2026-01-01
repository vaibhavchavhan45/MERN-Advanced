interface userDetails{
    name : string,
    readonly email : string,
    readonly phoneno : number
}

const user : userDetails = {
    name : "vc",
    email : "vc@gmail.com",
    phoneno : 1234567890
}

console.log(user.name)
user.name = "ac"
console.log(user.name);
//user.email = "ac@gmail.com" //email field is readonly. It cannot be re-assigned


//E.g. 2
interface AppSettings{
    version : string
    launch : number
    device : string
    port : number
}

function access(data: Readonly<AppSettings>){
    //data.version = "12.7.5" //cannot assign because of readonly
    console.log(data.version);
    return data.port
}

const accesss = access({
    version : "12.5.7",
    launch : 2025,
    device : "xiomi",
    port : 8080
})
console.log(accesss);






import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Inserting the new user
async function insertUser(username: string, firstName: string, lastName: string, password: string) {
  const res = await prisma.user.create({
    data: {
      email : username,
      firstName,
      lastName,
      password
    },
    select: {
      id: true, 
      email: true
    }
  });

  console.log(res);
}
insertUser("vac123123@gmail.com", "vc", "ac", "1234567");

//Updating the existing user
interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {firstName, lastName}: UpdateParams){
  const res = await prisma.user.update({
    where: {email: username},
    data: {
        firstName,
        lastName
    }
  })
  console.log(res);
}
// updateUser("vc12@gmail.com", {
//   firstName: "V",
//   lastName: "Chavhan"
// })
 

//Fetching user details
async function userDetails(username: string){
    let res = await prisma.user.findFirst({
      where: {
        email: username
      }
    })
    console.log(res)
    console.log(res?.firstName, res?.lastName);
    
}
//userDetails("vac@gmail.com")

//Todos
async function createTodo(userId: number, title: string, description: string) {
    const response = await prisma.todo.create({
        data: {
            userId,
            title,
            description
        }
    })
    console.log(response);
    
}
//createTodo(1, "Do ur works", "nothinnnnnnnng")


async function getTodos(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
        userId: userId,
        },
    });
    console.log(todos);
}

getTodos(1);

async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    });
    console.log(todos);
}

//getTodosAndUserDetails(1);
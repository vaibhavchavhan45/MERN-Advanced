import { Client } from "../node_modules/@types/pg/index.js";

// const client = new Client({
//   connectionString: "connection string",
// });

//OR

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "your_db_password",
});

async function createTable() {
  await client.connect();

  const res = await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
    );
`);
  console.log(res);
}
createTable();

//Insert user
async function insertUser(username: string, email: string, password: string){
  try {
    client.connect()
    const insertQuery = `INSERT INTO users(username, email, password) VALUES($1, $2, $3)`
    const values = [username, email, password]
    const res = await client.query(insertQuery, values);
    console.log(res);
  }
  catch(e){
    console.log(`Error during insertion ${e}`);
  }
  finally{
    await client.end()
  }
}
insertUser("vc", "vc@gmail.com", "1234567")

//Update user
async function updateData(password: string, email: string){
  try{
    await client.connect()
    const query = `UPDATE users
    SET PASSWORD=$1
    WHERE email=$2`

    const values = [password, email]
    const res = await client.query(query, values)    
    console.log(res.rows);
  }
  catch(e){
    console.log("Error in updating user");
  }
  finally{
    await client.end();
  }
}
updateData("12345", "vc@gmail.com")

//select the single user (query using id)
async function select(id: string){
  try{
  client.connect()
  const query = `SELECT * FROM users WHERE id=$1`
  const values = [id]
  const res = await client.query(query, values)
  console.log(res.rows[0]);
  }
  catch(e){
  console.log("Error in select");
  
  }
  finally{
    await client.end();
  }
}
select("1")



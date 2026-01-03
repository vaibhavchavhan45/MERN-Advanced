import { Client } from "pg";

const client = new Client({
  connectionString:
    "POSTGRES_DATABASE_URL",
});

async function createUsersTable() {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL");

    await client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `);
    const username: string = "vaibhav";
    const email: string = "vaibhav@example.com";
    const password: string = "12345";

    const insertQuery =
      "INSERT INTO users(username, email, password) VALUES ($1, $2, $3)";
    const values: [string, string, string] = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log(`Data Insertion Successful ${res}`);
  } 
  catch (e) {
    console.log(`Error in data Insertion ${e}`);
  } 
  finally {
    await client.end();
    console.log("Connection closed");
  }
}

async function getUser(email: string){
  try{
    const findQuery = "SELECT * FROM users WHERE email = $1"
    const values = [email]
    const result = await client.query(findQuery, values)
    if(result.rows.length > 0){
      console.log(`User found ${result.rows[0]}`);
      return result.rows[0]
    }
  else{
    console.log(`No user found`);
    return null
  }
  }
  catch(e){
    console.log(`Error in finding the user ${e}`);
    return e
  }
}

async function driverFunc(){
  try{
    await createUsersTable();

    await getUser("vaibhav@example.com");
  }
  finally{
    await client.end();
    console.log("Connection closed");
  }
}
driverFunc()


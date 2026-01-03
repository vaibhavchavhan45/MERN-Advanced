import { Client } from 'pg'

async function txn(username: string, email:string, password: string, city: string, country:string, street: string, pincode: string){
    const client = new Client({
        host: "localhost",
        port: 5432,
        user: "postgres",
        password: "mysecretpassword",
        database: "postgres"
    })

    try{
        await client.connect()

        await client.query('BEGIN')

        const insertUser = `INSERT INTO users(email, username, password) 
        VALUES($1, $2, $3)
        RETURNING id;`
        const values = [email, username, password]
        const userRes = await client.query(insertUser, values)
        const userId = userRes.rows[0].id

        const insertAddress = `INSERT INTO addresses(user_id, city, country, street, pincode)
        VALUES($1, $2, $3, $4, $5);`
        await client.query(insertAddress, [userId, city, country, street, pincode])

        await client.query('COMMIT')

        console.log("txn successful");
    }
    catch(e){
        await client.query('ROLLBACK');
        console.log(`error during txn ${e}`);
        throw e
    }
    finally{
        await client.end()
    }
}

txn("Alice Doe", "alicedoe@gmail.com", "1234567", "New York", "USA", "St Broadway", "100010")
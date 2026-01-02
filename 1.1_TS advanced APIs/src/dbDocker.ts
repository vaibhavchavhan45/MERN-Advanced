// Import the pg library
import {Client} from 'pg'

// Define your connection string (replace placeholders with your actual data)
const connectionString = 'db url'

// Create a new client instance with the connection string
const client = new Client({
  connectionString: connectionString
});

// Connect to the database
async function main() {
  try {
    await client.connect();
    console.log('connected to the database');
    
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    
    await client.end();
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
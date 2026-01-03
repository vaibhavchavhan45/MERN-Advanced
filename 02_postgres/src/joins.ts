import { Pool } from "pg";

const pool = new Pool({
  connectionString: "db url",
});

async function main() {
  await pool.connect();

  await pool.query(`
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await pool.query(`
    CREATE TABLE addresses(
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL,
      city VARCHAR(255) NOT NULL,
      country VARCHAR(255) NOT NULL,
      street VARCHAR(255) NOT NULL,
      pincode VARCHAR(20),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);

  await pool.query(`
    INSERT INTO addresses (user_id, city, country, street, pincode)
    VALUES (1, 'New York', 'USA', '123 Broadway St', '10001');
  `);

  await pool.query(`
    SELECT city, country, street, pincode
    FROM addresses
    WHERE user_id = 1;
  `);

  await pool.query(`
    SELECT 
      users.username, 
      users.email, 
      addresses.city, 
      addresses.country, 
      addresses.pincode, 
      addresses.street
    FROM users
    JOIN addresses ON users.id = addresses.user_id
    WHERE users.id = 1;
  `);
}

main();

import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "Thimbo",
  database: "gestion_recette",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const connection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Connected using connection pool!");
    return connection;
  } catch (err) {
    console.error("Connection failed: ", err.message);
    throw err;
  }
};

connection();
export default { pool, connection };

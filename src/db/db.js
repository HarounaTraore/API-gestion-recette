import { config } from "dotenv";
import { createPool } from "mysql2/promise";

config();

export const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT || 3306,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: process.env.WFC === "true",
  connectionLimit: parseInt(process.env.CL) || 10,
  queueLimit: parseInt(process.env.QL) || 0,
});

const connection = async () => {
  try {
    const conn = await pool.getConnection();
    console.log("Connected using connection pool!");
    return conn;
  } catch (err) {
    console.error("Connection failed: ", err.message);
  }
};
connection();

// mysql connect

import mysql from "mysql2";
export function connection() {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
  });
}

export default connection;
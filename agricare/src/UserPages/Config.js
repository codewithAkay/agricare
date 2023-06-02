// module.exports = {
//     host: "localhost",
//     user: "root",
//     password: "root12345678",
//     database: "agricare",
//   };
  

import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: process.env.DB_KEY,
  database:"blog"
})
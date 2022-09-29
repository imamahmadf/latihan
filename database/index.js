const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db_kantor",
  port: 3306,
  multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    return console.error(`error : ${err.message}`);
  }
  console.log("connected to MySQL server");
});

module.exports = { db };

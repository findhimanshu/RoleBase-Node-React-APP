const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root2",
  password: "root2",
  database: "one",
});

module.exports = connection;

const mysql = require("mysql2/promise");

const pools = mysql.createPool({
  host: "localhost",
  database: "blog",
  user: "root",
  password: "testers",
});

module.exports = pools.promise;

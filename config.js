const Pool = require("pg").Pool;

const PORT = 5432;

const pool = new Pool({
  user: "postgres",
  password: "pirate",
  host: "localhost",
  port: PORT,
  database: "todoapp",
});

module.exports = pool;

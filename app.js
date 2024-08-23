const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = process.env.port || 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: "root",
  password: "test",
  database: "test",
});

db.connect((err) => {
  if (err) {
    console.error("Mysql connection error");
    process.exit(1);
  }

  console.log("Connected to Mysql");
});

app.get("/db", async (req, res) => {
  db.query("SELECT 1 AS result", (err, results) => {
    if (err) {
      console.error("Mysql query error");
      res.status(500).send("Mysql query error!");
    }

    res.json({ message: "DB connection is OK" });
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Hello to CI/CD" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { port };

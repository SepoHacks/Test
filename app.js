const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

const db = mysql.createPool({
  host: "localhost",
  user: "test",
  password: "test",
  database: "test",
});

app.get("/db", async (req, res) => {
  try {
    const [result] = await db.query("SELECT 1 AS result");
    res.json({ message: "DB connection is OK" });
  } catch (error) {
    console.error("Mysql error");
    res.status(500).send("Mysql error!");
  }
});

app.get("/", (req, res) => {
  res.json({ message: "Hello to CI/CD" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { port };

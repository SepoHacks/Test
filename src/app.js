const express = require("express");
const crypto = require("crypto");

const app = express();
const port = process.env.PORT || 3000;

const database = require("./config/database.config.js");

const Test = require("./models/test.model.js");

app.get("/db", async (req, res) => {
  try {
    const test = crypto.randomUUID();
    await Test.create({ name: test });

    return res
      .status(200)
      .json({ status: true, message: "Database connected" });
  } catch (error) {
    console.error("[-] Error testing database connection", error);
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error" });
  }
});

app.get("/", (req, res) => {
  res.status(200).json({ status: true, message: "Hello World" });
});

const startApp = async () => {
  try {
    console.log("[+] Starting app on port", port);
    await database.authenticate();

    console.log("[+] Connected to the database");

    await database.sync();

    console.log("[+] Database synced");

    app.listen(port, () => {
      console.log(`[+] Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("[-] Error starting app", error);
    process.exit(1);
  }
};

console.log("E");

startApp();

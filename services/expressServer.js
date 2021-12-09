// const express = require("express");
// const app = express();
// const path = require("path");
// const fs = require("fs");

// const PORT = 8080;

// const contacts = fs.readFileSync("./db/contacts.json", "utf8");

// app.get("/home", (reg, res) => {
//   res.send(JSON.parse(contacts));
// });

// app.post("/home", (reg, res) => {
//   res.send("post request");
// });

// app.delete("/home", (reg, res) => {
//   res.send("delete request");
// });

// app.use((reg, res) => {
//   res.send("use request");
// });

// app.listen(PORT, (err) => {
//   if (err) console.error("error at server:", err);
//   console.log(`server works at ${PORT} `);
// });

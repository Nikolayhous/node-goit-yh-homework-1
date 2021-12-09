const { writeFile } = require("fs");
const fs = require("fs/promises");
const path = require("path");
// const app = express();
const argv = process.argv;

// const PORT = 8080;

const contactsPath = path.join(__dirname, "./db/contacts.json");
// const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, "utf8");
    console.log(JSON.parse(contacts));
  } catch (error) {
    console.log(error.message);
  }
}

async function addContacts() {
  let data;
  try {
    data = await fs.readFile(contactsPath, "utf8");
  } catch (error) {
    console.log(error.message);
  }
  const content = JSON.parse(data);
  if (argv[2] === "--list") {
    console.table(content);
  } else if (argv[2] === void 0) {
    console.log("Unknown command");
  } else {
    const id = argv[2];
    const name = argv[3];
    const email = argv[4];
    const phone = argv[5];
    content.push({ id, name, email, phone });
    await fs.writeFile(contactsPath, JSON.stringify(content));
  }
}

// function getContactById() {
//   app.get("/home", (reg, res) => {
//     res.send(contactsPath);
//   });
// }
// app.listen(PORT, (err) => {
//   if (err) console.error("error at server:", err);
//   console.log(`server works at ${PORT} `);
// });

// async  (contactsPath) => {
//   const contacts = await fs.readFile(contactsPath, "utf8");
//   console.log(contacts);
//   await fs.mkdir("./contacts", { recursive: false });
//   await fs.writeFile("./contacts/index.js", `${contacts}console.log('Hello')`);
// }(contactsPath);

module.exports = {
  listContacts,
  addContacts()
};



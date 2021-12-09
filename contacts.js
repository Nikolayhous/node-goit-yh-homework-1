const fs = require("fs/promises");
const path = require("path");

const argv = process.argv;

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

async function addContacts(id, name, email, phone) {
  let data;
  try {
    data = await fs.readFile(contactsPath, "utf8");
  } catch {
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
    return await fs.writeFile(contactsPath, JSON.stringify(content, null, 2));
  }
}

// async function removeContacts() {
//   try {
//     const contactId = await fs.readFile(contactsPath, "utf8");
//     contactId.filter((contactId) => {
//       contactId.id !== contactId;
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
//   const id = argv[2];

//   return await fs.writeFile(
//     contactId.filter((contactId) => {
//       id !== contactId;
//     })
//   );
// }

module.exports = {
  listContacts,
  addContacts,
};

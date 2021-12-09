const fs = require("fs/promises");
const path = require("path");

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

async function addContacts(name, email, phone) {
  let data;
  try {
    data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    contacts.push({
      id: contacts.length + 1,
      name: name,
      email: email,
      phone: phone,
    });
    console.table(contacts);
    return await fs.writeFile(contactsPath, JSON.stringify(contacts));
  } catch (error) {
    console.log(error.message);
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

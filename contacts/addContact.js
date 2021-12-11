const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const contactsPath = path.join(__dirname, "../db", "contacts.json");

const readContent = async () => {
  try {
    const content = await fs.readFile(contactsPath, "utf8");
    const result = JSON.parse(content);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const contacts = await readContent();
    const newContact = { id: crypto.randomUUID(), name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 4));
    return newContact;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = addContact;

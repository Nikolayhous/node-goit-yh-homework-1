const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "../db", "contacts.json");

const listContacts = async () => {
  try {
    const content = await fs.readFile(contactsPath, "utf8");
    const result = JSON.parse(content);
    console.table(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = listContacts;

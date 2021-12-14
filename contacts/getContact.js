const fs = require("fs/promises");
const path = require("path");

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

const getContactById = async (contactId) => {
  try {
    const contacts = await readContent();
    const [contact] = contacts.filter((contact) => contact.id === contactId);
    return contact;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getContactById;

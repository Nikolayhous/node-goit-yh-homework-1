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

const removeContact = async (contactId) => {
  try {
    const contacts = await readContent();
    const id = contacts.findIndex(
      (contact) => contactId === contact.id.toString()
    );
    if (id === -1) {
      return;
    }
    const update = contacts.splice(id, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return update;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = removeContact;

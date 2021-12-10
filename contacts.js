const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const contactsPath = async () => {
  try {
    const content = await fs.readFile(
      path.join(__dirname, "db", "contacts.json"),
      "utf8"
    );
    const result = JSON.parse(content);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

const listContacts = async () => {
  try {
    return await contactsPath();
  } catch (error) {
    console.log(error.message);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const contacts = await contactsPath();
    const newContact = { name, email, phone, id: crypto.randomUUID() };
    contacts.push(newContact);
    await fs.writeFile(
      path.join(__dirname, "db", "contacts.json"),
      JSON.stringify(contacts, null, 4)
    );
    return newContact;
  } catch (error) {
    console.log(error.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await contactsPath();
    const [contact] = contacts.filter((contact) => contact.id === contactId);
    return contact;
  } catch (error) {
    console.log(error.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await contactsPath();
    const deleteContact = await contacts.filter(
      (contact) => contact.id !== contactId
    );
    if (deleteContact.length === contacts.length) {
      console.log(
        `Contact with ID "${contactId}" don't removed! ID "${contactId}" not found!`
      );
      return;
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listContacts,
  addContact,
  getContactById,
  removeContact,
};

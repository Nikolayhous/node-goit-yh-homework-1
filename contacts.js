const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "./db/contacts.json");
// const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, "utf8");
    console.table(JSON.parse(contacts));
    return JSON.parse(contacts);
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    contacts.push({
      id: v4(),
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

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    const contact = await contacts.find((contact) => {
      if (contact.id === contactId) {
        console.log(`Get contact ${contactId}:`);
        console.table(contact);
        return contact;
      }
    });
    if (contact === null) {
      console.log(`Contact ${contactId} not found`);
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    const newContact = await contacts.filter(
      (contact) => contact.id !== contactId
    );
    if (newContact.length === contacts.length) {
      console.log(
        `Contact with ID "${contactId}" don't removed! ID "${contactId}" not found!`
      );
      return;
    }
  } catch (error) {
    console.log(error.message);
  }
}

removeContact();

module.exports = {
  listContacts,
  addContact,
  getContactById,
  removeContact,
};
